import { useState, React } from "react";
import FileLink from "./FileLink";

export default function SkillBox(props) {
    const [isSBbotVisible, setIsSBbotVisible] = useState(true);

    const handleToggleSBbot = () => {
        setIsSBbotVisible(!isSBbotVisible);
    };

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
            {isSBbotVisible && (
                <div className="SBbotDesc">
                    <p className="Description">{props.Description}</p>
                </div>
            )}
            {!isSBbotVisible && (
                <div className="SBbotFiles">
                    <FileLink docname={props.docname1} doclink={props.doclink1}></FileLink>
                    <FileLink docname={props.docname2} doclink={props.doclink2}></FileLink>
                    <FileLink docname={props.docname3} doclink={props.doclink3}></FileLink>
                    <FileLink docname={props.docname4} doclink={props.doclink4}></FileLink>
                </div>
            )}
            <button className="SBbutton" onClick={handleToggleSBbot}>
                {isSBbotVisible ? "▲        DETAILS        ▲" : "▲   DESCRIPTION   ▲"}
            </button>
        </div>
    );
}