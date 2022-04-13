import React from 'react';
import './player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const { name, image, age, batting, bowling, wicketkeeper, playingRole, salary, details } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div id="playerCard">
            {/* -----------------------------------------Player Image Div--------------------------------------------- */}
            <div>
                <img id="playerImage" src={image} alt="" />
            </div>
            {/* ---------------------------------------Player Information Div------------------------------------------ */}
            <div>
                <h3 id="name">{name} </h3>
                <p> Age: <b>{age}</b></p>
                <p>Batting Style: <b>{batting}</b></p>
                <p>Bowling Style: <b>{bowling}</b></p>
                <p>Fielding Position: <b>{wicketkeeper}</b></p>
                <p>Playing Role: <b>{playingRole}</b></p>
                <p>Monthly Salary:  <b>{salary}</b> BDT</p>
            </div>
            {/* ------------------------------------------Add button Div----------------------------------------------- */}
            <div className="btnDiv">
                <button id='btn' onClick={() => handleAddPlayer(props.player)}>ADD <FontAwesomeIcon icon={faPlus} /></button>
                <button id='btn'><a className="link" href={details} target='_blank'>More details ...</a></button>
            </div>
        </div>
    );
};



export default Player;