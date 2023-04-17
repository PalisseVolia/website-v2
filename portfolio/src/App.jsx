import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, React } from 'react';
import EducationSB from "./components/EducationSB";
import WorkSB from "./components/WorkSB";
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
                                <EducationSB></EducationSB>
                            </div>
                            <div id="EducationRight">

                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer id="tempP3"
                        offset={2}>
                        <div id="Work">
                            <div id="WorkLeft">

                            </div>
                            <div id="WorkRight">
                                <WorkSB></WorkSB>
                            </div>
                        </div>
                    </ParallaxLayer>
                    {/* <ParallaxLayer
                        offset={2}
                        speed={1}
                        factor={1}
                        style={{
                            backgroundImage: `url(${Nasa})`,
                            backgroundSize: 'cover',
                        }}>
                    </ParallaxLayer> */}
                </Parallax>
            </div>
        </>
    )
}

export default App
