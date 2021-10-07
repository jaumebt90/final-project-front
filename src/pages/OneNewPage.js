import axios from "axios";
import ReactMarkdown from "react-markdown";
import NewCard from "./../components/NewCard";
import { AuthContext } from "./../context/auth.context";
import { useState, useEffect, useContext } from "react";
import React from "react";

const API_URL = process.env.REACT_APP_API_URL;

export default function OneNewPage(props) {
  const [notice, setNotice] = useState();
  const noticeId = props.match.params.id;

  const getNew = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/news/${noticeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setNotice(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNew();
  }, []);

  return (
    <div className="oneNew">
      <h1>{notice?.title}</h1>
      <div className="one-description">
        <ReactMarkdown children={notice?.description} />
      </div>
    </div>
  );
}
