import  express  from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Home page. Page number one  <h2> One  <button type="button">Open page About</button>');
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello from About page. Page number two <h2> Two <button type="button">Open page Home</button>');
})

app.listen(3000, () => {
    console.log ('Start one project. Hello');
})