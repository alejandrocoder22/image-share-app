import express from 'express'
import authControllers from '../controllers/authControllers'
import { verifyToken } from '../middleware/verifyToken'

const router = express.Router()

router.post('/login', authControllers.loginUser)
router.post('/', authControllers.createUser)
router.delete('/', verifyToken, authControllers.deleteUser)
router.get('/verify', verifyToken, authControllers.verifyToken)

router.put('/', (_req, res) => {
  res.send('Update new user')
})

export default router
