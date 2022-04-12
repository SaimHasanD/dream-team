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
  console.log(team);

  return (
    <div className="App">
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
  );
}

export default App;
