import axios from "axios";
import PlayerCard from "./../components/JugadaCard";
import { AuthContext } from "./../context/auth.context";
import { useState, useEffect, useContext } from "react";
import React from "react";
import ReactPlayer from "react-player";

const API_URL = process.env.REACT_APP_API_URL;

export default function OnePlayPage(props) {
  const [play, setPlay] = useState();
  const playId = props.match.params.id;

  const getPlay = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/plays/${playId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPlay(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPlay();
  }, []);

  console.log(play);

  return (
    <div className="onePlay">
      {play?.video ? (
        <ReactPlayer
          url={play?.video}
          playing="true"
          controls="true"
          width="378px"
        />
      ) : null}
      <h1>{play?.title}</h1>
      <p>{play?.description}</p>
    </div>
  );
}
