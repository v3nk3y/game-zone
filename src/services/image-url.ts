// Util service for getting smaller image from the API by cropping it to 600x400
const getCroppedImage = (url: string) => {
  return url.replace("media/games", "media/crop/600/400/games");
};

export default getCroppedImage;
