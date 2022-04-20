import { DataTypes } from 'sequelize';
import sequelizeConnection from '../config/dbConnection';

const Tag = sequelizeConnection.define('tag', {
    description: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    tableName: 'tag'
});

export { Tag };