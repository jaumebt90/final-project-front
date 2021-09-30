import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import Jugadas from "./pages/Jugadas";
import Pretemporada from "./pages/Pretemporada";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"; // <== IMPORT
import AnonRoute from "./components/AnonRoute"; // <== IMPORT
import Club from "./pages/Club";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/club" component={Club} />

        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/jugadas" component={Jugadas} />
        <PrivateRoute exact path="/pretemporada" component={Pretemporada} />
        <PrivateRoute
          exact
          path="/projects/:id"
          component={ProjectDetailsPage}
        />
        <PrivateRoute
          exact
          path="/projects/edit/:id"
          component={EditProjectPage}
        />

        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
