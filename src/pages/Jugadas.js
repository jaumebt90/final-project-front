import { useState, useEffect } from "react";
import axios from "axios";
import JugadaCard from "./../components/JugadaCard";

const API_URL = process.env.REACT_APP_API_URL;

function Jugadas() {
  const [jugadas, setJugadas] = useState([]);

  const getAllJugadas = () => {

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/plays`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setJugadas(response.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJugadas();
  }, []);

  console.log(jugadas)

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
