const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

module.exports = () => {
    
    console.log('OK');

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    const routes = require('../../interface/routes/routes');
    app.use(routes);

    app.listen(3000);
 
}