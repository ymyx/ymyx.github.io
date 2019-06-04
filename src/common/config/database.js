const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '192.168.113.113',
  port: '3306',
  user: 'yanming',
  password: 'wolfcode123',
  dateStrings: true
};
