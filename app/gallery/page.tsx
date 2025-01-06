"use client"
import React,{useState} from "react";
import Image from "next/image";

const Gallery = () => {

    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      ];

    const [currentImageIndex,setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

      const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src={images[currentImageIndex]}
          alt=""
          width={500}  
          height={500}
          layout="responsive"
        />
         <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-lime-500 hover:text-white px-3"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-lime-500 hover:text-white px-3"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={image}
              alt=""
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
