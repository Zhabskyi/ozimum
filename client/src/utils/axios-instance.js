import axios from "axios";

let instance;

if (process.env.REACT_APP_API_BASE_URL && process.env.NODE_ENV !== "test") {
  instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
  });
} else if (process.env.NODE_ENV !== "test") {
  instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
  });
} else {
  instance = axios;
}


export default instance;