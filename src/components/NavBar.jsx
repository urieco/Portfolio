import { NavLink } from "react-router-dom";
import { MediaLink } from "./MediaLink";

function NavBar() {
  console.log('NavBar')
  return (
    <div className="NavBar">
      <h2 className="logo">PORTFOLIO<b>.</b></h2>
      <div className="navLinkContainer">
        <NavLink className="NavLink" to="/">HOME</NavLink>
        <NavLink className="NavLink" to="/about">ABOUT</NavLink>
        <NavLink className="NavLink" to="/projects">PROJECTS</NavLink>
        <NavLink className="NavLink" to="/contact">CONTACT</NavLink>
      </div>
      <MediaLink />
    </div>
  );
}

export { NavBar };

