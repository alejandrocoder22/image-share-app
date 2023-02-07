import { apiUrl } from './apiUrl'

export const deleteImage: any = async (imageId: number | string, imageUrl: string) => {
  return await fetch(`${apiUrl}images/${imageId}${imageUrl}`, {
    method: 'DELETE',
    headers: {
      token: `Bearer ${localStorage.getItem('token')}`
    }
  }).catch(error => console.log(error))
}


