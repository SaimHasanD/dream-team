import React from 'react';
import "./team.css"

const Team = (props) => {

    const team = props.team;

    const totalSalary = team.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);

    return (
        <div id="team">
            <div className="headLine">
                <h1>Your Team</h1>
            </div>
            <h4>Total player {team.length}</h4>
            <h4>Total Salary {totalSalary} BDT</h4>
            <div>
                <h4>Player List</h4>
                {
                    team.map((player) => <p id='players' key={player.id}>{player.name}</p>)
                }
            </div>
        </div>
    );
};

export default Team;

