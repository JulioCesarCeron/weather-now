import React, { useEffect, useState } from 'react';

import styles from './WeatherCard.module.css'
import { getWeater, getLocalData, setLocalData} from '../../../config/api'
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

  const getDiffBetweenCurrentAndLocalDate = (savedCityInfo) => {
    const localDate = new Date(savedCityInfo.date);
    const currentDate = new Date();
    const diffMinutes = (((currentDate.getTime() - localDate.getTime()) / 1000) / 60).toFixed();
    console.log('diffMinutes', diffMinutes);
    return diffMinutes;
  }

  useEffect(() => {

    const setComponentData = (receivedData) => {
      console.log('receivedData', receivedData);
      if (main) {
        setWeather({ ...receivedData });
      } else {
        setWeather({
          temp: receivedData.temp,
        })
      }
    }

    const onGetDataFromWeather = () => {
      setLoading(true);
      const url = WEATHER_API(city, country);
      getWeater(url).then(res => {
        setLoading(false);

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
      });
    }

    const verifyLastUpdate = (savedCityInfo) => {
      const localStorageData = JSON.parse(savedCityInfo);
      const minutes = getDiffBetweenCurrentAndLocalDate(localStorageData)
      if (minutes >= 10) {
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

    const onSetLocalData = async (data) => {
      await setLocalData(data);
    }

    onGetLocalData();
    setInterval(() => onGetLocalData(), 50000);
    
  }, [city, country, main])

  const getColorTemperature = () => {
    if (weather.temp <= 5) {
      return 'cold';
    }

    if (weather.temp > 5 && weather.temp <= 25) {
      return 'medium';
    }

    return 'hot'
  }

  return (
    <div className={`${styles.card} ${main && styles['card-order']}`}>
      <div className={styles.header}>
        <h3>{`${city}, ${country}`}</h3>
      </div>
      <div className={styles.main}>
      {
        loading
          ? <img src={loader} className={styles.logo} alt="logo" />
          : <p className={`${styles.temperature} ${styles[getColorTemperature()]}`}>{weather.temp}º</p>
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