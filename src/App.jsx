import "./Content.scss"
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { LoadingScreen } from "./components/LoadingScreen";
import { useEffect, useState } from "react";


function App() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? <LoadingScreen /> : <div className="App"><NavBar /></div>}
    </>
  );
}

export default App;
