import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditNewPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notice, setNotice] = useState(null);
  const newId = props.match.params.id;

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/news/${newId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneNew = response.data;
        setTitle(oneNew.title);
        setDescription(oneNew.description);
      })
      .catch((error) => console.log(error));
  }, [newId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${API_URL}/news/${newId}`, 
        requestBody, 
        {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
      .then((response) => {
        props.history.push(`/news/${newId}`);
      });
  };

  return (
    <div className="NewCard card">
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

        <button type="submit">Actualizar noticia</button>
      </form>
    </div>
  );
}
