import React from 'react';
import './player.css'

const Player = (props) => {

    const {name, image, age, batting, bowling, wicketkeeper, playingRole, salary, facebook, instagram} = props.player;

    return (
        <div id="playerCard">
            <img src={image} alt="" />
           <h1>{name} </h1>
           <p>{age}</p>
           <p>{batting}</p>
           <p>{bowling}</p>
           <p>{wicketkeeper}</p>
           <p>{playingRole}</p>
           <p>{salary}</p>
           <a href={facebook}>Facebook</a>
           <br />
           <a href={instagram}>Instagram</a>
        </div>
    );
};

export default Player;