import React from 'react';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import {Input} from '../../components/Input'
import {Table} from '../../components/Table'
import {Invoice} from '../../control/invoice/invoice.control'
import { IoDocumentOutline } from "react-icons/io5";
import { Alert } from '../../components/Alert';

export function IncoicesTemplate() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [client, setClient] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    const nclient = sessionStorage.getItem("nclient");
    if (nclient) {
      getClients(nclient);
    }
  },[]) 

  const extrairDados = (invoices) => {
    const dataInvoices = invoices.map((invoice)=>{
      return [invoice.reference, invoice.expiredData, invoice.total, invoice.accessKey,<Styled.Link onClick={()=>downloadInvoice(invoice.document)}>Baixar</Styled.Link>];
    })
    return dataInvoices
  };
 
  const getClients = async (client)=>{
    if(client){
      setClient(client)
     const result = await Invoice.getClient(client)
     if(result && result.data.length > 0){
       const arrayInvoice = extrairDados(result.data)
       setInvoiceData(arrayInvoice)
       sessionStorage.setItem("nclient",client)
     }else{
      setError("Cliente não encontrado!")
     }
    }
  }

  const downloadInvoice = async(fileName) => {
    const base64 = await Invoice.getDocument(fileName)
    if(!base64 && !base64.status === 200){
      return 
    }

    const byteCharacters = atob(base64.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headers = ['Referencia', 'Vencimento', 'Valor','Chave','']

  return (
    <>
      <h1>Faturas</h1>
      <Alert message={error}/>
      <Styled.containerSeasch>
          <Input type={"number"} placeholder={"Nº Cliente"} text={"Nº Cliete"} onChange={(event)=>[setClient(event.target.value),setError('')]}></Input>
          <Styled.Button onClick={() => getClients(client)}>
            Buscar
          </Styled.Button>

      </Styled.containerSeasch>
      {invoiceData&&
      <>
        <h3>Nº Cliente:{client}</h3>
        <Table data={invoiceData} headers={headers}/>
      </>
      }
      
    </>
  );
}