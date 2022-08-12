import Enigme from "../components/Enigme";
import { useState } from "react";

const Level1 = () => {
    // STATE
    const [enigme, setEnigme] = useState({
        title: "Niveau 2",
        statement: "Quelle lettre peut-on lancer dans tous les sens ?",
        answer: "D"
    });

    return (
        <div id="level-2" className="enigme-container">
            <Enigme enigme={enigme} />
        </div>
    );
};

export default Level1;