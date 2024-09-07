import * as imagesServices from '../services/imagesServices'
import fs from 'fs'
import express from 'express'
import { RequestWithUser } from '../interfaces/types'

const getPersonalImages: any = async (req: RequestWithUser, res: express.Response) => {
  const user = req.user
  try {
    const images = await imagesServices.getPersonalImages(user.user_id)
    res.status(200).send({ status: 'SUCESS', data: images.rows })
  } catch (error) {
    res.status(400).send({ status: 'FAIL' })
  }
}

const createImage = async (req: any, res: any): Promise<void> => {
  const file = req.file
  const fileUrl = `/${file.filename}`
  try {
    if (file.mimetype !== 'image/jpeg' || file.mimetype !== 'image/png') {
      return res.status(400).send({ status: 'FAIL', message: 'Image must be PNG or JPEG' })
    }

    if (file.size > 2000000) {
      res.status(400).send({ status: 'FAIL', message: 'Image must be smaller than 2MB' })
    }
    imagesServices.createImage(fileUrl, req.user.user_id)
    res.status(200).send({ status: 'SUCESS', message: 'Image added' })
  } catch (error) {
    res.status(400).send({ status: 'FAIL' })
  }
}

const deleteImage: any = (req: express.Request, res: express.Response) => {
  const { imageId, imgUrl } = req.params
  fs.unlink(`./images/${imgUrl}`, err => console.log(err))
  try {
    imagesServices.deleteImage(imageId)
    res.status(200).send({ status: 'SUCESS', message: 'Image Deleted' })
  } catch (error) {
    res.status(400).send({ status: 'FAIL' })
  }
}

export { getPersonalImages, createImage, deleteImage }
