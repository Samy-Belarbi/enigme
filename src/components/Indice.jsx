import { useState } from "react";

const Indice = ({ indice }) => {
  const [actualIndice, setActualIndice] = useState("");
  const [indiceClass, setIndiceClass] = useState("");
  const [indiceDisplayed, setIndiceDisplayed] = useState(false);
  const [buttonClass, setButtonClass] = useState("");

  const displayIndice = () => {
    if (!indiceDisplayed) {
      setActualIndice(indice);
      setIndiceClass("active");
      setButtonClass("active");
      setIndiceDisplayed(true);
    } else {
      setActualIndice("");
      setButtonClass("");
      setIndiceClass("");
      setIndiceDisplayed(false);
    }
  };

  return (
    <div className="indice">
      <p className={indiceClass}>{actualIndice}</p>
      <span className={buttonClass} onClick={displayIndice}>
        ?
      </span>
    </div>
  );
};

export default Indice;
