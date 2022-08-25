import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hooks à utiiser : useState, useContext, useTransition, useEffect

// Hooks à éviter 98% du temps : useRef
// Hooks à éviter à 75% du temps : useMemo, useCallback

const Enigme = ({ enigme }) => {
  // STATE
  const [userAnswer, setUserAnswer] = useState("");
  const [inputClassName, setInputClassName] = useState("");
  const [buttonClassName, setButtonClassName] = useState("");
  const [indication, setIndication] = useState("");
  const [indicationClassName, setIndicationClassName] = useState("indication");
  const [redirection, setRedirection] = useState("");
  const navigate = useNavigate();

  // COMPORTEMENTS
  const updateUserAnswer = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = (event) => {
    event.preventDefault();

    // BONNE REPONSE
    if (
      userAnswer.toLowerCase().includes(enigme.answer.toLowerCase()) &&
      userAnswer.length < enigme.answer.length + 5
    ) {
      let counter = 5;

      const actualLevel = window.location.href.charAt(
        window.location.href.length - 1
      );

      setInputClassName("good-answer");
      setButtonClassName("good-answer");

      setIndication(`Bonne réponse ! Et oui, c'était « ${enigme.answer} ».`);
      setRedirection(`Vous allez être redirigé dans : ${counter} secondes.`);

      const intervalId = setInterval(() => {
        counter = counter - 1;
        setRedirection(`Vous allez être redirigé dans : ${counter} secondes.`);
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        navigate(`/level-${parseInt(actualLevel) + 1}`);
      }, 5000);

      return;
    }

    // REPONSE CLOSE
    else if (
      userAnswer.toLowerCase().includes(enigme.answer.toLowerCase()) &&
      userAnswer.length >= enigme.answer.length + 5
    ) {
      setIndication("Pas loin !");
      setInputClassName("close-answer");
      return;
    }

    // MAUVAISE REPONSE
    else {
      setIndication("Mauvaise réponse.");
      setInputClassName("wrong-answer");
    }
  };

  const removeClassName = () => {
    setInputClassName("");
  };

  const showIndication = () => {
    if (indication) {
      return <p className={indicationClassName}>{indication}</p>;
    }
  };

  const showRedirection = () => {
    if (redirection) {
      return <p className="redirection">{redirection}</p>;
    }
  };

  // const resetIndicationClassName = () => {
  //   setTimeout(() => {
  //     setIndicationClassName("");
  //     setIndication("");
  //   }, 2500);
  // };

  return (
    <div className="enigme">
      <h2 className="title">{enigme.title}</h2>

      <p className="statement">{enigme.statement}</p>

      <form action="" onSubmit={checkAnswer}>
        <input
          className={inputClassName}
          type="text"
          onChange={updateUserAnswer}
          onAnimationEnd={removeClassName}
          value={userAnswer}
          placeholder="Votre réponse..."
          spellCheck="false"
        />

        {showIndication()}
        {showRedirection()}
        <button className={buttonClassName}>Valider</button>
      </form>
    </div>
  );
};

export default Enigme;
