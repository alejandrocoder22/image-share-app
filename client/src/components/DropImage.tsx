import React, { useState, useRef } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { BiImageAdd } from 'react-icons/bi'
import { onUploadImage } from '../services/onUploadImage'
import { type File } from '../types.d'

const DropImage: React.FC = (setImages: React.SetStateAction<any>) => {
  const [file, setFile] = useState<File | undefined>(undefined)

  const [confirmationMessage, setConfirmationMessage] = useState <string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const uploadConfirmationMessage: any = () => {
    setConfirmationMessage('Image Uploaded')
    setTimeout(() => {
      setConfirmationMessage('')
    }, 2500)
  }

  const handleFile: any = (e: any) => {
    setFile(e.target.files[0])
  }

  const formContainer: any = useRef(null)

  const dragStart = (): void => formContainer.current.classList.add('drag-start')
  const dragEnd = (): void => formContainer.current.classList.remove('drag-start')
  const drop = (): void => formContainer.current.classList.remove('drag-start')

  return (
    <>
      {confirmationMessage?.length > 0 && <span className='form-container__confirmation-message'>{confirmationMessage}</span>}
      {errorMessage?.length > 0 && <span className='form-container__confirmation-message'>{errorMessage}</span>}
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
      <button onClick={(e) => onUploadImage(e, uploadConfirmationMessage, setFile, setErrorMessage, file, setImages)} disabled={file == null} className='form-container__button'>Upload</button>
    </>
  )
}

export default DropImage
