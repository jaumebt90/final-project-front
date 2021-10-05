import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// We are deconstructing props object directly in the parentheses of the function
function NewCard({ title, description, _id, handleDelete }) {
  const { userData, isCoach } = useContext(AuthContext);

  // useEffect(() => {

  // }, []);

  return (
    <div className="newCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <div className='descrip'>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      </div>
      {userData && userData.rol === "coach" ? (
        <div className="botones">
          <Link to={`/news/edit/${_id}`}>
            <button className="botoedit">Editar</button>
          </Link>
          <button className="botoborrar" onClick={() => handleDelete(_id)}>
            Borrar
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default NewCard;
