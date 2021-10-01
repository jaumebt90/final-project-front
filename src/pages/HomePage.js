import { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import NewCard from "./../components/NewCard"

const API_URL = process.env.REACT_APP_API_URL;

function HomePage() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log("LAS NEWS AQUI", news)

  return (
    <div>
      <h1>Home Page</h1>
      <Carrousel />

      { news?.map((notice) => <NewCard key={notice._id} {...notice} />  )}
    </div>
  );
}

export default HomePage;
