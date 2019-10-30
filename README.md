
# weather-now
App to get information about the city climate you want.

Quickly describing this app, your goal is to get weather information of a specific city at each time interval. For this after the first request the information is stored in the browser local storage, and every 2 minutes a function is executed to check if the time interval has already expired, if yes, a new request is made, and the values of date and time are updated.

## run project
```
npm install
npm test
npm start
```

```
yarn install
yarn test
yarn start
```

if all is ok, this project is run on http://localhost:3000

If you wish not to run on your local machine, follow this [link](https://juliocesarceron.github.io/weather-now/){:target="_blank"}


# usage
- To select your city, simply edit the WeatherCard.js component within the Main.js file and choose your city, country, and time in minutes to update your city data. 
```javascript
<WeatherCard
  city='Nuuk'
  country='GL'
  delay={10}
/>
```  

## edit

if you don't like edit on your local environment, edit [this project on gitpod](https://gitpod.io/#https://github.com/JulioCesarCeron/weather-now){:target="_blank"}