import {useEffect} from "react";
import "./App.css";
import Pages from "./pages/Pages";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
