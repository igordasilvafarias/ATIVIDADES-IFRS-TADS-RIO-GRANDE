import path from 'path';
import express from 'express';
import rootDir from '../rootDir';
import bodyParser from 'body-parser';
import session from 'express-session';
import UserRouter from '../routes/UserRouter';
import ItemRouter from '../routes/ItemRouter';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(session({
    secret: 'asdasdasdasdasd',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use('*', (request, response, next) => {
    console.log("Middlewares");
    console.log({BaseURL: request.baseUrl, OriginalURL: request.originalUrl, 
        QUERY: request.query, METHOD: request.method, BODY: request.body});
    console.log({Cookies: request.get('Cookie')});
    console.log({Session: request.session});
    next();
});

app.use('/user', UserRouter);
app.use('/itens', ItemRouter);

app.use('/', (request, response) => {
    response.render('initial', { loggedIn: request.session.data?.loggedIn, name: request.session.data?.name });
});

app.use((request, response) => {
    response.render('errors/404', {url: request.originalUrl});
});

app.listen(port, () => {
    console.log("Listening at port " + port);
    /* const date = '2021-10-30'
    const hour = '13:30:00'
    const test = date.concat(' ', hour);
    const tes2 = new Date(test).getTime()
    const test3 = new Date(tes2 - 86400000).toLocaleString()
    console.log(date, hour, tes2, test3) */
    /* const date = '30/01/2020'.split('/').reverse().join('-');
    const date = new Date('30/11/2021');
    const hour = '13:45';
    const test = date.concat(' ', hour);
    const test1 = new Date(test).getTime()
    const test2 =  new Date(test1).toLocaleString()
    console.log(test1);
    console.log(test2); */
});