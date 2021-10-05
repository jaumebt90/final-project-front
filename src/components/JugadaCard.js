import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";
import ReactPlayer from "react-player";

// We are deconstructing props object directly in the parentheses of the function
function JugadaCard({
  video,
  title,
  description,
  type,
  _id,
  handlePlayDelete,
}) {
  const { userData, isCoach } = useContext(AuthContext);

  const shortedDescription = () => {
    if (description?.length > 220) {
      return description.substring(0, 220) + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="JugadaCard card">
      <div className="videoPlay">
        {video ? (
          <ReactPlayer
            url={video}
            playing={false}
            controls={true}
            width="378px"
          />
        ) : null}
      </div>
      <Link to={`/plays/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <div className="descrip">
        <p style={{ maxWidth: "400px" }}> {shortedDescription()} </p>
      </div>
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
