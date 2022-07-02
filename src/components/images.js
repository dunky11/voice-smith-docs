import React from "react";
import { StaticImage } from "gatsby-plugin-image";



export function TestImage() {
  return (
    <StaticImage
      src="../images/test_image.png"
      alt="A test"
      placeholder="blurred"
      layout="fullWidth"
    />
  )
}