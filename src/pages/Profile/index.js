import { useContext } from "react";
import { Link } from "react-router-dom"
import PrivateRoute from "../../components/PrivateRoute";
import { AuthContext } from "./../../context/auth.context";
import EditProfile from "./EditProfile";
import News from "./News";
import Team from "./Team";

import './styles.css'

function Profile() {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  return (
    <div>
      <h1>Bienvenido {userData.name}</h1>
      <div className="inner-container">
          <div className="menu">
              <div className="menu-item"> <Link to="/profile/edit">Editar Perfil </Link></div>
              <div className="menu-item"><Link to="/profile/news">Añadir Noticias</Link></div>
              <div className="menu-item"><Link to="/profile/team">Añadir Plantilla</Link></div>
          </div>
          <div className="content">
                  <PrivateRoute exact path="/profile/edit" component={EditProfile} />
                  <PrivateRoute exact path="/profile/news" component={News}/>
                  <PrivateRoute exact path="/profile/team" component={Team}/>
            </div>
        </div>
    </div>
  );
}
export default Profile;
