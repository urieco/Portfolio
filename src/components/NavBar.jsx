import { MediaLink } from "./MediaLink";

function NavBar() {
  return (
    <div className="NavBar">
      <h2 className="logo">PORTFOLIO<b>.</b></h2>
      <div className="navLinkContainer">
        <div className="NavLink">HOME</div>
        <div className="NavLink">EXPERIENCE</div>
        <div className="NavLink">PROJECTS</div>
        <div className="NavLink">CONTACT</div>
      </div>
      <MediaLink />
    </div>
  );
}

export { NavBar };

