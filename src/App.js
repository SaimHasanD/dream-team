import { useEffect, useState } from 'react';
import './App.css';
import playerData from "./component/Data/data.json"
import Player from './component/Player/Player';

function App() {

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, [])
  console.log(player);

  return (
    <div className="App">
      <h1>Total Player {playerData.length}</h1>
      <div id="playerInfo">
      {
        player.map(player => <Player player={player} key={player.id}></Player>)
      }
      </div>
    </div>
  );
}

export default App;
