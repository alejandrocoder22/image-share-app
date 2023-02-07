
import { AiFillDelete, AiFillCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { apiUrl } from '../services/apiUrl'
import { deleteImage } from '../services/onDeleteImage'

const onDeleteImage: any = (imageId: number, imageUrl: string, id, setImages, setSelectedId, images) => {
  setSelectedId(id)

  setTimeout(() => {
    deleteImage(imageId, imageUrl)
    setImages(images.filter(image => image.image_id !== imageId))
  }, 1000)
}

const SingleImage: any = (props: any) => {
  return (
    <div className={`dashboard__image-container ${props.selectedId === props.image.image_id ? 'fade' : ''}`}>
      <img loading='lazy' src={`${apiUrl}showImages${props.image.url}`} className='dashboard__image' />
      <div className='dashboard__image-actions'>
        <AiFillDelete onClick={() => onDeleteImage(props.image.image_id, props.image.url, props.image.image_id, props.setImages, props.setSelectedId, props.images)} className='dashboard__delete' />
        <CopyToClipboard text={`${apiUrl}showImages${props.image.url}`}>
          <AiFillCopy className='dashboard__delete' />
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default SingleImage
