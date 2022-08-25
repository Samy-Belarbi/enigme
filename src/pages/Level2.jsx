import Enigme from "../components/Enigme";
import Indice from "../components/Indice";
import { useState } from "react";

const Level2 = () => {
  // STATE
  const [enigme, setEnigme] = useState({
    title: "2",
    statement: "Quelle lettre peut-on lancer dans tous les sens ?",
    answer: "D",
    indice: "Indispensable pour certains jeux de plateau...",
  });

  return (
    <div id="level-2" className="enigme-container">
      <Enigme enigme={enigme} />
      <Indice indice={enigme.indice} />
      <div className="bg"></div>
    </div>
  );
};

export default Level2;
