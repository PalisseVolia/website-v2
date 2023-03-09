import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef } from 'react';
import RotatingLine from "./components/RotatingLine";
import './App.css';

import Nasa from "./img/nasa.jpg";

function App() {
    return (
        <>
            <div className="NavBar">
                <button className="NavButtons">BUTTON1</button>
                <button className="NavButtons">BUTTON2</button>
                <button className="NavButtons">BUTTON3</button>
                <button className="NavButtons">BUTTON4</button>
            </div>
            <div>
                <Parallax pages={4}>
                    <ParallaxLayer id="tempP1">
                        <div id="Header">
                            <h1 className="HeaderTitle">Palisse</h1>
                            <h1 className="HeaderTitle">Volia</h1>
                            <div className="HeaderSubTitle">
                                <p>Electrical engineering student</p>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer id="tempP2"
                        offset={1}>
                        <div id="Education_Work">
                            <div id="education">
                                <div className="EWelements">
                                    <p className="EWorga">INSA </p>
                                    <div className="placeanddate">
                                        <p className="EWplace">Strasbourg, </p>
                                        <p className="EWdate">2020-Maintenant</p>
                                    </div>
                                </div>
                                <p className="EWintitulé">License ingénieur en génie électrique</p>
                                <p className="EWcontent">Capable de mener à bien des projets multidisciplinaires nécessitant des compétences en informatique, électronique et électrotechnique.</p>
                                {/* <div className="EWelements">
                                    <div className="EWleft">
                                        <p className="EWorga">INSA</p>
                                        <p className="EWplace">Strasbourg</p>
                                        <p className="EWdate">2020-Maintenant</p>
                                    </div>
                                    <div className="EWmiddle">
                                        <div className="EWpoint"></div>
                                    </div>
                                    <div className="EWright">
                                        <p className="EWintitulé">License ingénieur en génie électrique</p>
                                        <p className="EWcontent">Capable de mener à bien des projets multidisciplinaires nécessitant des compétences en informatique, électronique et électrotechnique.</p>
                                    </div>
                                </div>
                                <div className="EWelements">
                                    <div className="EWleft">
                                        <p className="EWorga">Lycée la prat's</p>
                                        <p className="EWplace">Strasbourg</p>
                                        <p className="EWdate">2020-Maintenant</p>
                                    </div>
                                    <div className="EWmiddle">
                                        <div className="EWpoint"></div>
                                    </div>
                                    <div className="EWright">
                                        <p className="EWintitulé">License ingénieur en génie électrique</p>
                                        <p className="EWcontent">Capable de mener à bien des projets multidisciplinaires nécessitant des compétences en informatique, électronique et électrotechnique.</p>
                                    </div>
                                </div> */}
                            </div>
                            <div id="work">

                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        speed={1}
                        factor={1}
                        style={{
                            backgroundImage: `url(${Nasa})`,
                            backgroundSize: 'cover',
                        }}>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}

export default App
