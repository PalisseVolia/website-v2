import { useState, React } from "react";
import { useSpring, config, animated as a } from '@react-spring/web'
import FileLink from "./FileLink";

export default function SkillBox(props) {
    const [IsDescVisible, setIsDescVisible] = useState(true);

    const handleToggleSBbot = () => {
        setIsDescVisible(!IsDescVisible);
    };

    const DescFadeIN = useSpring({
        opacity: IsDescVisible ? 1 : 0,
        config: { duration: 1100 },
    });
    const LinksFadeIN = useSpring({
        opacity: IsDescVisible ? 0 : 1,
        config: { duration: 1100 },
    });

    return (
        <div className="SkillBox">
            <div className="SBtop">
                <p className="Intitule">{props.Intitule}</p>
            </div>
            <div className="SBmid">
                <p className="Nom">{props.Nom}</p>
                <p className="Lieu">{props.Lieu}</p>
                <p className="Date">{props.Date}</p>
            </div>
            {IsDescVisible && (
                <a.div className="SBbotDesc" style={DescFadeIN}>
                    <p className="Description">{props.Description}</p>
                </a.div>
            )}
            {!IsDescVisible && (
                <a.div className="SBbotFiles" style={LinksFadeIN}>
                    <FileLink docname={props.docname1} doclink={props.doclink1}></FileLink>
                    <FileLink docname={props.docname2} doclink={props.doclink2}></FileLink>
                    <FileLink docname={props.docname3} doclink={props.doclink3}></FileLink>
                    <FileLink docname={props.docname4} doclink={props.doclink4}></FileLink>
                </a.div>
            )}
            <button className="SBbutton" onClick={handleToggleSBbot}>
                {IsDescVisible ? "▲        DETAILS        ▲" : "▲   DESCRIPTION   ▲"}
            </button>
        </div>
    );
}