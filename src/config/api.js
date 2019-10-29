import axios from "axios";

export const getWeater = (api) => {
  return axios.get(api)
}