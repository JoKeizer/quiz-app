import React from 'react';
import {Link} from 'react-router-dom';
import './Game.css';

const Home = () => {
    return(
        <div className="game-container">
            <div className="game-intro">
                <div className="game-wrapper">
                    <div className="logo">
                        <img src="/../../../images/logo.png"/>
                    </div>
                    <h1>TRIVIA</h1>
                    <p>How much do you know about football?
                        Test your football knowledge through
                        5 questions!
                    </p>
                    <div className="button-containers">
                        <ul className="homeList">
                            <li className="homeList-play">
                                <Link to="/play">Play</Link>
                            </li>
                            <li className="homeList">
                                <Link to="/intro">Introductie</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Home;