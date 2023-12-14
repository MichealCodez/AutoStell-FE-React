import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Hero.css";
import topBackImage from "../images/footer-card-image.png";

export default function Hero({ onClickJoin }) {
  const [rotationAngle, setRotationAngle] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const imageArray = Array.from({ length: 72 }, (_, index) => {
        const img = new Image();
        img.src = require(`../images/rotating-cars/${index + 1}.png`);
        return img;
      });
      await Promise.all(imageArray.map((img) => img.decode()));
      setImages(imageArray);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prevAngle) => (prevAngle === 72 ? 1 : prevAngle + 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Hero">
      <Header onClickJoin={onClickJoin} />
      <div className="hero-image-background">
        <div style={{ position: "relative" }}>
          <img src={topBackImage} alt="backImage" className="static-image" />
          <img
            src={images.length ? images[rotationAngle - 1].src : ""}
            alt="Rotating Car"
            className="rotating-car"
          />
        </div>
      </div>
    </div>
  );
}
