"use client";

import Wave from "@/components/Wave";
import Image from "next/image";
import beachsideImage from "./assets/beachsideImg.png";
import thriftImage from "./assets/THRIFTBlueImg.png";
import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    { id: 1, url: "/images/surfboard.jpg", title: "Vintage Surfboards" },
    { id: 2, url: "/images/swimwear.jpg", title: "Retro Swimwear" },
    { id: 3, url: "/images/graphictee.jpg", title: "Graphic Tees" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play the carousel
  useEffect(() => {
    // Set a timer to snap to the next image every 3.5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        // If we reach the last image, loop back to the first (index 0)
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3500);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="page-container">
      <h1 className="home-page-title" aria-label="Beachside Thrift">
        <Image src={beachsideImage} alt="Beachside" className="page-title-image page-title-image--beachside" priority />
        <Image src={thriftImage} alt="Thrift" className="page-title-image page-title-image--thrift" priority />
      </h1>
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img) => (
            <div key={img.id} className="carousel-slide">
              {}
              <img src={img.url} alt={img.title} className="carousel-image" />
              <div className="carousel-caption">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Wave />
    </main>
  );
}
