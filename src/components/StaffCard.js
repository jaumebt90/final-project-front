import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

// We are deconstructing props object directly in the parentheses of the function
function StaffCard({ name, alias, position, hobbie, _id, handleStaffDelete }) {
  const { userData, isCoach } = useContext(AuthContext);

  return (
    <div className="StaffCard card">
      <div className="staffcard">
        <h3>{name}</h3>
        <p style={{ maxWidth: "400px" }}>
          <u>Apodo: </u>
          {alias}{" "}
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
              className="botostaff"
              onClick={() => handleStaffDelete(_id)}
            >
              Borrar
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default StaffCard;
