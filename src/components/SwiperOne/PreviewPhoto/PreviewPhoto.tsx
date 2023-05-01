import React from "react";
import { Photo } from "../types";

interface PreviewPhotoProps {
  photos: Photo[];
  indexOfActivePhoto: number;
}

export const PreviewPhoto: React.FC<PreviewPhotoProps> = ({
  photos,
  indexOfActivePhoto,
}) => {
  return <div>PreviewPhoto</div>;
};
