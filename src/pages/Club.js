import { useState, useEffect } from "react";
import Api from "../services/ApiCall";
//import PlayerModel from "../../../final-project/models/Player.model";

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
    <div className="club">
      <h1>Bienvenidos al +++++++++++++</h1>
      <div className="texto">
        <p>
          Su primera temporada en el 'antiguo' San Paolo, lastrada por una
          lesión de hombro, no fue excelsa. Aún así, marcó 10 goles en 1.866
          minutos. Ahora, en cambio, no hay quien le pare. 'Osi' suma seis goles
          -cuatro en Liga- y una asistencia en seis partidos. Una racha que
          tratará de ampliar en la UEFA Europa League frente al Spartak Moscú.
        </p>
      </div>
    </div>
  );
}

export default Club;
