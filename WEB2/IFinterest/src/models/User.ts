import sequelizeConnection from '../config/dbConnection';
import { DataTypes } from 'sequelize';

const User = sequelizeConnection.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { User };