import React from "react";
import { CommonClassProps, Photo } from "../types";

import cn from "classnames";
import css from "./PreviewPhoto.module.scss";

interface PreviewPhotoProps extends CommonClassProps {
  photos: Photo[];
  indexOfActivePhoto: number;
}

export const PreviewPhoto: React.FC<PreviewPhotoProps> = ({
  photos,
  indexOfActivePhoto,
  className,
}) => {
  return (
    <div className={cn(className, css.previewPhoto)}>
      <ul className={css.previewPhotoList}>
        {photos.map((item) => (
          <li key={item.id} className={css.previewPhotoItem}>
            <img
              src={item.preview}
              alt={item.description}
              className={css.previewPhotoImg}
            />
          </li>
        ))}
      </ul>
      <div className={css.previewPhotoWrap}>
        {indexOfActivePhoto + 1} / {photos.length}
      </div>
    </div>
  );
};
