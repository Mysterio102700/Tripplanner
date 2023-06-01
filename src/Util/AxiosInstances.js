import axios from "axios";

const API_BASE_URL = "https://travel-advisor.p.rapidapi.com";



export const AxiosInstances = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '87827f1c84mshcc050ec80bd24e2p16bcdfjsnc548a5060814',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
});
