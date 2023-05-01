import { Photo } from "../types";

interface MainPhotoProps {
  activePhoto: Photo;
  prevPhoto?: Photo;
  nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  activePhoto,
  prevPhoto,
  nextPhoto,
}) => {
  return <div>MainPhoto</div>;
};
