import  express  from 'express';

import {getHomePage, postHomePage, getAboutPage, getAllPage} from './controllers/homes'

// import todosRouter from './routes/todos';
import appRouner from './routes'

const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(appRouner);



app.listen(3000, () => {
    console.log ('Start one project. Hello');
})