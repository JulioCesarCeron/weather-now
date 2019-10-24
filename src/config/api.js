import axios from "axios";

export const getWeater = (api) => {
  return axios.get(api)
}

export const getLocalData = async (data) => {
  let localData = await localStorage.getItem((`${data.city}${data.country}`).toLowerCase());
  return localData;
}

export const setLocalData = async (data) => {
  await localStorage.setItem((`${data.city}${data.country}`).toLowerCase(), JSON.stringify(data.weather));
}