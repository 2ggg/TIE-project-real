import axios from "axios";

export const apis = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {},
});