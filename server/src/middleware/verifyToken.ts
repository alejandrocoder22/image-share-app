import jwt from 'jsonwebtoken'

export const verifyToken: any = (req: any, res: any, next: any) => {
  const token: string = req.headers.token?.split(' ')[1]

  if (token.length === 0) {
    res.status(400).send({ status: 'FAIL', message: 'You must send a valid token' })
  }

  jwt.verify(token, process.env.JWT_PASSWORD as string, (err: any, decoded: any) => {
    if (err != null) {
      res.send(err)
      return
    }
    req.user = decoded
    next()
  })
}
