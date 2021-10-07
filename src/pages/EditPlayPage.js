import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditPlayPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const playId = props.match.params.id;

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/plays/edit/${playId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const onePlay = response.data;
        setTitle(onePlay.title);
        setDescription(onePlay.description);
      })
      .catch((err) => console.log(err));
  }, [playId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/plays/${playId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => props.history.push("/plays"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="PlayCard card">
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Actualizar jugada</button>
      </form>
    </div>
  );
}
