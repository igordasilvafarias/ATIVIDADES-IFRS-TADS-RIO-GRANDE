const database = require('./PollRepositoryInMongo');

database.connect();

module.exports = database;
