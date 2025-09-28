import  express  from 'express';
import path from 'path';

import {/*getHomePage,*/ postHomePage, getAboutPage, getAllPage} from './controllers/homes'

// import todosRouter from './routes/todos';
import appRouter from './routes'

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use(express.urlencoded({extended:false}));

app.use(appRouter);



app.listen(3000, () => {
    console.log ('Start one project. Hello');
})