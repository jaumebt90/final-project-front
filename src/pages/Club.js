import { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "../components/PlayerCard";
import StaffCard from "../components/StaffCard";
//import Player from "./Profile/Team";
//import PlayerModel from "../../../final-project/models/Player.model";

const API_URL = process.env.REACT_APP_API_URL;

function Club() {
  const [players, setPlayers] = useState([]);
  const [staff, setStaff] = useState([]);

  const getAllStaff = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/club/staff`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //console.log("miembros equipo", response.data);
        setStaff(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllPlayers = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/club/players`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPlayers();
    getAllStaff();
  }, []);
  console.log("los jugadores aqui", players);

  const handleStaffDelete = (id) => {
    axios.delete(`${API_URL}/club/staff/${id}`).then(() => getAllStaff());
  };

  const handlePlayerDelete = (id) => {
    axios.delete(`${API_URL}/club/players/${id}`).then(() => getAllPlayers());
  };

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
      <div className="row cols-1 ">
        <h2 className="staff">Staff</h2>
        {staff?.map((staff) => (
          <StaffCard
            key={staff._id}
            {...staff}
            handleStaffDelete={handleStaffDelete}
          />
        ))}
      </div>
      <div className="row row-cols-1">
        <h2 className="jugadores">Jugadores</h2>
        {players?.map((player) => (
          <PlayerCard
            key={player._id}
            {...player}
            handlePlayerDelete={handlePlayerDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Club;
