import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, React } from 'react';
import SkillBox from "./components/SkillBox";
import FileLink from "./components/FileLink";
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
                        <div id="Education">
                            <div id="EducationLeft">
                                <SkillBox
                                    Intitule="Lorem ipsum"
                                    Nom="Lorem ipsum"
                                    Lieu="Lorem ipsum"
                                    Date="Lorem ipsum"
                                    Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne"
                                    docname1="Lorem ipsum"
                                    docname2="Lorem ipsum"
                                    docname3="Lorem ipsum"
                                    docname4="Lorem ipsum"
                                    doclink1="https://urlz.fr/lke2"
                                    doclink2="https://urlz.fr/lke2"
                                    doclink3="https://urlz.fr/lke2"
                                    doclink4="https://urlz.fr/lke2"></SkillBox>
                            </div>
                            <div id="EducationRight">

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
