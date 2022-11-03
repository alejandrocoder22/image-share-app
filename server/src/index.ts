import dotenv from 'dotenv'
import express from 'express'
import authRouter from './routes/auth'
import imagesRouter from './routes/images'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/showImages', express.static('images'))

app.use('/auth', authRouter)
app.use('/images', imagesRouter)

const PORT = 3006

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
