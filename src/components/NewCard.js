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

  const shortedDescription = () => {
    console.log("ENTRA EN LA DESCRIPCIÓN", description);
    if (description?.length > 220) {
      return description.substring(0, 220) + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="newCard card">
      <Link to={`/news/${_id}`}>
        <h3 className='newtittle'>{title}</h3>
      </Link>
      <div className="descrip">
        {/* <p style={{ maxWidth: "400px" }}>{description} </p> */}
        <p style={{ maxWidth: "400px" }}>{shortedDescription()} </p>
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
