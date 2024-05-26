import api from "../../services/api";

export const Invoice = {

  create: async (data) =>{
    try {
       const result =  await api.post('file/upload',data,{
                                        headers:{'Content-Type': 'multipart/form-data;*'},
                                        onUploadProgress:(progressEvent) => {
                                            let progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                                            }
                                        })
       return result;

    } catch (error) {
        return error
    }
  },

  get: async () => {
       try {
      const result = await api.get("invoice");
      return result;
    } catch (error) {
      return error;
    }
  },

  getOne: async (id) => {
       try {
      const result = await api.get(`invoice/${id}`);
      return result;
    } catch (error) {
      return error;
    }
  },

  getClient: async (nclient) => {
       try {
      const result = await api.get(`invoice/client/${nclient}`);
      return result;
    } catch (error) {
      return error;
    }
  },
  getHitoryClients: async (nclient) => {
       try {
      const result = await api.get(`invoice/hitory/${nclient}`);
      return result;
    } catch (error) {
      return error;
    }
  },

 getDocument: async (docname) => {
    try {
      const result = await api.get(`invoice/downloadDoc/${docname}`);
      return result;
    } catch (error) {
      return error;
    }
  },
};
