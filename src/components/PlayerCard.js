import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

// We are deconstructing props object directly in the parentheses of the function
function PlayerCard({
  name,
  alias,
  number,
  position,
  hobbies,
  _id,
  handlePlayerDelete,
}) {
  const { userData } = useContext(AuthContext);
  return (
    <div className="PlayerCard card">
      <h3>{name}</h3>
      <p style={{ maxWidth: "400px" }}>{alias} </p>
      {userData && userData.rol === "coach" ? (
        <>
          <button onClick={() => handlePlayerDelete(_id)}>Borrar</button>
        </>
      ) : null}
    </div>
  );
}

export default PlayerCard;
