import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function Player() {
  const [name, setName] = useState(null);
  const [alias, setAlias] = useState(null);
  const [position, setPosition] = useState(null);
  const [hobbie, setHobbie] = useState(null);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAlias(e) {
    setAlias(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleHobbie(e) {
    setHobbie(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, alias, position, hobbie };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/staff`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //Reset the state
        setName("");
        setAlias("");
        setPosition("");
        setHobbie("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      Staff
      <form className="">
        <label>Nombre</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Alias</label>
        <input type="text" name="alias" value={alias} onChange={handleAlias} />

        <label>Posicion</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={handlePosition}
        />
        <label>Hobbies</label>
        <input
          type="text"
          name="hobbie"
          value={hobbie}
          onChange={handleHobbie}
        />

        <button onClick={handleSubmit}>Crear Staff</button>
      </form>
    </div>
  );
}
