import PropTypes from 'prop-types'
import { Project } from "./Project";
import WeatherAppPicture from "../images/weather-app.png";
import CVBuilderReactAppPicture from "../images/cv-builder-react.png";
import ToDoListPicture from "../images/to-do-list.png";
import SignUpFormPicture from "../images/signup-form.png";
import AdminDashboardPicture from "../images/admin-dashboard.png";
import BasicCalculatorPicture from "../images/basic-calculator.png";

function ProjectsDisplay({ ref }) {
  return (
    <div className="ProjectsDisplaySection" ref={ref}>
      <h1>MY PROJECTS</h1>
      <div className="ProjectsDisplay">
        <Project
          source={WeatherAppPicture}
          link="https://urieco.github.io/weather-app/"
          title="Weather App"
        />

        <Project
          source={CVBuilderReactAppPicture}
          link="https://urieco.github.io/cv-builder-react/"
          title="CV Builder"
          cols='secondCols'
        />

        <Project
          source={ToDoListPicture}
          link="https://urieco.github.io/todo-list/"
          title="Todo App"
        />

        <Project
          source={SignUpFormPicture}
          link="https://urieco.github.io/Sign-up-Form/"
          title="Signup Form"
          cols='secondCols'
        />

        <Project
          source={AdminDashboardPicture}
          link="https://urieco.github.io/Admin-Dashboard/"
          title="Admin Dashboard"
        />

        <Project
          source={BasicCalculatorPicture}
          link="https://urieco.github.io/Basic-Calculator/"
          title="Basic Calculator"
          cols=' secondCols'
        />
      </div>
    </div>
  );
}

ProjectsDisplay.propTypes = {
  ref: PropTypes.any
}

export { ProjectsDisplay };
