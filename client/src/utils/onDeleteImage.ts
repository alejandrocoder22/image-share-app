export const onDeleteImage: any = (imageId: number, imageUrl: string, id, setImages, setSelectedId, images, deleteImage) => {
  setSelectedId(id)
  setTimeout(() => {
    deleteImage(imageId, imageUrl)
    setImages(images.filter(image => image.image_id !== imageId))
  }, 1000)
}
