import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api-vistoria-app-florareiro.vercel.app/api"
    : "http://localhost:8080/api";

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
