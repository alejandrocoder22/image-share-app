
import express from 'express'
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
  file: UploadedFile
}

export interface UploadedFile {
  fieldname: 'string'
  originalName: 'string'
  encoding: 'string'
  mimetype?: 'string'
  destination: 'string'
  filename: 'string'
  path: 'string'
  size: number
}
