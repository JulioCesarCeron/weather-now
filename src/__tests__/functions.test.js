import {kelvinToCelcius} from '../config/utils'

it('should convert kelvin to celcius', () => {
  let temperature = 100;
  let espectedTemperature = -173 

  expect(kelvinToCelcius(temperature)).toEqual(espectedTemperature);

  temperature = 330;
  espectedTemperature = 57
  expect(kelvinToCelcius(temperature)).toEqual(espectedTemperature);
})