import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import imagen from "../assets/images.png";

// We are deconstructing props object directly in the parentheses of the function
function StaffCard({ name, alias, position, hobbie, _id, handleStaffDelete }) {
  const { userData, isCoach } = useContext(AuthContext);

  return (
    <div className="StaffCard card">
      <div className="staffcard">
        <img src={imagen} alt=""></img>
      </div>
      <h3>{name}</h3>
      <div className="infocard">
        <p style={{ maxWidth: "400px" }}>
          <u>Apodo: </u>
          {alias}{" "}
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
          <Link to={`/staff/edit/${_id}`}>
            <button className="botoedit">Editar</button>
          </Link>
          <button className="botoborrar" onClick={() => handleStaffDelete(_id)}>
            Borrar
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default StaffCard;
