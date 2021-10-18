const config = require('config');
// const database = { user: 'postgres', password: 'myPgAdminPassword', name: 'eus' };
const database = config.get('database');
const DB_STRING = `postgres://${ database.user }:${ database.password }@127.0.0.1:5432/${ database.name }`

module.exports = {
  development: {
    url: DB_STRING,
    dialect: 'postgres',
  },
  test: {
    url: DB_STRING,
    dialect: 'postgres',
  },
  production: {
    url: DB_STRING,
    dialect: 'postgres',
  },
}