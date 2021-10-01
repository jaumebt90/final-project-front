import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function StaffCard({ name, alias, position, hobbies, _id }) {
  return (
    <div className="StaffCard card">
      <h3>{name}</h3>
      <p style={{ maxWidth: "400px" }}>{alias} </p>
    </div>
  );
}

export default StaffCard;
