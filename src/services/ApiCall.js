const axios = require("axios");

class Api {
  constructor() {
    const storedToken = localStorage.getItem("authToken");
    this.API_URL = process.env.REACT_APP_API_URL;
    this.api = axios.create({
      baseURL: this.API_URL,
      headers: { Authorization: `Bearer ${storedToken}` },
    });
  }

  getInfo = () => this.api.get("/club");
  
}

module.exports = Api;
