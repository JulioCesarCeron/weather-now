import React from "react";

import styles from "./App.module.css";
import Header from "./components/header/Header";
import WeatherCard from './components/cards/WeatherCard/WeatherCard'


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles['wrapper-weather']}>
      <hr/>
        <div className={styles['wrapper-weather-cards']}>
          <WeatherCard />
          <WeatherCard main />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
