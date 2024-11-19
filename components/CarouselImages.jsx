import React, { useEffect, useRef, useState } from "react";
import {
  aetna_logo,
  alignment_logo,
  anthem_logo,
  humana_logo,
  scan_logo,
  unitedHealthcare_logo,
} from "@/public";
import Image from "next/image";

export default function InfiniteCarousel() {
  const array_images = [
    aetna_logo,
    alignment_logo,
    anthem_logo,
    humana_logo,
    scan_logo,
    unitedHealthcare_logo,
  ];

  const imagesPerPage = 3;
  const totalImages = array_images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + imagesPerPage);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= totalImages) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const getCarouselStyle = () => {
    return {
      transform: `translateX(-${(currentIndex * 100) / imagesPerPage}%)`,
      transition: isTransitioning ? "transform 1s ease-in-out" : "none",
    };
  };

  const handlePaginationClick = (index) => {
    setCurrentIndex(index * imagesPerPage);
    setIsTransitioning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-hidden max-w-screen-lg w-full space-y-10">
        <div
          ref={carouselRef}
          className="flex items-center"
          style={getCarouselStyle()}
        >
          {[...array_images, ...array_images].map((img, index) => (
            <div
              key={index}
              className="flex-none w-1/3 px-4"
              style={{ minWidth: "33.33%" }}
            >
              <div className="w-full h-full rounded-lg overflow-hidden flex">
                <Image
                  src={img}
                  width={100}
                  height={100}
                  alt={`carousel-image-${index}`}
                  className="w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(totalImages / imagesPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex / imagesPerPage === index
                    ? "bg-JarGray-1"
                    : "bg-JarGray-2"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
