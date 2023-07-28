import PropTypes from "prop-types";

function Project({ source, link, title, cols="", linkToGithub}) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className={"Project" + " " + cols}
    >
      <img src={source} />
      <div className="descriptionContainer">
        <div className="projectTitle">{title}</div>
        <a 
          href={linkToGithub}
          target="_blank" 
          rel="noreferrer" 
          className="projectDescription"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub Repository
        </a>
      </div>
    </a>
  );
}

Project.propTypes = {
  source: PropTypes.string,
  linkToGithub: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  cols: PropTypes.string,
};

export { Project };
