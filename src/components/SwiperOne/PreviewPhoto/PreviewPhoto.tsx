import React, { useEffect, useMemo, useRef } from "react";
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
  const previewContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewContainer.current) return;
    previewContainer.current.style.transform = `translateX(-${
      164 * indexOfActivePhoto
    }px)`;
  }, [indexOfActivePhoto]);

  return (
    <div className={cn(className, css.previewPhoto)}>
      {useMemo(
        () => (
          <ul className={css.previewPhotoList} ref={previewContainer}>
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
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      )}
      <div className={css.previewPhotoWrap}>
        {indexOfActivePhoto + 1} / {photos.length}
      </div>
    </div>
  );
};
