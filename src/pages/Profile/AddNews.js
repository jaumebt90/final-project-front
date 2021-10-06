import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function AddNews() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/news`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //Reset the state
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      News
      <form className="">
        <label>Título</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label>Descripción</label>
        {/* <textarea
          type="text"
          rows="10"
          cols="50"
          name="description"
          value={description}
          onChange={handleDescription}
        /> */}
        <MDEditor value={description} onChange={setDescription} />

        <button onClick={handleSubmit}>Crear Noticia</button>
      </form>
    </div>
  );
}
