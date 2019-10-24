import React from "react";

import styles from "./Main.module.css";
import Header from "../header/Header";
import WeatherCard from '../cards/WeatherCard/WeatherCard'


function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles['wrapper-weather']}>
      <hr/>
        <div className={styles['wrapper-weather-cards']}>
          <WeatherCard city='Nuuk' country='GL' />
          <WeatherCard main city='Urubici' country='BR' />
          <WeatherCard city='Nairobi' country='KE' />
        </div>
      </div>
    </div>
  );
}

export default Main;
