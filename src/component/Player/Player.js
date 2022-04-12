import React from 'react';
import './player.css'

const Player = (props) => {

    const { name, image, age, batting, bowling, wicketkeeper, playingRole, salary, facebook, instagram } = props.player;

    return (
        <div id="playerCard">
{/* -----------------------------------------Player Image Div--------------------------------------------- */}
            <div className="imgDiv">
            <img id="playerImage" src={image} alt="" />
            </div>
{/* ---------------------------------------Player Information Div------------------------------------------ */}
            <div className="playerInfo">
            <h3 id="name">{name} </h3>
            <p> Age: {age}</p>
            <p>Batting Style: {batting}</p>
            <p>Bowling Style: {bowling}</p>
            <p>Fielding Position: {wicketkeeper}</p>
            <p>Playing Role: {playingRole}</p>
            <p>Monthly Salary: {salary}</p>
            </div>
{/* ------------------------------------------Add button Div----------------------------------------------- */}
            <div className="btnDiv">
                <button id='btn'>ADD</button>
            </div>
{/* ---------------------------------------Social Media link Div------------------------------------------- */}
            <div className="aDiv">
            <a className="link" href={facebook}>Facebook</a>
            <a className="link" href={instagram}>Instagram</a>
            </div>
        </div>
    );
};

export default Player;