import './App.css';
import Movies from './Movies';



function App() {
  return (
    <div className="App">
      <img src='./logo192.png'></img>
      <Movies title="The Fellowship of the ring" hours="2" minutes="58" />
      <Movies title="The Two Towers" hours="2" minutes="59" />
      <Movies title="The Return of the King" hours="3" minutes="21" />
    </div>
  );
}

export default App;
