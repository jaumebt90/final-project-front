import { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "../components/PlayerCard";
import StaffCard from "../components/StaffCard";
import React, { useRef } from "react";
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
      player.position === "Ala-Pívot" ||
      player.position === "Ala Pívot" ||
      player.position === "Ala pívot" ||
      player.position === "Ala-pivot" ||
      player.position === "Ala-Pivot" ||
      player.position === "Ala Pivot" ||
      player.position === "Ala pivot"
  );

  let pivotPlayers = players.filter(
    (player) => player.position === "Pívot" || player.position === "Pivot"
  );

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const object = {
    myRefBases: useRef(null),
    myRefEscoltas: useRef(null),
    myRefAleros: useRef(null),
    myRefAlaPivot: useRef(null),
    myRefPivots: useRef(null),
    myRefStaff: useRef(null),
  };
  const executeScroll = (position) => scrollToRef(object[position]);

  return (
    <div className="club">
      <h1 className="welcome">Bienvenidos al Club Baloncesto Sant Joan</h1>
      <div className="clubtop">
        <h2 className="whoare">¿Quienes somos?</h2>
        <div className="texto">
          <p>
            Somos el <b>Club Baloncesto Sant Joan</b>. Somos un equipo formado
            para disfrutar de este maravilloso deporte y competir en la la
            provincia de Alicante. Actualmente el equipo se sitúa en la{" "}
            <b>Categoría Senior</b> <i>(2ª Zonal)</i>
          </p>

          <p>
            El club se fundó en la temporada <b>2014/2015</b> y desde entonces
            no ha parado de competir y atraer nuevos jugadores a sus filas. A
            continuación podréis encontrar la lista de la Plantilla Oficial para
            la temporada 21/22{" "}
          </p>
        </div>
      </div>
      <h2 className="plantilla">Plantilla 2021/2022</h2>

      <div className="botonsplant">
        <button
          className="botoplant"
          onClick={() => executeScroll("myRefBases")}
        >
          BASES
        </button>
        <button
          className="botoplant"
          onClick={() => executeScroll("myRefEscoltas")}
        >
          ESCOLTAS
        </button>
        <button
          className="botoplant"
          onClick={() => executeScroll("myRefAleros")}
        >
          ALEROS
        </button>
        <button
          className="botoplant"
          onClick={() => executeScroll("myRefAlaPivot")}
        >
          ALA-PÍVOTS
        </button>
        <button
          className="botoplant"
          onClick={() => executeScroll("myRefPivots")}
        >
          PÍVOTS
        </button>
        <>
          <button
            className="botoplant"
            onClick={() => executeScroll("myRefStaff")}
          >
            STAFF
          </button>
        </>
      </div>
      <div className="contenedor">
        <div className="row" ref={object.myRefBases}>
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

        <div className="row" ref={object.myRefEscoltas}>
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

        <div className="row" ref={object.myRefAleros}>
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

        <div className="row" ref={object.myRefAlaPivot}>
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

        <div className="row" ref={object.myRefPivots}>
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

        <div className="row" id={staff} ref={object.myRefStaff}>
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
    </div>
  );
}

export default Club;
