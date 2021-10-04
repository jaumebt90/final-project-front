import { useState, useEffect, useContext } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import NewCard from "./../components/NewCard";
import { AuthContext } from "./../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function HomePage() {
  const { userData, isCoach } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNews = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const recentNews = response.data.splice(response.data.length - 3, 3);
        recentNews.reverse();
        setNews(recentNews);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/news/${id}`).then(() => getNews());
  };

  return (
    <div>
      <h1 className="home">Home Page</h1>
      <Carrousel />
      <div className="home-news">
        <div>
          <h2 className="noticiero">Últimas noticias</h2>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          news?.map((notice) => (
            <NewCard key={notice._id} {...notice} handleDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
