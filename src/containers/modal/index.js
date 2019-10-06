import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";

const Dialog = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Dialog;
