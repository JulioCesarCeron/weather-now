import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles['wrapper-weather']}>
      <hr/>

      </div>
    </div>
  );
}

export default App;
