import { Pool } from 'pg'

const pool: any = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'images_app',
  password: process.env.PG_PASSWORD
})

export default pool
