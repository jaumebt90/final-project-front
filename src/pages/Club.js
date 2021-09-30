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
    <div className="club">
      <h1>Bienvenidos al +++++++++++++</h1>

      <p className="texto">
        Su primera temporada en el 'antiguo' San Paolo, lastrada por una lesión
        de hombro, no fue excelsa.
        <br /> Aún así, marcó 10 goles en 1.866 minutos. Ahora, en cambio, no
        hay quien le pare. 'Osi' suma seis goles -cuatro en Liga- y una
        asistencia en seis partidos. Una racha que tratará de ampliar en la UEFA
        Europa League frente al Spartak Moscú.
      </p>
    </div>
  );
}

export default Club;
