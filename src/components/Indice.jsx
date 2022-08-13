import { useState } from "react";

const Indice = ({ indice }) => {
  const [actualIndice, setActualIndice] = useState("");
  const [indiceClass, setIndiceClass] = useState("");
  const [indiceDisplayed, setIndiceDisplayed] = useState(false);

  const displayIndice = () => {
    if (!indiceDisplayed) {
      setActualIndice(indice);
      setIndiceClass("active");
      setIndiceDisplayed(true);
    } else {
      setActualIndice("");
      setIndiceClass("");
      setIndiceDisplayed(false);
    }
  };

  return (
    <div className="indice">
      <p className={indiceClass}>{actualIndice}</p>
      <span onClick={displayIndice}>?</span>
    </div>
  );
};

export default Indice;
