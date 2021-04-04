import './css/style.css';
import Grid from './components/grid';
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="text">Meme Machine</div>
        <div className="madeby"><a href="https://linktr.ee/tejaswan">made by tejaswan</a></div>
      </header>
      <Grid />
    </div>
  );
}

export default App;
