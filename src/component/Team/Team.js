
import React from 'react';

const cart = (props) => {

    const player = props.team;

    const totalSalary = player.reduce( (totalSalary, player) => totalSalary + Number(player.salary),0)
    
    console.log(player);
    console.log(totalSalary);

    return (
        <div>
            <h4>total player {player.length}</h4>
            <h4>Total Salary {totalSalary}</h4>
            {
                player.map((player) => <p>{player.name}</p>)
            }   
        </div>
    );
};

export default cart;

