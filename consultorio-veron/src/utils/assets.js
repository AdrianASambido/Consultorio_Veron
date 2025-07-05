// Utilidad para manejo de assets
export const getImagePath = (filename) => `/images/${filename}`;
export const getVideoPath = (filename) => `/videos/${filename}`;

// Lista de imágenes disponibles (excluyendo logos)
export const getCarouselImages = () => {
  const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
  return Object.keys(imageModules)
    .filter(path => !path.includes('logo'))
    .map(path => path.replace('/public', ''));
};

// Lista de videos disponibles
export const getVideos = () => {
  const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,ogg}', { eager: true });
  return Object.keys(videoModules)
    .map(path => path.replace('/public', ''));
};

// Validación de tipos de archivo
export const isValidImageType = (filename) => {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  return validExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

export const isValidVideoType = (filename) => {
  const validExtensions = ['.mp4', '.webm', '.ogg'];
  return validExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}; 