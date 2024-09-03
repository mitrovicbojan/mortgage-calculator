import "./App.css";
import img from "./images/illustration-empty.svg";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="App">
      <Inputs></Inputs>
      <div>
        <img src={img} alt="calculator with money bills" />
      </div>
    </div>
  );
}

export default App;
