import Enigme from "../components/Enigme";
import { useState } from "react";
import Indice from "../components/Indice";

const Level1 = () => {
  // STATE
  const [enigme, setEnigme] = useState({
    title: "1",
    statement: "Quelle est la lettre la plus tranchante ?",
    answer: "H",
    indice:
      "Elle se dit parfois de guerre, et c'est toujours une bonne chose lorsqu'elle est enterrée...",
  });

  return (
    <div id="level-1" className="enigme-container">
      <Enigme enigme={enigme} />
      <Indice indice={enigme.indice} />
      <div className="bg"></div>
    </div>
  );
};

export default Level1;
