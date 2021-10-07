import React, { useState } from "react";
import axios from "axios";
import UploadService from "./../../services/Upload.Service";

const API_URL = process.env.REACT_APP_API_URL;

export default function AddPlays() {
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleVideoInput = (e) => {

    const upload = new UploadService();

    let formData = new FormData();

    formData.append("file", e.target.files[0]);

    upload
      .fileUpload(formData)
      .then((response) => setVideo(response.data.imageUrl))
      .catch((err) => console.log(err));
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { video, title, description, type };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/play`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //Reset the state
        setVideo("");
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
        <label>Vídeo</label>
        <input
          type="file"
          name="video"
          accept="video/mp4,video/x-m4v,video/*"
          onChange={handleVideoInput}
        />

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
          <option value="nothing">-</option>
          <option value="Ataque">Ataque</option>
          <option value="Defensa">Defensa</option>
        </select>

        <button onClick={handleSubmit}>Crear Jugada</button>
      </form>
    </div>
  );
}
