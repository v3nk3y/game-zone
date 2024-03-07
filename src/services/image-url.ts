import noImage from "../assets/no-image.webp";

// Util service for getting smaller image from the API by cropping it to 600x400
const getCroppedImage = (url: string) => {
  return url ? url.replace("media/games", "media/crop/600/400/games") : noImage;
};

export default getCroppedImage;
