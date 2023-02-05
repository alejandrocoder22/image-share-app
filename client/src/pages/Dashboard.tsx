import { useEffect, useState } from 'react'
import { AiFillDelete, AiFillCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import DropImage from '../components/DropImage'
import { apiUrl } from '../services/apiUrl'
import { getUserImages } from '../services/getAllImages'
const Dashboard: any = () => {
  const [images, setImages] = useState<any[]>([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    getUserImages(setImages)
  }, [])

  const onDeleteImage: any = (imageId: number, imageUrl: string, id) => {
    setSelectedId(id)

    setTimeout(() => {
      fetch(`${apiUrl}images/${imageId}${imageUrl}`, {
        method: 'DELETE',
        headers: {
          token: `Bearer ${localStorage.getItem('token')}`
        }
      }).catch(error => console.log(error))
      setImages(images.filter(image => image.image_id !== imageId))
    }, 1000)
  }

  return (
    <div className='dashboard wrapper min-height'>
      <div className='dashboard__drop-image-container'>
        <DropImage setImages={setImages} />
      </div>
      <div className='dashboard__images-container'>
        {
        images?.map(image => (
          <div key={image.image_id} className={`dashboard__image-container ${selectedId === image.image_id ? 'fade' : ''}`}>
            <img loading='lazy' src={`${apiUrl}showImages${image.url}`} className='dashboard__image' />
            <div className='dashboard__image-actions'>
              <AiFillDelete onClick={() => onDeleteImage(image.image_id, image.url, image.image_id)} className='dashboard__delete' />
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
