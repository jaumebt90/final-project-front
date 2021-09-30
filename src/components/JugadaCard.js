import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function JugadaCard ( { title, video, description, _id } ) {
  
  return (
    <div className="JugadaCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <video src={video} />
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default JugadaCard;