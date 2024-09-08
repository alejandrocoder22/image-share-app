import { type File, Image } from '../types.d'
import { apiUrl } from './apiUrl'
import { getUserImages } from './getAllImages'

interface Props {
  e: React.MouseEvent
  uploadConfirmationMessage: () => void
  setFile: (file: File | null) => void
  setErrorMessage: (message: string | null) => void
  file: File | null
  setImages: (image: Image | null) => void
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
        setFile(null)
        setErrorMessage(null)
        getUserImages(setImages)
      }
      if (uploadStatus.status === 'FAIL') {
        setErrorMessage(uploadStatus.message)
      }
    }).catch(error => console.log(error))
}
