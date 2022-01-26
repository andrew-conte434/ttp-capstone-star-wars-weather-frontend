import "../Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../suns-logo.png"
import HomePage from "./HomePage";

export default function Navbar() {
  return (
    <div className="nav-banner">
      <div className="nav-header">
        {/* Link component takes a very simple prop to= that tells us where we want to redirect */}
        <img
          src={Logo}
          className="nav-logo"
        />
        <h1 id="unisearch">StarCast</h1>
      </div>

      <div className="nav-links">
        <Link to="/home" className="nav-home">Home</Link>
        <Link to={HomePage} className="nav-campuses">My Cities</Link>
      </div>
    </div>
  );
}