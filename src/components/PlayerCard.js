import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function PlayerCard({ name, alias, number, position, hobbies, _id }) {
  return (
    <div className="PlayerCard card">
      <h3>{name}</h3>
      <p style={{ maxWidth: "400px" }}>{alias} </p>
    </div>
  );
}

export default PlayerCard;
