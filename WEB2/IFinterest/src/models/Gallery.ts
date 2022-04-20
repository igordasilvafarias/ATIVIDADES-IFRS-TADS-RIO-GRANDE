import { DataTypes } from 'sequelize';
import sequelizeConnection from '../config/dbConnection';

const Gallery = sequelizeConnection.define('gallery', {
    identification: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    tableName: 'gallery'
});

export { Gallery };