import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import imagen from "../assets/images.png";

// We are deconstructing props object directly in the parentheses of the function
function PlayerCard({
  image,
  name,
  alias,
  number,
  position,
  hobbie,
  _id,
  handlePlayerDelete,
}) {
  const { userData } = useContext(AuthContext);
  return (
    <div className="PlayerCard card" style={{ height: "520px" }}>
      <div className="playercard">
        {image ? (
          <img
            className="playercard"
            src={image}
            alt=""
            style={{ width: "278px", height: "290px" }}
          />
        ) : (
          <img src={imagen} alt="" />
        )}
      </div>
      <h3>{name}</h3>
      <div className="infocard">
        <p style={{ maxWidth: "400px" }}>
          <u>Apodo: </u>
          {alias}{" "}
        </p>
        <p>
          <u>Numero: </u> {number}
        </p>
        <p>
          <u>Posicion: </u>
          {position}
        </p>
        <p>
          <u>Aficiones: </u>
          {hobbie}
        </p>
      </div>
      {userData && userData.rol === "coach" ? (
        <div className="botones">
          <Link to={`/player/edit/${_id}`}>
            <button className="botoedit">Editar</button>
          </Link>
          <button
            className="botoborrar"
            onClick={() => handlePlayerDelete(_id)}
          >
            Borrar
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default PlayerCard;
