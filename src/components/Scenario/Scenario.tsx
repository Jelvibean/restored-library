import React, { useEffect } from "react";
import styles from "./Scenario.module.scss";

function Scenario({ onClose }) {
  // Sit listening to see if ESC button gets clicked to close.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Close the modal when the box is clicked
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
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
