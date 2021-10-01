import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import { AuthContext } from "./../../context/auth.context";
import EditProfile from "./EditProfile";
import AddNews from "./AddNews";
import Team from "./Team";

import "./styles.css";

function Profile() {
  const { userData, isCoach, verifyCoach } = useContext(AuthContext);
  console.log(userData);

  useEffect(() => {
    verifyCoach();
  }, []);

  return (
    <div>
      <h1>Bienvenido {userData.name}</h1>
      <div className="inner-container">
        <div className="menu">
          <div className="menu-item">
            <Link to="/profile/edit">Editar Perfil </Link>
          </div>

          {isCoach ? (
            <>
              <div className="menu-item">
                <Link to="/profile/add-news">Añadir Noticias</Link>
              </div>
              <div className="menu-item">
                <Link to="/profile/team">Añadir Plantilla</Link>
              </div>
            </>
          ) : null}
        </div>
        <div className="content">
          <PrivateRoute exact path="/profile/edit" component={EditProfile} />
          <PrivateRoute exact path="/profile/add-news" component={AddNews} />
          <PrivateRoute exact path="/profile/team" component={Team} />
        </div>
      </div>
    </div>
  );
}
export default Profile;
