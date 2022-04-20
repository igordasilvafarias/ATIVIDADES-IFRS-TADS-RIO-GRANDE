import { Sequelize } from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './bd-sqlite-ifinterest.db'
});

export default db;