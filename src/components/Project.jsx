import PropTypes from "prop-types";

function Project({ source, link, title, cols=""}) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className={"Project" + " " + cols}
    >
      <img src={source} />
      <div className="projectTitle">{title}</div>
    </a>
  );
}

Project.propTypes = {
  source: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  cols: PropTypes.string,
};

export { Project };
