import React, { useEffect, useState } from 'react';

import styles from './WeatherCard.module.css'
import { getWeater } from '../../../config/api'
import { WEATHER_API } from '../../../config/index'
import loader from '../../../assets/loader.svg';

const kelvinToCelcius = (temp) => {
  return (temp - 273.15).toFixed(0);
}

const WeatherCard = ({ main, city, country }) => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: '',
    humidity: '',
    pressure: ''
  });

  useEffect(() => {
    const url = WEATHER_API(city, country);
    setLoading(true);
    getWeater(url).then(res => {
      setLoading(false);
      if (main) {
        setWeather({
          temp: kelvinToCelcius(res.data.main.temp),
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure
        });
      } else {
        setWeather({
          temp: kelvinToCelcius(res.data.main.temp),
        })
      }
    });
  }, [city, country, main])

  return (
    <div className={`${styles.card} ${main && styles['card-order']}`}>
      <div className={styles.header}>
        <h3>{`${city}, ${country}`}</h3>
      </div>
      <div className={styles.main}>
      {
        loading
          ? <img src={loader} className={styles.logo} alt="logo" />
          : <p className={`${styles.temperature} ${styles.medium}`}>{weather.temp}º</p>
      }
      </div>
      <div className={ loading ? styles['footer-loading'] : styles.footer}>
        {main && (
          <div className={styles['wrapper-content-footer']}>
            <div className={styles['content-footer']} >
              <p>HUMIDITY</p>
              <p className={styles['value-indicator']}>{weather.humidity}<small>%</small></p>
            </div>
            <div className={styles['content-footer']} >
              <p>PRESSURE</p>
              <p className={styles['value-indicator']}>{weather.pressure}<small>hPa</small></p>
            </div>
          </div>
        )}
        {!loading && <p className={styles['info-update']}>Updated at 02:48:27 PM</p>}
      </div>
    </div>
  );
};

export default WeatherCard;