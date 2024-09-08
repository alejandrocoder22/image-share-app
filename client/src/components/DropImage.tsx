import React, { useState, useRef, ChangeEvent } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { BiImageAdd } from 'react-icons/bi'
import { onUploadImage } from '../services/onUploadImage'
import { type File, type Image } from '../types.d'

const DropImage = (setImages: (image: Image | null) => void): JSX.Element => {
  const [file, setFile] = useState<File | null>(null)
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>('')

  const uploadConfirmationMessage = (): void => {
    setConfirmationMessage('Image Uploaded')
    setTimeout(() => {
      setConfirmationMessage('')
    }, 2500)
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      setFile(e.target.files[0])
    }
  }

  const formContainer = useRef<HTMLDivElement | null>(null)

  const dragStart = (): void => formContainer.current?.classList.add('drag-start')
  const dragEnd = (): void => formContainer.current?.classList.remove('drag-start')
  const drop = (): void => formContainer.current?.classList.remove('drag-start')

  return (
    <>
      {confirmationMessage !== null && <span className='form-container__confirmation-message'>{confirmationMessage}</span>}
      {errorMessage !== null && <span className='form-container__confirmation-message'>{errorMessage}</span>}
      <div ref={formContainer} className='form-container'>

        <>
          <div className='drop-file-input__label'>
            <BiImageAdd className='form-container__svg' />
            <p className='form-container__p'>Drag & Drop your files here</p>
          </div>
          <input
            onDragEnter={dragStart}
            onDragLeave={dragEnd}
            onDrop={drop}
            className='form-container__input'
            type='file' value='' onChange={handleFile}
          />

        </>
      </div>
      {file !== undefined && (
        <div className='form-container__image-uploaded-info'>
          <FcAddImage className='form-container__icon' />
          <span className='form-container__span'>{file?.name}</span>
        </div>)}
      <button onClick={(e) => onUploadImage({ e, uploadConfirmationMessage, setFile, setErrorMessage, file, setImages })} disabled={file == null} className='form-container__button'>Upload</button>
    </>
  )
}

export default DropImage
