import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

// We are deconstructing props object directly in the parentheses of the function
function PlayerCard({
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
    <div className="PlayerCard card">
      <div className="playercard">
        <h3>{name}</h3>
        <p style={{ maxWidth: "400px" }}>
          <u>Apodo: </u>
          {alias}{" "}
        </p>
        <p>
          <u>Número: </u> {number}
        </p>
        <p>
          <u>Posición: </u>
          {position}
        </p>
        <p>
          <u>Hobbies: </u>
          {hobbie}
        </p>
        {userData && userData.rol === "coach" ? (
          <>
            <button
              className="botoplayer"
              onClick={() => handlePlayerDelete(_id)}
            >
              Borrar
            </button>
          </>
        ) : null}
      </div>
      <h3>{name}</h3>
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
      {userData && userData.rol === "coach" ? (
        <>
          <button onClick={() => handlePlayerDelete(_id)}>Borrar</button>
          <Link to={`/player/edit/${_id}`}>
            <button>Editar</button>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default PlayerCard;
