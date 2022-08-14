import Enigme from "../components/Enigme";
import Indice from "../components/Indice";
import { useState } from "react";

const Level1 = () => {
  // STATE
  const [enigme, setEnigme] = useState({
    title: "3",
    statement:
      "Quand je mange, je grandis et quand je bois, je meurs. Qui suis-je ?",
    answer: "feu",
    indice: "Il peut être de coup, de bois ou follet.",
  });

  return (
    <div id="level-2" className="enigme-container">
      <Enigme enigme={enigme} />
      <Indice indice={enigme.indice} />
      <div className="bg"></div>
    </div>
  );
};

export default Level1;
