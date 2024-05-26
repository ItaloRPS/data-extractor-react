import React from 'react';
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Alert } from "../../components/Alert";
import {Input} from '../../components/Input'
import { Invoice } from "../../control/invoice/invoice.control";
import * as Styled from "./styles";

export const HomeTemplate = () => {
  const [client, setClient] = useState()
  const [categories, setCategories] = useState(['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'])
  const [serieskwh, setSerieskwh] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [seriesVlr, setSeriesVlr] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
  const [error, setError] = useState('')
  useEffect(()=>{
    const nclient = sessionStorage.getItem("nclient");
    if (nclient) {
      hitoryClient(nclient);
    }
  },[])

  const getHitoryClients = async (client)=>{
    if(client){
     const result = await Invoice.getHitoryClients(client)
     if(result && result.data.length > 0){
      sessionStorage.setItem("nclient",client)
      setClient(client)
       return result.data
     }
     setError("Cliente não encontrado!")
     return []
    }
  }

  const hitoryClient = async (nCliente)=>{
    if(!nCliente){
      return null
    }
      const data = await getHitoryClients(nCliente)
      if (data.length === 0) {
        return 
      }
      const history = orderHistory(data)
      setCategories(history.map((data)=>{
        return data.reference
      }))
      const consumo = history.map((data)=>{
        return data.consumo
      })
      const compensada = history.map((data)=>{
        return data.compensada
      })
      const total = history.map((data)=>{
        return data.vlr_total
      })
      const Economia = history.map((data)=>{
        return Math.abs(data.economia)
      })
      setSerieskwh([
        {
          name: "Consumo de Energia Elétrica",
          data:consumo
        },
        {
          name: "Energia Compensada",
          data: compensada
        }
      ])
      setSeriesVlr([
            {
          name: "Valor Total sem GD",
          data: total,
          color:"#0c4a96",
            foreColor: '#373d3f'
        },
        {
          name: "Economia GD",
          data: Economia,
          color:"#0e965b"
        },
      ])
  }

  const orderHistory = (invoices)=>{
    const monthOrder = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    
    invoices.sort((a, b) => {
      const [monthA, yearA] = a.reference.split('/');
      const [monthB, yearB] = b.reference.split('/');
    
      const yearDiff = parseInt(yearA) - parseInt(yearB);
      if (yearDiff !== 0) {
        return yearDiff;
      }
    
      const monthIndexA = monthOrder.indexOf(monthA);
      const monthIndexB = monthOrder.indexOf(monthB);
    
      return monthIndexA - monthIndexB;
    });
    
    return invoices
    
  }

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: categories
    }
  } 
  
  return (
    <>
    <h1>Bem Vindo!</h1>
    <Styled.H3>{client?`Cliente nº: ${client}`:"Por favor, informe o número do cliente."}</Styled.H3>
    <Alert message={error}/>
    <Styled.containerSeasch>
          <Input type={"number"} placeholder={"Nº Cliente"} text={"Nº Cliete"} onChange={(event)=>[setClient(event.target.value),setError('')]} ></Input>
          <Styled.Button onClick={() => hitoryClient(client)}>
            Buscar
          </Styled.Button>
    </Styled.containerSeasch>
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Paragraph>Consumo em kwh:</Styled.Paragraph>
        <Chart
        options={options}
        series={serieskwh}
        type="line"
        width="100%"
        />
      </Styled.Content>
      <Styled.Content>
      <Styled.Paragraph>Consumo em Valor:</Styled.Paragraph>
        <Chart
        options={options}
        series={seriesVlr}
        type="bar"
        width="100%"
        />
      </Styled.Content>
    </Styled.Wrapper>
    </>
  );
};
