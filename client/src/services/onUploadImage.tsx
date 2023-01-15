import { apiUrl } from './apiUrl'

export const onUploadImage: any = (e: any, uploadConfirmationMessage: any, setFile: any, setErrorMessage: any, file: any) => {
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
      if (uploadStatus.status === 'SUCESS') {
        uploadConfirmationMessage()
        setFile('')
        setErrorMessage('')
      }
      if (uploadStatus.status === 'FAIL') {
        setErrorMessage(uploadStatus.message)
      }
    }).catch(error => console.log(error))
}
