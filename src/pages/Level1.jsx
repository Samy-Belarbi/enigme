import Enigme from "../components/Enigme";
import { useState } from "react";

const Level1 = () => {
    // STATE
    const [enigme, setEnigme] = useState({
        title: "Niveau 1",
        statement: "Quelle est la lettre la plus tranchante ?",
        answer: "H"
    });

    return (
        <div id="level-1" className="enigme-container">
            <Enigme enigme={enigme} />
        </div>
    );
};

export default Level1;