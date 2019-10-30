import {kelvinToCelcius, getTimeFormat12h, getColorTemperature, getDiffBetweenCurrentAndLocalDate} from '../config/utils'

it('should convert kelvin to celcius', () => {
  let temperature = 100;
  let espectedTemperature = -173 

  expect(kelvinToCelcius(temperature)).toEqual(espectedTemperature);

  temperature = 330;
  espectedTemperature = 57
  expect(kelvinToCelcius(temperature)).toEqual(espectedTemperature);
})

it('should format time to 12h', () => {
  const date = '2019-10-30T00:13:22.814Z';
  const expected = '9:13 PM';
  expect(getTimeFormat12h(date)).toEqual(expected);
})

it('should return temperature name', () => {
  let temperature = 2;
  expect(getColorTemperature(temperature)).toEqual('cold');

  temperature = 20;
  expect(getColorTemperature(temperature)).toEqual('medium');

  temperature = 28;
  expect(getColorTemperature(temperature)).toEqual('hot');
})

it('should return diff between local time and saved time', () =>{
  const city = {
    date: '2019-10-30T00:13:22.814Z'
  };

  const currentDate = new Date('2019-10-30T00:23:22.814Z');
  global.Date = class extends Date {
    constructor(date) {
      if (date) {
        return super(date);
      }

      return currentDate;
    }
  };

  expect(getDiffBetweenCurrentAndLocalDate(city)).toEqual(10);
})