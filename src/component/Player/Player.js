/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const { name, image, age, batting, bowling, wicketkeeper, playingRole, salary, facebook, instagram } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div id="playerCard">
{/* -----------------------------------------Player Image Div--------------------------------------------- */}
            <div className="imgDiv">
            <img id="playerImage" src={image} alt="" />
            </div>
{/* ---------------------------------------Player Information Div------------------------------------------ */}
            <div className="playerInfo">
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
            </div>
{/* ---------------------------------------Social Media link Div------------------------------------------- */}
            <div className="aDiv">
            {/* -----------------------Using Formal facebook and instagram------------------------ */}
            <a className="link" href={facebook} target='_blank'>Facebook</a>
            <a className="link" href={instagram} target='_blank'>Instagram</a>
            </div>
        </div>
    );
};



export default Player;