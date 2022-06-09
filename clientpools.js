var pg = require('pg');

var config = {
  user: 'postgres',
  database: 'Kenobot',
  password: 'meridian',
  host: '167.99.85.138',
  port: 5432,
};

var pool = new pg.Pool(config);
module.exports = pool;