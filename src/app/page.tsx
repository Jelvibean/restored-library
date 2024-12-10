"use client";
import React, { useState } from "react";
import Scenario from "../components/Scenario/Scenario";
import styles from "./page.module.scss";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.startbutton}>
        <button onClick={handleOpenModal}>Open Modal</button>
      </div>
      {isModalOpen && <Scenario onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
