import './App.css';
import Movies from './Movies';



function App() {
  return (
    <div className="App">
      <Movies title="The Fellowship of the ring" hours="2" minutes="58" />
      <Movies title="The Two Towers" hours="2" minutes="59" />
      <Movies title="The Return of the King" hours="3" minutes="21" />
    </div>
  );
}

export default App;
