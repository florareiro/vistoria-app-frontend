import axios from "axios";

export default axios.create({
  baseURL: [
    "https://api-vistoria-app-florareiro.vercel.app",
    "http://localhost:8080/api",
  ],
  headers: {
    "Content-type": "application/json",
  },
});
