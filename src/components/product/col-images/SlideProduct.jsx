import React, { useCallback, useEffect, useRef, useState } from "react";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
//

const SlideProduct = ({
  ARRAY_IMGS = [],
  ARRAY_IMGS_SMALL = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = null,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const btnSlider = useRef(null);

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

  const handleKeyDown = useCallback(
    (event) => {
      const keyValue = event.key;
      if (isOpenModal) {
        keyValue === "ArrowRight" && handleClickNext();
        keyValue === "ArrowLeft" && handleClickPrev();
        keyValue === "Escape" && handleCloseModal();
      }
    },
    [handleClickNext, handleClickPrev, handleCloseModal, isOpenModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [currentIndex]);

  // useEffect(() => {
  //   isOpenModal && btnSlider.current.classList.remove("md:hidden");
  // }, [isOpenModal]);

  return (
    <section {...props}>
      {isOpenModal && (
        <button className="text-right md:col-span-4" onClick={handleCloseModal}>
          cerrar
        </button>
      )}
      <div className="relative col-span-4">
        <img
          src={ARRAY_IMGS[currentIndex]}
          alt=""
          className="aspect-[16/12] md:aspect-[16/16] md:cursor-pointer md:rounded-md"
          onClick={!isOpenModal ? () => handleOpenModal() : null}
        />
        <div
          ref={btnSlider}
          className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 ${
            !isOpenModal && "md:hidden"
          }`}
        >
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
      {ARRAY_IMGS_SMALL.map((smallImg, i) => (
        <div
          key={i}
          className="relative hidden overflow-hidden rounded-md md:block"
          onClick={() => {
            setCurrentIndex(i);
          }}
        >
          <img
            src={smallImg}
            alt="imageProductThumbnail"
            className="md:rounded-md"
          />
          <span className={`absolute top-0 left-0 h-full w-full rounded-md cursor-pointer bg-transparent hover:bg-[rgba(255,255,255,0.5)] ${currentIndex === i && "bg-[rgba(255,255,255,0.5)] border-2 border-orange-primary"}`}></span>
        </div>
      ))}
    </section>
  );
};

export default SlideProduct;
