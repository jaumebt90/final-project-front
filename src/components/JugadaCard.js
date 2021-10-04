import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";

// We are deconstructing props object directly in the parentheses of the function
function JugadaCard({ title, description, type, _id, handlePlayDelete }) {
  const { userData, isCoach } = useContext(AuthContext);

  return (
    <div className="JugadaCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      {userData && userData.rol === "coach" ? (
        <div className="botones">
          <>
            <Link to={`/plays/edit/${_id}`}>
              <button className="botoedit">Editar</button>
            </Link>
            <button
              className="botoborrar"
              onClick={() => handlePlayDelete(_id)}
            >
              Borrar
            </button>
          </>
        </div>
      ) : null}
    </div>
  );
}

export default JugadaCard;
