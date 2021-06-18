import Movie from './components/Movie';
import './App.css';
import Sort from "./components/Sort";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie DataBase</h1>
        <Movie></Movie>
      </header>
    </div>
  );
}

export default App;
