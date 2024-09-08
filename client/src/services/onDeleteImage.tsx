import { apiUrl } from './apiUrl'

export const deleteImage = async (imageId: number | string, imageUrl: string): Promise<void> => {
  return await fetch(`${apiUrl}images/${imageId}${imageUrl}`, {
    method: 'DELETE',
    headers: {
      token: `Bearer ${localStorage.getItem('token')}`
    }
  }).catch(error => console.log(error))
}
