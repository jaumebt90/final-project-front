const axios = require("axios");

class CharactersApi {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
    this.api = axios.create({
      baseURL: this.API_URL,
    });
  }

  getInfo = () => this.api.get("/club");
}

module.exports = CharactersApi;
