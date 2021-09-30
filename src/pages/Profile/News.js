import React, { useState } from "react";

export default function News() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit() {}

  return (
    <div>
      News
      <form className="">
        <label>Título</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label>Descripción</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <button onClick={handleSubmit}>Crear Noticia</button>
      </form>
    </div>
  );
}
