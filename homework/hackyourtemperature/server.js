import express from 'express';
import path from 'path';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import fetch from 'node-fetch';
import { keys } from "./sources/keys.js";




const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
const port = 3000;



// GET method route---------------------

app.get('/', (req, res) => {
  //res.end('naper')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//POST method route----------------------

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`;
  console.log(api);
  const response = await fetch(api, {method: 'POST', body: 'a=1'});
  console.log(response);

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

});





app.listen(port, (req, res) => {

  console.log(`app listening on port ${port}`);
});


