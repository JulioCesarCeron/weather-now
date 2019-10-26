import React, { useEffect, useState, useCallback } from 'react';

import styles from './WeatherCard.module.css'
import { getWeater, getLocalData, setLocalData} from '../../../config/api'
import { WEATHER_API } from '../../../config/index'
import loader from '../../../assets/loader.svg';
import {
  kelvinToCelcius,
  getTimeFormat12h,
  getColorTemperature,
  getDiffBetweenCurrentAndLocalDate,
} from '../../../config/utils'


const WeatherCard = ({ main, city, country }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState({
    temp: '',
    humidity: '',
    pressure: '',
    date: '',
  });

  const setComponentData = useCallback((receivedData) => {
    if (main) {
      setWeather({ ...receivedData });
    } else {
      setWeather({
        temp: receivedData.temp,
        date: receivedData.date,
      })
    }
    setLoading(false);
  }, [main])

  const onSetLocalData = async (data) => {
    await setLocalData(data);
  }

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

      setComponentData(receivedData)

      onSetLocalData({
        city,
        country,
        weather: receivedData,
      })
    }).catch(err => {
      setError(err);
    });
  }, [city, country, setComponentData]);

  useEffect(() => {
    const verifyLastUpdate = (savedCityInfo) => {
      const localStorageData = JSON.parse(savedCityInfo);
      const minutes = getDiffBetweenCurrentAndLocalDate(localStorageData);
      if (minutes > 10) {
        onGetDataFromWeather();
      } else {
        setComponentData(localStorageData);
      }
    }
    
    const onGetLocalData = async() => {
      const localSavedCityInfo = await getLocalData({city, country});
      if (!localSavedCityInfo) {
        onGetDataFromWeather();
      } else {
        verifyLastUpdate(localSavedCityInfo);
      }
    }

    onGetLocalData();
    setInterval(() => onGetLocalData(), 20000);
    
  }, [city, country, main, onGetDataFromWeather, setComponentData]);

  const temperatureValueComponent = loading
    ? <img src={loader} className={styles.logo} alt="logo" />
    : <p className={`${styles.temperature} ${styles[getColorTemperature(weather.temp)]}`}>{weather.temp}º</p>

  const requestErrorMessage = (
    <div className={styles['wrapper-error-message']}>
      <p>Someting went wrong</p>
      <button onClick={onGetDataFromWeather()} >Try Again</button>
    </div>
  )

  return (
    <div className={`${styles.card} ${main && styles['card-order']}`}>
      <div className={styles.header}>
        <h3>{`${city}, ${country}`}</h3>
      </div>
      <div className={styles.main}>
      {!error
        ? temperatureValueComponent
        : requestErrorMessage
      }
      </div>
      <div className={`${loading ? styles['footer-loading'] : styles.footer} ${(main && loading) && styles['main-footer-loading']}`}>
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
      </div>
    </div>
  );
};

export default WeatherCard;