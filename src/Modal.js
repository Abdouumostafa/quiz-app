import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isOpenModal, closeModal, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${
        isOpenModal ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
