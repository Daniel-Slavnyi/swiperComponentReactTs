import { CommonClassProps, Photo } from "../types";

import cn from "classnames";
import css from "./MainPhoto.module.scss";

interface MainPhotoProps extends CommonClassProps {
  activePhoto: Photo;
  prevPhoto?: Photo;
  nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  activePhoto,
  prevPhoto,
  nextPhoto,
  className,
}) => {
  return (
    <div className={cn(className, css.mainPhoto)}>
      {prevPhoto && (
        <img
          src={prevPhoto.src}
          alt={prevPhoto.description}
          className={cn(css.mainPhotoImage, css.mainPhotoImagePrev)}
        />
      )}
      <img
        src={activePhoto.src}
        alt={activePhoto.description}
        className={css.mainPhotoImage}
      />
      {nextPhoto && (
        <img
          src={nextPhoto.src}
          alt={nextPhoto.description}
          className={cn(css.mainPhotoImage, css.mainPhotoImageNext)}
        />
      )}
    </div>
  );
};
