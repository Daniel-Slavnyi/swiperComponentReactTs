import React, { useState } from "react";

import { Photo } from "./types";

import { MainPhoto } from "./MainPhoto/MainPhoto";
import { Navigation } from "./Navigation/Navigation";
import { PreviewPhoto } from "./PreviewPhoto/PreviewPhoto";

import css from "./SwiperOne.module.scss";

interface SwiperOneProps {
  photos: Photo[];
}

export const SwiperOne: React.FC<SwiperOneProps> = ({ photos }) => {
  const [indexOfActivePhoto, setIndexOfActivePhoto] = useState(0);

  if (!photos.length) {
    return null;
  }

  const activePhoto = photos[indexOfActivePhoto];
  const prevPhoto = photos[indexOfActivePhoto - 1];
  const nextPhoto = photos[indexOfActivePhoto + 1];

  return (
    <div className={css.swipeGallery}>
      <div className={css.swipeGalleryContainer}>
        <MainPhoto
          activePhoto={activePhoto}
          prevPhoto={prevPhoto}
          nextPhoto={nextPhoto}
          className={css.mainPhotoGallery}
        />
        <Navigation
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          className={css.navigationGallery}
          onPrevClick={() => {
            setIndexOfActivePhoto(indexOfActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexOfActivePhoto(indexOfActivePhoto + 1);
          }}
        />
      </div>
      <PreviewPhoto photos={photos} indexOfActivePhoto={indexOfActivePhoto} />
    </div>
  );
};
