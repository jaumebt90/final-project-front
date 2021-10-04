import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function AddPlays() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, type };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/play`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //Reset the state
        setTitle("");
        setDescription("");
        setType("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      Jugadas
      <form className="">
        <label>Nombre</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label>Descripción</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label>Tipo de jugada</label>
        <select onChange={handleType}>
          <option value="Ataque" >Ataque</option>
          <option value="Defensa">Defensa</option>
        </select>

        <button onClick={handleSubmit}>Crear Jugada</button>
      </form>
    </div>
  );
}
