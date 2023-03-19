import React, { useState } from "react";
import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "@/assets/images/image-product-4-thumbnail.jpg";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

const ARRAY_IMGS = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

const SlideProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    const newIndex =
      currentIndex === ARRAY_IMGS.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleClickPrev = () => {
    const newIndex =
      currentIndex === 0 ? ARRAY_IMGS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="grid gap-4 md:grid-cols-4">
      <div className="relative col-span-4">
        <img src={ARRAY_IMGS[currentIndex]} alt="" className="aspect-[16/12]" />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
          <button
            onClick={handleClickPrev}
            className="grid h-10 w-10 place-items-center rounded-full bg-white p-1"
          >
            <PrevIcon />
          </button>
          <button
            onClick={handleClickNext}
            className="grid h-10 w-10 place-items-center rounded-full bg-white p-1"
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <img
        src={imageProduct1Thumbnail}
        alt="imageProduct1Thumbnail"
        className="hidden md:block"
      />
      <img
        src={imageProduct2Thumbnail}
        alt="imageProduct2Thumbnail"
        className="hidden md:block"
      />
      <img
        src={imageProduct3Thumbnail}
        alt="imageProduct3Thumbnail"
        className="hidden md:block"
      />
      <img
        src={imageProduct4Thumbnail}
        alt="imageProduct4Thumbnail"
        className="hidden md:block"
      />
    </section>
  );
};

export default SlideProduct;
