import express from 'express';
import path from 'path';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import fetch from 'node-fetch';
import { keys } from "./sources/keys.js";



const app = express();
const port = 3000;




export const hello = (req, res) => {
  res.send('hello from backend to frontend!');
}


export const getWeatherForecast = async (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`;
  console.log(api);
  const response = await fetch(api, {method: 'POST', body: 'a=1'});
  console.log(response);
  try {
    if (response.status === 200) {
      const WeatherForecast = await response.json();
      const currentTemp = WeatherForecast.main.temp;
      const feelsLike = WeatherForecast.main.feels_like;

      res.send({
        Message: `It is ${currentTemp} degree in ${cityName}. It feels like ${feelsLike} `,
      });
    } else{
      res.send({ Message: `There is no data with the name of ${cityName}` })
    }
  } catch (error) {
    console.error(error);
  }
  

};


export const server = (req, res) => {

  console.log(`app listening on port ${port}`);
}

