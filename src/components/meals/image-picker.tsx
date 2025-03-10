'use client'

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({label, forName}: { label: string, forName: string }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInput = useRef()

  function handlePickClick() {
    imageInput.current.click()
  }

  function handleImageChange(event: Event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return;
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return(
    <div className={classes.picker}>
      <label className="">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill  />}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/*"
          id={forName}
          name={forName}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />

        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick a image
        </button>
      </div>
    </div>
  )
}