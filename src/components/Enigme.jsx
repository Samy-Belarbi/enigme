import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Enigme = ({ enigme, nextRoute }) => {
  // STATE
  const [userAnswer, setUserAnswer] = useState("");
  const [inputClassName, setInputClassName] = useState("");
  const [buttonClassName, setButtonClassName] = useState("");
  const [indication, setIndication] = useState("");
  const navigate = useNavigate();

  // COMPORTEMENTS
  const updateUserAnswer = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = (event) => {
    event.preventDefault();

    // BONNE REPONSE
    if (enigme.answer.toLowerCase() == userAnswer.toLowerCase()) {

      let counter = 5;

      const actualLevel = window.location.href.charAt(
        window.location.href.length - 1
      );

      setInputClassName("good-answer");
      setButtonClassName("good-answer");

      setIndication(`Bonne réponse ! Vous allez être redirigé dans : ${counter} secondes.`);

      const intervalId = setInterval(() => {
        counter = counter - 1;
        setIndication(`Bonne réponse ! Vous allez être redirigé dans : ${counter} secondes.`);
        }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        navigate(`/level-${(parseInt(actualLevel) + 1)}`);
      }, 5000);
      
      return;
    } 
    
    // REPONSE CLOSE
    else if (enigme.answer.toLowerCase().includes(userAnswer.toLowerCase()) && userAnswer.length > 1) {
      setIndication("Presque... !!!");
      setInputClassName("close-answer");
      removeClassName();
      return;
    } 
    
    // MAUVAISE REPONSE
    else {
      setIndication("Mauvaise réponse...");
      setInputClassName("wrong-answer");
      removeClassName();
    }
  };

  const removeClassName = () => {
    setTimeout(() => {
      setInputClassName("");
    }, 5000);
  };

  const showIndication = () => {
    if (indication) {
      return <p>{indication}</p>;
    }
  };

  return (
    <div className="enigme">
      <h2 className="title">{enigme.title}</h2>

      <p className="statement">
        {enigme.statement}
      </p>

      <form action="" onSubmit={checkAnswer}>
        <input
          className={inputClassName}
          type="text"
          onChange={updateUserAnswer}
          value={userAnswer}
          placeholder="Votre réponse..."
        />
        {showIndication()}
        <button className={buttonClassName}>Valider</button>
      </form>
    </div>
  );
};

export default Enigme;
