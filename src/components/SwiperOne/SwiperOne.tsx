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

  const prevPhoto = photos[indexOfActivePhoto - 1];
  const nextPhoto = photos[indexOfActivePhoto + 1];

  return (
    <div className={css.swipeGallery}>
      <div className={css.swipeGalleryContainer}>
        <MainPhoto
          photos={photos}
          indexOfActivePhoto={indexOfActivePhoto}
          className={css.mainPhotoGallery}
        />
        <Navigation
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          className={css.swipeGalleryNavigation}
          onPrevClick={() => {
            setIndexOfActivePhoto(indexOfActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexOfActivePhoto(indexOfActivePhoto + 1);
          }}
        />
      </div>
      <PreviewPhoto
        photos={photos}
        indexOfActivePhoto={indexOfActivePhoto}
        className={css.PreviewPhotoList}
        setNewPhoto={setIndexOfActivePhoto}
      />
    </div>
  );
};
