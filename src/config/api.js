import axios from "axios";

export const getWeater = (api) => {
  return axios.get(api)
}

export const getLocalData = (data) => {
  return localStorage.getItem((`${data.city}${data.country}`).toLowerCase());
}

export const setLocalData = (data) => {
  localStorage.setItem((`${data.city}${data.country}`).toLowerCase(), JSON.stringify(data.weather));
}