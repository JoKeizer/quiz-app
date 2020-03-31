import React from 'react';
import './Game.css';
import {Link} from "react-router-dom";

const Introductie = () => {
    return(
        <div className="game-container">
            <div className="introductie-intro">
                <h1>Hoe werkt het spel?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <ul className="introductieList">
                    <li className="introductieList">In totaal zijn er 10 vragen</li>
                    <li className="introductieList">Voor elk juiste antwoord krijg je 10 punten</li>
                    <li className="introductieList">prijzen voor de nummer 1 t/m 3</li>
                </ul>

                <div className="button-containers">
                    <ul className="homeList">
                        <li className="homeList">
                            <Link to="/play">Play</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Introductie;