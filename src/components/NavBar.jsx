import { useRef } from "react";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Introduction } from "./Introduction";
import { MediaLink } from "./MediaLink";
import { ProjectsDisplay } from "./ProjectsDisplay";
import { ScrollToTop } from "./ScrollToTop";

function NavBar() {
  const introduction = useRef();
  const experience = useRef();
  const projectsDisplay = useRef();
  const contact = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: (elementRef.current.offsetTop),
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <div className="NavBar">
        <h2 className="logo">
          PORTFOLIO<b>.</b>
        </h2>
        <div className="navLinkContainer">
          <div
            className="NavLink"
            onClick={() => scrollToSection(introduction)}
          >
            HOME
          </div>
          <div className="NavLink" onClick={() => scrollToSection(experience)}>
            EXPERIENCE
          </div>
          <div
            className="NavLink"
            onClick={() => scrollToSection(projectsDisplay)}
          >
            PROJECTS
          </div>
          <div className="NavLink" onClick={() => scrollToSection(contact)}>
            CONTACT
          </div>
        </div>
        <MediaLink />
      </div>
      <div ref={introduction} className="Introduction">
        <Introduction />
      </div>
      <div ref={experience} className="Experience">
        <Experience />
      </div>
      <div ref={projectsDisplay} className="ProjectsDisplaySection">
        <ProjectsDisplay />
      </div>
      <div ref={contact} className="Contact">
        <Contact />
      </div>
    </>
  );
}

export { NavBar };
