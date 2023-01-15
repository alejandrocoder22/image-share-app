import React, { useState, useRef } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { BiImageAdd } from 'react-icons/bi'
import { onUploadImage } from '../services/onUploadImage'

const DropImage: React.FC = () => {
  const [file, setFile] = useState<Blob | Object | any>({
    name: '',
    lastModified: 0,
    lastModifiedDate: '',
    webkitRelativePath: '',
    size: 0,
    type: ''

  })
  const [confirmationMessage, setConfirmationMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const uploadConfirmationMessage: any = () => {
    setConfirmationMessage('Image Uploaded')
    setTimeout(() => {
      setConfirmationMessage('')
    }, 3000)
  }

  const handleFile: any = (e: any) => {
    setFile(e.target.files[0])
  }

  const formContainer: any = useRef(null)

  const dragStart: any = () => formContainer.current.classList.add('drag-start')
  const dragEnd: any = () => formContainer.current.classList.remove('drag-start')
  const drop: any = () => formContainer.current.classList.remove('drag-start')

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
      {file.name?.length > 0 && (
        <div className='form-container__image-uploaded-info'>
          <FcAddImage className='form-container__icon' />
          <span className='form-container__span'>{file.name}</span>
        </div>)}
      <button onClick={(e) => onUploadImage(e, uploadConfirmationMessage, setFile, setErrorMessage, file)} disabled={!file} className='form-container__button'>Upload</button>

    </>
  )
}

export default DropImage
