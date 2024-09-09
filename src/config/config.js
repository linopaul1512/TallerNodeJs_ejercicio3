// src/config/config.js
module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'src/data/database.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    dialect: 'sqlite',
    storage: 'src/data/database.sqlite',
  },
};
