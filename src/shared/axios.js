import axios from "axios";

export const apis = axios.create({
<<<<<<< HEAD
  baseURL: process.env.REACT_APP_SERVER_URL,
=======
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
>>>>>>> 3309e3be4eb64f544c45af0db6c512775028cc7c
  headers: {},
});