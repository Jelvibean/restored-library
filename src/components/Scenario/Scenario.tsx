import React, { useEffect } from "react";
import styles from "./Scenario.module.scss";

//This is the Modal Component function.
function Scenario({ onClose }) {
  // Sits listening to see if ESC button gets clicked to close.
  // This will be called after the render.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // listens to any key pressed and then calls handleKeyDown from above to see if its Escape.
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      //Good to clean so you dont have this firing in ever render.
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Close the modal when the box is clicked
  const handleClick = () => {
    onClose();
  };

  return (
    <div role="dialog" onClick={handleClick} className={styles.box}>
      <div className={styles.modal}>
        <h2 id="modal-heading" className={styles.heading}>
          Modal Title
        </h2>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Scenario;
