
import { AiFillDelete, AiFillCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { apiUrl } from '../services/apiUrl'
import { deleteImage } from '../services/onDeleteImage'
import { onDeleteImage } from '../utils/onDeleteImage'

const SingleImage: any = (props: any) => {
  const { image, setImages, setSelectedId, images, selectedId } = props
  return (
    <div className={`dashboard__image-container ${selectedId === image.image_id ? 'fade' : ''}`}>
      <img loading='lazy' src={`${apiUrl}showImages${image.url}`} className='dashboard__image' />
      <div className='dashboard__image-actions'>
        <AiFillDelete onClick={() => onDeleteImage(image.image_id, image.url, image.image_id, setImages, setSelectedId, images, deleteImage)} className='dashboard__delete' />
        <CopyToClipboard text={`${apiUrl}showImages${image.url}`}>
          <AiFillCopy className='dashboard__delete' />
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default SingleImage
