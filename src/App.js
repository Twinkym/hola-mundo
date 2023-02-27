import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Components/pure/Greetings";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greetings.jsx*/}
        <Greetings name="Martin"></Greetings>
      </header>
    </div>
  );
}

export default App;
