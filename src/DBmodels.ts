import { Sequelize } from 'sequelize';
import config from 'config';

let database: {
  host: string,
  user: string,
  password: string,
  name: string,
} = {
  host: '',
  user: '',
  password: '',
  name: '',
};
try {
  database = config.get('database');
} catch (err) {
  console.error(err);
};




// __________set up sequelize connection (similar to mongose.connect())
const sequelize = new Sequelize(
  database.name, database.user, database.password,
  {
    host: database.host,
    dialect: 'postgres',
  }
); // we have to pass down this sequelize and the imported DataTypes into those model functions


import { initModels } from './database/models/init-models';
const DBmodels = initModels(sequelize);

export default DBmodels;