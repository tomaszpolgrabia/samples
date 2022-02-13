import './App.css';
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <Game data={{'Poland': 'Warszawa', 'Germany': 'Berlin', 'France': 'Paris', 'Spain': 'Madrid'}}/>
    </div>
  );
}

export default App;
