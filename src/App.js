import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { 
    waiting,
    loading,
    questions, 
    index,
    correct,
    setIndex,
    setCorrect,
    openModal,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const handelIndex = () => {
    if (index === questions.length - 1) {
      openModal();
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  };

  const checkCorrectAnswer = (value) => {
    if (value === correct_answer) {
      handelIndex();
      return setCorrect(correct + 1);
    }
    handelIndex();
  };

  const { question, incorrect_answers, correct_answer } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkCorrectAnswer(answer)}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={handelIndex}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
