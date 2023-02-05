import pool from '../database'

const getPersonalImages: any = (userId: number) => pool.query('SELECT * FROM images WHERE user_id = $1', [userId])

const createImage: any = (fileUrl: string, userId: number) => pool.query('INSERT INTO images (url, user_id) VALUES($1,$2)', [fileUrl, userId])

const deleteImage: any = (id: number) => pool.query('DELETE FROM images WHERE image_id = $1', [id])

export { getPersonalImages, createImage, deleteImage }
