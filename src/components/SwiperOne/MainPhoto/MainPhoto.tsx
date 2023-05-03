/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CommonClassProps, Photo } from "../types";

import cn from "classnames";
import css from "./MainPhoto.module.scss";
import { useEffect, useMemo, useRef, useState } from "react";

interface MainPhotoProps extends CommonClassProps {
  photos: Photo[];
  indexOfActivePhoto: number;
}

type RefT = React.MutableRefObject<HTMLDivElement | null>;

const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null =>
  ref.current!.querySelector(`img:nth-of-type(${index + 1})`);

const hidePhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }

  element.dataset.active = "false";

  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = "false";
  }

  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = "false";
  }
};

const showPhoto = (element: HTMLElement | null) => {
  if (!element) {
    return;
  }

  element.dataset.active = "true";
  // @ts-ignore
  element.src = element.dataset.src;

  if (element.previousSibling) {
    // @ts-ignore
    element.previousSibling.dataset.active = "prepared";
    // @ts-ignore
    element.previousSibling.src = element.previousSibling.dataset.src;
  }

  if (element.nextSibling) {
    // @ts-ignore
    element.nextSibling.dataset.active = "prepared";
    // @ts-ignore
    element.nextSibling.src = element.nextSibling.dataset.src;
  }
};

export const MainPhoto: React.FC<MainPhotoProps> = ({
  photos,
  indexOfActivePhoto,
  className,
}) => {
  const [prevIndexActivePhoto, setPrevIndexActivePhoto] =
    useState(indexOfActivePhoto);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const activePhoto = getPhotoByRef(containerRef, prevIndexActivePhoto);

    const nextActivePhoto = getPhotoByRef(containerRef, indexOfActivePhoto);

    if (indexOfActivePhoto !== prevIndexActivePhoto) {
      hidePhoto(activePhoto);
      showPhoto(nextActivePhoto);
    } else {
      showPhoto(activePhoto);
    }

    setPrevIndexActivePhoto(indexOfActivePhoto);
  }, [indexOfActivePhoto]);

  return useMemo(
    () => (
      <div className={cn(className, css.mainPhoto)} ref={containerRef}>
        {photos.map((item, idx) => (
          <img
            key={item.id}
            data-src={item.src}
            alt={item.description}
            className={css.mainPhotoImage}
            data-active={idx === indexOfActivePhoto}
            loading="lazy"
          />
        ))}
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
