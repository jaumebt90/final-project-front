import { useState, useEffect } from "react";
import Api from "../services/ApiCall";

function Club() {
  /*const [countriesData, setCountries] = useState([]);*/
  useEffect(() => {
    const API = new Api();
    API.getInfo()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Club</h1>
    </div>
  );
}

export default Club;
