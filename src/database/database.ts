import { Sequelize } from 'sequelize';

const usernameDb = process.env['usernameDb']!;
const passwordDb = process.env['passwordDb']!;
const nameDb = process.env['nameDb']!;
const hostDb = process.env['hostDb']!;
// const portDb = process.env['portDb']!;

export default async function databaseInit() {
  const sequelize = new Sequelize(nameDb, usernameDb, passwordDb, {
    host: hostDb,
    dialect: 'postgres',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established succesfully.');
  } catch (err) {
    console.log('Unable to connect to the database: ', err);
  }
}
