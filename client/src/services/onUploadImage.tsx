import { type File, Image } from '../types.d'
import { apiUrl } from './apiUrl'
import { getUserImages } from './getAllImages'

interface Props {
  e: React.MouseEvent
  uploadConfirmationMessage: () => void
  setFile: () => void
  setErrorMessage: () => void
  file: File
  setImages: Image
}

export const onUploadImage = ({ e, uploadConfirmationMessage, setFile, setErrorMessage, file, setImages }: Props): void => {
  e.preventDefault()

  const formData = new FormData()
  formData.append('image', file)

  fetch(apiUrl + 'images', {
    method: 'POST',
    headers: {
      token: `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  }).then(async response => await response.json())
    .then(uploadStatus => {
      console.log(uploadStatus)
      if (uploadStatus.status === 'SUCESS') {
        uploadConfirmationMessage()
        setFile()
        setErrorMessage()
        getUserImages(setImages)
      }
      if (uploadStatus.status === 'FAIL') {
        setErrorMessage(uploadStatus.message)
      }
    }).catch(error => console.log(error))
}
