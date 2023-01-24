import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from "url";
import { grabHtml, getWeatherForecast, server } from './app.js';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
const port = 3000;



// GET method route---------------------

app.get('/', grabHtml);

// init middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//POST method route----------------------

app.post('/weather', getWeatherForecast);

app.listen(port, server);


