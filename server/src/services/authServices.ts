import pool from '../database'
import bcrypt from 'bcrypt'
import { Credentials } from '../interfaces/types'
import { QueryResult } from 'pg'

const createUser = async (credentials: Credentials): Promise<void> => {
  const SALT_ROUNDS = 10

  try {
    bcrypt.hash(credentials.password, SALT_ROUNDS, async function (_err, hash) {
      return await pool.query('INSERT INTO users (username, password) VALUES($1, $2)', [credentials.username, hash])
    })
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

const loginUser = async (username: string): Promise<QueryResult> => {
  return await pool.query('SELECT * FROM users WHERE username = $1', [username])
}

const deleteUser = async (id: string): Promise<QueryResult> => {
  return await pool.query('DELETE FROM users WHERE ID = $1', [id])
}

export { createUser, deleteUser, loginUser }
