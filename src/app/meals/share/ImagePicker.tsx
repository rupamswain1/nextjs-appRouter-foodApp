"use client";

import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface props {
  label: string;
  name: string;
}

const ImagePicker: React.FunctionComponent<props> = ({ label, name }) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(
    null
  );
  const handleImageClick = () => {
    imageRef.current?.click();
  };

  const handlePickedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.imagePicker}>
      <div className={styles.imageBox}>
        {pickedImage ? (
          <Image src={pickedImage} alt="Image picked by user" fill />
        ) : (
          "No Image Selected Yet"
        )}
      </div>
      <div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={styles.mealInput}
          ref={imageRef}
          onChange={handlePickedImage}
        />
        <Button
          as="button"
          type="primary"
          text={"Pick an Image"}
          btnType="button"
          onClick={handleImageClick}
          className={styles.imageBtn}
        ></Button>
      </div>
    </div>
  );
};

export default ImagePicker;
