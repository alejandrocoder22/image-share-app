export const onDeleteImage = (imageId: number, imageUrl: string, id: string, setImages, setSelectedId, images, deleteImage): void => {
  setSelectedId(id)
  setTimeout(() => {
    deleteImage(imageId, imageUrl)
    setImages(images.filter(image => image.image_id !== imageId))
  }, 1000)
}
