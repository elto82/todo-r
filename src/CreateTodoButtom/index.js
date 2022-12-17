import React from "react";
import "../TodoCounter.css";

function CreateTodoButtom(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButtom"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
