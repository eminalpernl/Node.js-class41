import express from 'express';
import { getWeatherForecast, server, hello } from './app.js';

const app = express();
const port = 3000;

// GET method route---------------------
app.get('/', hello);

// init middleware
app.use(express.json());

//POST method route----------------------
app.post('/weather', getWeatherForecast);

// server
app.listen(port, server);


