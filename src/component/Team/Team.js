import React from 'react';
import "./team.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Team = (props) => {

    const team = props.team;

    const totalSalary = team.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);

    return (
        <div>
            <div className="text-center">
                <h1>Your Team</h1>
            </div>
            <h4>Total player {team.length}</h4>
            <h4>Total Salary {totalSalary} BDT</h4>
            <div>
                <h4>Player List</h4>
                {
                    team.map((player) => <p className="mx-3 my-2" key={player.id}>{player.name}</p>)
                }
            </div>
            
        </div>
    );
};

export default Team;

