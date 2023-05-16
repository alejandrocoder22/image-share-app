
import express from 'express'
import multer from 'multer'
export type Visibility = 'public' | 'private'

interface User {
  user_id?: string
  username?: string
  password?: string
  created_at?: string
  updated_at?: string
}

export interface Credentials {
  password: string
  username: string
}

export interface RequestWithUser extends express.Request {
  user: User
}

export interface RequestWithUserAndFile extends express.Request {
  user: User
  file: multer.Multer.file
}
