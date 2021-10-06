import { useState, useEffect } from "react";
import axios from "axios";
import JugadaCard from "./../components/JugadaCard";

const API_URL = process.env.REACT_APP_API_URL;

function Jugadas() {
  const [jugadas, setJugadas] = useState([]);

  const getAllPlays = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/plays`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setJugadas(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPlays();
  }, []);

  const handlePlayDelete = (id) => {
    axios.delete(`${API_URL}/plays/${id}`).then(() => getAllPlays());
  };

  let attackPlays = jugadas.filter((jugada) => jugada.type === "Ataque");

  let defensePlays = jugadas.filter((jugada) => jugada.type === "Defensa");

  console.log(jugadas);

  return (
    <div className="jugadasListPage">
      <h1>Jugadas</h1>
      <div className="row">
        <h2 className="jugadas">Ataque</h2>
        {attackPlays?.map((jugada) => (
          <div className="col-4">
            <JugadaCard
              key={jugada._id}
              {...jugada}
              handlePlayDelete={handlePlayDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h2 className="jugadas">Defensa</h2>
        {defensePlays?.map((jugada) => (
          <div className="col-4">
            <JugadaCard
              key={jugada._id}
              {...jugada}
              handlePlayDelete={handlePlayDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jugadas;
