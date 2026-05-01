'use strict';

const User = require('./Users');
const sequelize = require('../config/database'); // Nutzt deine funktionierende Aiven-Config

const db = {
  User,
  sequelize,
};

module.exports = db;
