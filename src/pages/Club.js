import { useState, useEffect } from "react";
import ApiClub from "../services/ApiClub";

function Club() {
  /*const [countriesData, setCountries] = useState([]);*/
  useEffect(() => {
    const API = new ApiClub();
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
