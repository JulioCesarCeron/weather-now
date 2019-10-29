export const kelvinToCelcius = (temp) => {
  return Number((temp - 273.15).toFixed(0));
}

export const getTimeFormat12h = (date) => {
  return  date ? new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) : '';
};

export const getColorTemperature = (temperature) => {
  if (temperature <= 5) {
    return 'cold';
  }

  if (temperature > 5 && temperature <= 25) {
    return 'medium';
  }

  return 'hot'
}

export const getDiffBetweenCurrentAndLocalDate = (savedCityInfo) => {
  const localDate = new Date(savedCityInfo.date);
  const currentDate = new Date();
  const diffMinutes = (((currentDate.getTime() - localDate.getTime()) / 1000) / 60).toFixed();
  return diffMinutes;
}

export const getLocalData = (data) => {
  return localStorage.getItem((`${data.city}${data.country}`).toLowerCase());
}

export const setLocalData = (data) => {
  localStorage.setItem((`${data.city}${data.country}`).toLowerCase(), JSON.stringify(data.weather));
}