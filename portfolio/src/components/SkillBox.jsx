import dlpng from '../img/downloadpdf.png';

export default function SkillBox() {
    return (
        <div className="SkillBox">
            <div className="SBtop">
                <p className="Intitule">Intitule</p>
                <div>
                    <img src={dlpng} alt="Download PDF" />
                </div>
            </div>
            <div className="SBmid">
                <p className="Nom">Nom</p>
                <p className="Lieu">Lieu</p>
                <p className="Date">Date</p>
            </div>
            <div className="SBbot">
                <p className="Description">Description</p>
            </div>
        </div>
    );
}