import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
