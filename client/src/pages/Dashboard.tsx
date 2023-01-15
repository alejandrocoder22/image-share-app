import { useEffect, useState } from 'react'
import { AiFillDelete, AiFillCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import DropImage from '../components/DropImage'
import { apiUrl } from '../services/apiUrl'
const Dashboard: any = () => {
  const [images, setImages] = useState<any[]>([])

  const getPrivateImages: any = () => {
    fetch(apiUrl + 'images', {
      method: 'GET',
      headers: {
        token: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(async response => await response.json())
      .then(privateImages => setImages(privateImages.data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    getPrivateImages()
  }, [])

  const onDeleteImage: any = (imageId: number) => {
    fetch(`${apiUrl}images/${imageId}`, {
      method: 'DELETE',
      headers: {
        token: `Bearer ${localStorage.getItem('token')}`
      }
    }).catch(error => console.log(error))
    setImages(images.filter(image => image.image_id !== imageId))
  }

  return (
    <div className='dashboard wrapper min-height'>
      <div className='dashboard__drop-image-container'>
        <DropImage />
      </div>
      <div className='dashboard__images-container'>
        {
        images?.map(image => (
          <div key={image.image_id} className='dashboard__image-container'>
            <img loading='lazy' src={`${apiUrl}showImages${image.url}`} className='dashboard__image' />
            <div className='dashboard__image-actions'>
              <AiFillDelete onClick={() => onDeleteImage(image.image_id)} className='dashboard__delete' />
              <CopyToClipboard text={`${apiUrl}showImages${image.url}`}>
                <AiFillCopy className='dashboard__delete' />
              </CopyToClipboard>
            </div>
          </div>
        ))
      }
      </div>

    </div>

  )
}

export default Dashboard
