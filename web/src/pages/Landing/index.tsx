import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

export default function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"></img>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingImg} className="hero-page" alt="plataforma de estudos"></img>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"></img>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="dar aulas"></img>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexoes ja realizadas
                    <img src={purpleHeartIcon} alt="coração"></img>
                </span>
            </div>
        </div>
    )
}