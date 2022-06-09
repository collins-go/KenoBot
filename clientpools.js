const pg = require('pg');

const config = {
	user: 'postgres',
	database: 'Kenobot',
	password: 'meridian',
	host: '167.99.85.138',
	port: 5432,
};

const pool = new pg.Pool(config);
module.exports = pool;