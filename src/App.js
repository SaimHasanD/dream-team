import { useEffect, useState } from 'react';
import './App.css';
import playerData from "./component/Data/data.json"
import Player from './component/Player/Player';
import Team from './component/Team/Team';

function App() {

// ------------------------------------GET PLAYER DATA AND USE---------------------------------------------- 
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  }, [])

  const [team, setTeam] = useState([]);
  const handleAddPlayer = (player) => {
    const totalPlayer = [...team, player]
    setTeam(totalPlayer);
  } 

  return (
    <div className="App">

    <header>
    <h1>Make Your Dream Team</h1>
    </header>

      <div id="player">
        {/* ---------------------------------------PLAYER INFO/PLAYER CARD------------------------------------------- */}      
      <div id="playerInfo">
      {
        player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
      }
      </div>
{/* ---------------------------------------CREATE TEAM------------------------------------------- */}      
      <div className="createTeam">
         <Team team={team}></Team>
      </div>
      </div>
    </div>
  );
}

export default App;
