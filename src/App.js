import { useEffect, useState } from 'react';
import './App.css';
import playerData from "./component/Data/data.json"
import Player from './component/Player/Player';
import Cart from './component/Cart/Cart';

function App() {

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, [])
  console.log(player);

  return (
    <div className="App">
      <div id="playerInfo">
      {
        player.map(player => <Player player={player} key={player.id}></Player>)
      }
      </div>
      <Cart></Cart>
    </div>
  );
}

export default App;
