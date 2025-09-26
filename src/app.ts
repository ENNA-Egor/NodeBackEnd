import  express  from 'express';

import {getHomePage, postHomePage, getAboutPage, getAllPage} from './controllers/home'

import todosRouter from './routes/todos';

const app = express();

// app.use((req, res, next) => {
//   console.log ('First commit');
//   next();
// })
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/todos',todosRouter);

// app.get('/', getHomePage)

// app.post('/',postHomePage)

// app.get('/about', getAboutPage)

app.all('*path', getAllPage)

app.listen(3000, () => {
    console.log ('Start one project. Hello');
})