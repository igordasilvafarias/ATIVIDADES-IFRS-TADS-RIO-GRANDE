import path from 'path';
import express from 'express';
import rootDir from '../rootDir';
import * as bodyParser from 'body-parser';
import itemRouter from '../routes/itemRouter';
import categoryRouter from '../routes/categoryRouter';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.static('src/public'));

app.use('*', (request, response, next) => {
    console.log("Middlewares");
    console.log({BaseURL: request.baseUrl, OriginalURL: request.originalUrl, QUERY: request.query, METHOD: request.method});
    next();
});

app.use('/categorias', categoryRouter);
app.use('/itens', itemRouter);

app.use((request, response) => {
    response.render('404', {url: request.originalUrl});
});

app.listen(port, () => {
    console.log("Listening at port " + port);
});