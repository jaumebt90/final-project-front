import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// We are deconstructing props object directly in the parentheses of the function
function NewCard({ title, description, _id, handleDelete }) {
  const { userData, isCoach } = useContext(AuthContext);
  console.log("EL BUEN USER COACH", isCoach);
  console.log("AQUI VAN LAS PROPS", title, description, _id);

  // useEffect(() => {

  // }, []);

  return (
    <div className="NewCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      {console.log(userData)}
      <p style={{ maxWidth: "400px" }}>{description} </p>
      {userData && userData.rol === "coach" ? (
        <>
          <button onClick={() => handleDelete(_id)}>Borrar</button>
        </>
      ) : null}
    </div>
  );
}

export default NewCard;
