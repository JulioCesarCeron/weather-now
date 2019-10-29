import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './WeatherCard.module.css'
import { getWeater } from '../../../config/api'
import { WEATHER_API } from '../../../config/endpoints'
import loader from '../../../assets/loader.svg';
import {
  kelvinToCelcius,
  getTimeFormat12h,
  getColorTemperature,
  getDiffBetweenCurrentAndLocalDate,
  setLocalData,
  getLocalData,
} from '../../../config/utils'


const WeatherCard = ({ main, city, country, delay }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState({
    temp: '',
    humidity: '',
    pressure: '',
    date: '',
  });

  const onGetDataFromWeather = useCallback(() => {
    setLoading(true);
    const url = WEATHER_API(city, country);
    getWeater(url).then(res => {
      const receivedData = {
        temp: kelvinToCelcius(res.data.main.temp),
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        date: new Date(),
      }

      setWeather({ ...receivedData });

      setLocalData({
        city,
        country,
        weather: receivedData,
      });

      setLoading(false);

    }).catch(err => {
      setError(err);
    });
  }, [city, country]);

  const verifyLastUpdate = useCallback((savedCityInfo) => {
    const localStorageData = JSON.parse(savedCityInfo);
    const minutes = getDiffBetweenCurrentAndLocalDate(localStorageData);
    if (minutes > delay) {
      onGetDataFromWeather();
    } else {
      setWeather({ ...localStorageData });
    }
  }, [onGetDataFromWeather, delay])


  useEffect(() => {
    const onGetLocalData = async() => {
      const localSavedCityInfo = await getLocalData({city, country});
      if (!localSavedCityInfo) {
        onGetDataFromWeather();
      } else {
        verifyLastUpdate(localSavedCityInfo);
      }
    }

    onGetLocalData();
    setInterval(() => onGetLocalData(), 120000)
  }, [city, country, onGetDataFromWeather, verifyLastUpdate])

  const temperatureValueComponent = loading
    ? <img src={loader} className={styles.logo} alt="logo" />
    : <p className={`${styles.temperature} ${styles[getColorTemperature(weather.temp)]}`}>{weather.temp}º</p>

  const requestErrorMessage = (
    <div className={styles['wrapper-error-message']}>
      <p>Someting went wrong</p>
      <button onClick={()=> 1} >Try Again</button>
    </div>
  )

  return (
    <div className={`${styles.card} ${main && styles['card-order']}`}>
      <header className={styles.header}>
        <h3>{`${city}, ${country}`}</h3>
      </header>
      <main className={styles.main}>
      {!error
        ? temperatureValueComponent
        : requestErrorMessage
      }
      </main>
      <footer className={`${loading ? styles['footer-loading'] : styles.footer} ${(main && loading) && styles['main-footer-loading']}`}>
        {(main && !loading) && (
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
        {!loading && <p className={styles['info-update']}>Updated at {getTimeFormat12h(weather.date)}</p>}
      </footer>
    </div>
  );
};

WeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
}

export default WeatherCard;