import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditPlayerPage(props) {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [hobbie, setHobbie] = useState("");
  const playerId = props.match.params.id;

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/player/${playerId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const onePlayer = response.data;
        setName(onePlayer.name);
        setAlias(onePlayer.alias);
        setNumber(onePlayer.number);
        setPosition(onePlayer.position);
        setHobbie(onePlayer.hobbie);
      })
      .catch((err) => console.log(err));
  }, [playerId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, alias, number, position, hobbie };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/players/${playerId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        props.history.push("/club");
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Apodo:</label>
        <textarea
          type="text"
          name="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />

        <label>Dorsal:</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <label>Hobbie:</label>
        <input
          type="text"
          name="hobbie"
          value={hobbie}
          onChange={(e) => setHobbie(e.target.value)}
        />

        <button type="submit">Actualizar perfil</button>
      </form>
    </div>
  );
}
