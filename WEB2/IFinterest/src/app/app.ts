import path from 'path';
import express from 'express';
import session from 'express-session';
import routes from '../routes/mainRouter';
import databaseConfig from '../config/dbConnection';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views'));

app.use(express.static('src/public'));

app.use(express.json());
app.use(express.urlencoded());

app.use(session({
    secret: 'secret password',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(routes);

databaseConfig.sync(
    //{force: true}
)
    .then(result => {

        app.listen(3000, () => {
            console.log("Listening at 3000");
        });
    })
    .catch(error => {
        console.log(error);
    });

    // senha:  !1Qqweasd