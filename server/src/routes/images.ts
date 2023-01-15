import express from 'express'
import * as imagesControllers from '../controllers/imagesControllers'
import { upload } from '../config/multer'
import { verifyToken } from '../middleware/verifyToken'

const router = express.Router()

router.get('/', verifyToken, imagesControllers.getPersonalImages)
router.post('/', verifyToken, upload.single('image'), imagesControllers.createImage)
router.delete('/:imageId/:imgUrl', imagesControllers.deleteImage)

export default router
