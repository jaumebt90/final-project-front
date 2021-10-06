import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OneNewPage from "./pages/OneNewPage";
import Jugadas from "./pages/Jugadas";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"; // <== IMPORT
import AnonRoute from "./components/AnonRoute"; // <== IMPORT
import Club from "./pages/Club";
import Profile from "./pages/Profile";
import EditNewPage from "./pages/EditNewPage";
import EditStaffPage from "./pages/EditStaffPage";
import EditPlayerPage from "./pages/EditPlayerPage";
import EditPlayPage from "./pages/EditPlayPage";
import OnePlayPage from "./pages/OnePlayPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/club" component={Club} />
        <Route exact path="/news/:id" component={OneNewPage} />
        <Route exact path="/plays/:id" component={OnePlayPage} />

        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/plays" component={Jugadas} />
        <PrivateRoute exact path="/plays/edit/:id" component={EditPlayPage} />
        <PrivateRoute exact path="/news/edit/:id" component={EditNewPage} />
        <PrivateRoute exact path="/staff/edit/:id" component={EditStaffPage} />
        <PrivateRoute
          exact
          path="/player/edit/:id"
          component={EditPlayerPage}
        />

        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
