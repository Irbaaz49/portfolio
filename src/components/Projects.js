import React from 'react';
import tic from './images/tic.png';
import './Project.css';
import calc from './images/calc.jpg';
import car from './images/car.jpeg';
import ytube from './images/youtube.jpg';
import insta from './images/instaa.png';


const Projects = () => {
    let project = "< My  projects />"
    return (
        <div class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">{project}</h2>
            <div class="carousel owl-carousel">
                <div class="card">
                    <div class="box">
                    <a style={{textdecoration:"none"}} target={"_blank"} href="https://irbaaz49.github.io/Tic-Tac-Toe-game/">   <img src={tic} alt="tic"/> </a>
                      <div class="text">Tic-Tac-Toe Game</div>
                        {/* <p>tic tac toe game in javascript with a bot which is almost impossible to beat.</p> */}
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={calc} alt="calc"/>
                        <div class="text">Calculator</div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={car} alt=""/>
                        <div class="text">Car Game</div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={ytube} alt="ytube"/>
                        <div class="text">YouTube Clone</div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={insta} alt="insta"/>
                        <div class="text">Instagram Clone</div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
