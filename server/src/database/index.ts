import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'images_app',
  password: '112224'
})

export default pool
