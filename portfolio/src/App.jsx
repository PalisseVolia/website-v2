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
                    <ParallaxLayer id="temp">
                        <div id="Header">
                            <h1 className="HeaderTitle">Palisse</h1>
                            <h1 className="HeaderTitle">Volia</h1>
                            <div className="HeaderSubTitle">
                                <p>Electrical engineering student  </p>
                                <RotatingLine />
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
