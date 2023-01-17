import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
const port = 3000;



// GET method route---------------------

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//POST method route----------------------

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  res.send({cityName});
});


app.listen(port, (req, res) => {

  console.log(`app listening on port ${port}`);
});


