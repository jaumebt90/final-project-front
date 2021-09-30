import { useState, useEffect } from "react";
import axios from "axios";
import JugadaCard from "./../components/JugadaCard";

const API_URL = process.env.REACT_APP_API_URL;

function Jugadas() {
  const [jugadas, setJugadas] = useState([]);

  const getAllJugadas = () => {
    axios
      .get(`${API_URL}/jugadas`)
      .then((response) => setJugadas(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJugadas();
  }, []);

  return (
    <div className="jugadasListPage">
      <h1>Jugadas</h1>
      {jugadas?.map((jugada) => (
        <JugadaCard key={jugada._id} {...jugada} />
      ))}
    </div>
  );
}

export default Jugadas;
