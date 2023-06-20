import "./App.scss";
import "./Content.scss"
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Introduction } from "./components/Introduction";
import { NavBar } from "./components/NavBar";
import { ProjectsDisplay } from "./components/ProjectsDisplay";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Experience />
      <ProjectsDisplay />
      <Contact />
    </div>
  );
}

export default App;
