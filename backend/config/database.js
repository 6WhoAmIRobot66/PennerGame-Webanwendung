const Sequelize = require("sequelize");

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_1w1n3moZZZdrLjYXXyX', {
  host: 'dbs-pennergame-pennergame.l.aivencloud.com',
  port: 22194,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
