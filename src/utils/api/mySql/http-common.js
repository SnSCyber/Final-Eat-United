import axios from 'axios';

export default axios.create({
  baseURL: "https://eatatunited.com.na/api-calls/",
  headers: {
    "Content-type": "application/json"
  }
});