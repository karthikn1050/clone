const path = require( 'path' );
require('dotenv').config({ path: path.resolve(__dirname, '../routes/api/.env') })
module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER_NAME,
  PASSWORD: process.env.PASS,
  DB: process.env.DB,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
