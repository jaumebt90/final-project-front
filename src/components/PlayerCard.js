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
        </>
      ) : null}
    </div>
  );
}

export default PlayerCard;
