'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const pg_1 = require('pg')
const pool = new pg_1.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'images_app',
  password: process.env.PG_PASSWORD
})
exports.default = pool
