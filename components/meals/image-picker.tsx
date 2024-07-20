"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0];

      if (!file) {
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage.toString()}
              alt="Image picked by user"
              fill
            />
          ) : (
            <p>No Image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleChangeImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick and Image
        </button>
      </div>
    </div>
  );
}
