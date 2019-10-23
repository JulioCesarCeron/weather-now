import React from 'react';

import styles from './WeatherCard.module.css'


const WeatherCard = ({ main }) => {
  return (
    <div className={`${styles.card} ${main && styles['card-order']}`}>
      <div className={styles.header}>
        <h3>Urubici, BR</h3>
      </div>
      <div className={styles.main}>
        <p className={`${styles.temperature} ${styles.medium}`}>19º</p>
      </div>
      <div className={styles.footer}>
        {main && (
          <div className={styles['wrapper-content-footer']}>
            <div className={styles['content-footer']} >
              <p>HUMIDITY</p>
              <p className={styles['value-indicator']}>75<small>%</small></p>
            </div>
            <div className={styles['content-footer']} >
              <p>PRESSURE</p>
              <p className={styles['value-indicator']}>892<small>hPa</small></p>
            </div>
          </div>
        )}
        <p className={styles['info-update']}>Updated at 02:48:27 PM</p>
      </div>
    </div>
  );
};

export default WeatherCard;