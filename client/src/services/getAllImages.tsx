import { apiUrl } from './apiUrl'

export const getUserImages: any = (setImages) => {
  fetch(apiUrl + 'images', {
    method: 'GET',
    headers: {
      token: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(async response => await response.json())
    .then(privateImages => {
      setImages(privateImages.data)
    })
    .catch(error => console.log(error))
}
