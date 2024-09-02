import "./App.css";
import img from "./images/illustration-empty.svg";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="App">
      <img src={img} alt="calculator with money bills" />
      <Inputs></Inputs>
    </div>
  );
}

export default App;
