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
                    <h1>Welkom bij de sport Quiz van Content Stadium</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
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