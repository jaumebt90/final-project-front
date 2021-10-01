import React, { useState } from "react";

export default function Player() {
  const [name, setName] = useState(null);
  const [alias, setAlias] = useState(null);
  const [number, setNumber] = useState(null);
  const [position, setPosition] = useState(null);
  const [hobbie, setHobbie] = useState(null);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAlias(e) {
    setAlias(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleHobbie(e) {
    setHobbie(e.target.value);
  }

  function handleSubmit() {}

  return (
    <div>
      Player
      <form className="">
        <label>Nombre</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Alias</label>
        <input type="text" name="alias" value={alias} onChange={handleAlias} />

        <label>Numero</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleNumber}
        />

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

        <button onClick={handleSubmit}>Crear Jugador</button>
      </form>
    </div>
  );
}
