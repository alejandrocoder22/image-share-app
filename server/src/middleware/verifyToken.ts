import jwt from 'jsonwebtoken'
import express from 'express'

export const verifyToken = (req: any, res: express.Response, next: express.NextFunction): void => {
  const token: string = req.headers.token?.split(' ')[1]

  if (token.length === 0) {
    res.status(400).send({ status: 'FAIL', message: 'You must send a valid token' })
  }

  jwt.verify(token, process.env.JWT_PASSWORD as string, (err: jwt.VerifyErrors | null, decoded: jwt.JwtPayload | string | undefined) => {
    if (err != null) {
      res.send(err)
      return
    }
    req.user = decoded
    next()
  })
}
