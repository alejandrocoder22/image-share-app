import { QueryResult } from 'pg'
import pool from '../database'

const getPersonalImages = async (userId: number): Promise<QueryResult> => await pool.query('SELECT * FROM images WHERE user_id = $1', [userId])

const createImage = async (fileUrl: string, userId: number): Promise<QueryResult> => await pool.query('INSERT INTO images (url, user_id) VALUES($1,$2)', [fileUrl, userId])

const deleteImage = async (id: string): Promise<QueryResult> => await pool.query('DELETE FROM images WHERE image_id = $1', [id])

export { getPersonalImages, createImage, deleteImage }
