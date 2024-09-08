import { Image } from '../types.d'
import { apiUrl } from './apiUrl'

export const getUserImages = (setImages: (image: Image) => void): void => {
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
