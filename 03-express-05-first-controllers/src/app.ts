import express from 'express';
import { createAtHome, getHomePage } from './controllers/home';

const app = express();

app.get('/', getHomePage);

app.post('/', createAtHome);

app.get('/about', (req, res) => {
  res.send('<h1>Hello from About page');
});

app.all('*path', (req, res) => {
  res.status(404).send('<h1>Nothing found!');
});

app.listen(3000, () => {
  console.log('Start');
});
