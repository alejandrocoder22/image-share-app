import pool from '../database'

const getPersonalImages: any = async (userId: number) => await pool.query('SELECT * FROM images WHERE user_id = $1', [userId])

const createImage: any = async (fileUrl: string, userId: number) => await pool.query('INSERT INTO images (url, user_id) VALUES($1,$2)', [fileUrl, userId])

const deleteImage: any = async (id: number) => await pool.query('DELETE FROM images WHERE image_id = $1', [id])

export { getPersonalImages, createImage, deleteImage }
