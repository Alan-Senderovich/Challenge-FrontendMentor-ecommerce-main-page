import { createContext, useState } from "react";

const SliderContext = createContext();

import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "@/assets/images/image-product-4-thumbnail.jpg";


const ARRAY_IMGS = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
const ARRAY_IMGS_SMALL = [
    imageProduct1Thumbnail,
    imageProduct2Thumbnail,
    imageProduct3Thumbnail,
    imageProduct4Thumbnail,
];

const SliderProvider = ({ children }) => {
    const [arrayImages, setArrayImages] = useState(ARRAY_IMGS);
    const [arraySmallImages, setArraySmallImages] = useState(ARRAY_IMGS_SMALL);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickNext = () => {
        const newIndex =
            currentIndex === arrayImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const handleClickPrev = () => {
        const newIndex =
            currentIndex === 0 ? arrayImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <SliderContext.Provider
            value={{
                arrayImages,
                arraySmallImages,
                currentIndex,
                setCurrentIndex,
                handleClickNext,
                handleClickPrev
            }}
        >
            {children}
        </SliderContext.Provider>
    );
};

export { SliderProvider, SliderContext };
