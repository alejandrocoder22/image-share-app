import * as authServices from '../services/authServices'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser: any = async (req: any, res: any) => {
  const credentials = req.body
  try {
    await authServices.createUser(credentials)
    res.status(200).send({ status: 'SUCESS' })
  } catch (error) {
    res.status(400).send({ status: 'FAIL' })
  }
}

const deleteUser: any = async (req: any, res: any) => {
  const { id } = req.params
  const user = req.user
  try {
    if (user.user_id === id) {
      authServices.deleteUser(id, user)
      res.status(200).send({ status: 'SUCESS' })
    } else {
      res.status(400).send({ status: 'FAIL', message: 'You can only delete your images' })
    }
  } catch (error) {
    res.status(400).send({ status: 'FAIL' })
  }
}

const loginUser: any = async (req: any, res: any) => {
  const { username, password } = req.body
  try {
    const userExist = await authServices.loginUser(username)
    bcrypt.compare(password, userExist.rows[0].password, (err, result) => {
      if (err != null) { res.status(400).send({ status: 'FAIL', error: err }) }
      if (!result) { res.status(400).send({ status: 'FAIL', message: 'Invalid username or password' }) }
      if (result) {
        const token = jwt.sign({ user_id: userExist.rows[0].user_id, username: userExist.rows[0].username }, process.env.JWT_PASSWORD as string)
        res.status(200).send({ status: 'SUCESS', token })
      }
    })
  } catch (error) {
    res.status(400).send({ status: 'FAIL', message: 'Invalid username or password' })
  }
}

const verifyToken: any = (req: any, res: any) => {
  res.status(200).send({ status: 'SUCESS', data: req.user })
}

export { createUser, deleteUser, loginUser, verifyToken }
