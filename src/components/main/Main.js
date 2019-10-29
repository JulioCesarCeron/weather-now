import React from "react";

import styles from "./Main.module.css";
import Header from "../header/Header";
import WeatherCard from '../cards/WeatherCard/WeatherCard'


function Main() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles['wrapper-weather']}>
      <hr/>
        <section className={styles['wrapper-weather-cards']}>
          <WeatherCard city='Nuuk' country='GL' />
          <WeatherCard main city='Urubici' country='BR' />
          <WeatherCard city='Nairobi' country='KE' />
        </section>
      </div>
    </main>
  );
}

export default Main;
