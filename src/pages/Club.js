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

  const handleStaffDelete = (id) => {
    axios.delete(`${API_URL}/club/staff/${id}`).then(() => getAllStaff());
  };

  const handlePlayerDelete = (id) => {
    axios.delete(`${API_URL}/club/players/${id}`).then(() => getAllPlayers());
  };

  let basePlayers = players.filter((player) => player.position === "Base");

  let escoltaPlayers = players.filter(
    (player) => player.position === "Escolta"
  );

  let aleroPlayers = players.filter((player) => player.position === "Alero");

  let alaPivotPlayers = players.filter(
    (player) =>
      player.position === "Ala-pívot" ||
      player.position === "Ala Pívot" ||
      player.position === "Ala pívot" ||
      player.position === "Ala-pivot" ||
      player.position === "Ala Pivot" ||
      player.position === "Ala pivot"
  );

  let pivotPlayers = players.filter(
    (player) => player.position === "Pívot" || player.position === "Pivot"
  );

  return (
    <div className="club">
      <h1 className="welcome">Bienvenidos al +++++++++++++</h1>
      <div className="texto">
        <p>
          Su primera temporada en el 'antiguo' San Paolo, lastrada por una
          lesión de hombro, no fue excelsa. Aún así, marcó 10 goles en 1.866
          minutos. Ahora, en cambio, no hay quien le pare. 'Osi' suma seis goles
          -cuatro en Liga- y una asistencia en seis partidos. Una racha que
          tratará de ampliar en la UEFA Europa League frente al Spartak Moscú.
        </p>
      </div>
      <h2 className="plantilla">Plantilla/equipo 2021-2022</h2>
      {/* <div className="row">
        <h3 className="jugadores">Jugadores</h3>
        {players?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div> */}

      <div className="row">
        <h4 className="jugadores">Bases</h4>
        {basePlayers?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h4 className="jugadores">Escoltas</h4>
        {escoltaPlayers?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h4 className="jugadores">Aleros</h4>
        {aleroPlayers?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h4 className="jugadores">Ala-Pívot</h4>
        {alaPivotPlayers?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h4 className="jugadores">Pívots</h4>
        {pivotPlayers?.map((player) => (
          <div className="col-4">
            <PlayerCard
              key={player._id}
              {...player}
              handlePlayerDelete={handlePlayerDelete}
            />
          </div>
        ))}
      </div>

      <div className="row">
        <h3 className="staff">Staff</h3>
        {staff?.map((staff) => (
          <div className="col-4">
            <StaffCard
              className="col-4"
              key={staff._id}
              {...staff}
              handleStaffDelete={handleStaffDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Club;
