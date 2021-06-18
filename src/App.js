import Movie from './components/Movie';
import './App.css';
import Button from './components/Button';
import Sort from "./components/Sort";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie DataBase</h1>
        <div>
          <Button text='Sort by Date Ascending'></Button>
          <Button text='Sort by Date Descending'></Button>
          <Button text='Best Rate'></Button>
          <Button text='A-Z'></Button>
          <Button text='Z-A'></Button>
          <Sort text="TestSort"></Sort>
        </div>
        <Movie></Movie>
      </header>
    </div>
  );
}

export default App;
