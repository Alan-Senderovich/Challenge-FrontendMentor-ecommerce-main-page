import React, { useState } from "react";
import SlideProduct from "@/components/product/col-images/SlideProduct";

const MainImages = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);


  const handleOpenModal = () => {
    window.innerWidth > 767 && setIsOpenModal(true);
  };

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SlideProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <SlideProduct
          ARRAY_IMGS={ARRAY_IMGS}
          ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          className="hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-sm md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
        />
      )}
    </>
  );
};

export default MainImages;
