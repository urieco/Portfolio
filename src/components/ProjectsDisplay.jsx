import { Project } from "./Project";
import WeatherAppPicture from "../images/weather-app.png";
import CVBuilderReactAppPicture from "../images/cv-builder-react.png";
import ToDoListPicture from "../images/to-do-list.png";
import SignUpFormPicture from "../images/signup-form.png";
import AdminDashboardPicture from "../images/admin-dashboard.png";
import BasicCalculatorPicture from "../images/basic-calculator.png";

function ProjectsDisplay() {
  return (
    <>
      <h1>MY PROJECTS</h1>
      <div className="ProjectsDisplay">
        <Project
          source={WeatherAppPicture}
          link="https://urieco.github.io/weather-app/"
          title="Weather App"
          linkToGithub="https://github.com/urieco/weather-app"
        />

        <Project
          source={CVBuilderReactAppPicture}
          link="https://urieco.github.io/cv-builder-react/"
          title="CV Builder"
          cols='secondCols'
          linkToGithub="https://github.com/urieco/CV-builder-react"
        />

        <Project
          source={ToDoListPicture}
          link="https://urieco.github.io/todo-list/"
          title="Todo App"
          linkToGithub="https://github.com/urieco/todo-list"
        />

        <Project
          source={SignUpFormPicture}
          link="https://urieco.github.io/Sign-up-Form/"
          title="Signup Form"
          cols='secondCols'
          linkToGithub="https://github.com/urieco/Sign-up-Form"
        />

        <Project
          source={AdminDashboardPicture}
          link="https://urieco.github.io/Admin-Dashboard/"
          title="Admin Dashboard"
          linkToGithub="https://github.com/urieco/Admin-Dashboard"
        />

        <Project
          source={BasicCalculatorPicture}
          link="https://urieco.github.io/Basic-Calculator/"
          title="Basic Calculator"
          cols=' secondCols'
          linkToGithub="https://github.com/urieco/Basic-Calculator"
        />
      </div>
    </>
  );
}

export { ProjectsDisplay };
