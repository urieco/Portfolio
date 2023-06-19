import "./App.scss";
import { Introduction } from "./components/Introduction";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
    </div>
  );
}

export default App;
