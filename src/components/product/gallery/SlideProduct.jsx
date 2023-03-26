import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useContext,
} from "react";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import CloseIcon from "../../icons/CloseIcon";
//

import { SliderContext } from "@/context/SliderContext";

const SlideProduct = ({
    ARRAY_IMGS = [],
    ARRAY_IMGS_SMALL = [],
    isOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = null,
    ...props
}) => {
    const {
        arrayImages,
        arraySmallImages,
        currentIndex,
        setCurrentIndex,
        handleClickNext,
        handleClickPrev,
    } = useContext(SliderContext);

    const btnSlider = useRef(null);

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

    return (
        <section {...props}>
            {isOpenModal && (
                <button
                    className="ml-auto text-white hover:text-orange-500 md:col-span-4"
                    onClick={handleCloseModal}
                >
                    <CloseIcon className="h-4 w-4 fill-current" />
                </button>
            )}
            <div className="relative col-span-4">
                <img
                    src={arrayImages[currentIndex]}
                    alt=""
                    className="aspect-[16/12] md:aspect-[16/16] md:cursor-pointer md:rounded-md lg:aspect-[16/14]"
                    onClick={!isOpenModal ? () => handleOpenModal() : null}
                />
                <div
                    ref={btnSlider}
                    className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between ${
                        !isOpenModal && "md:hidden"
                    } ${isOpenModal && "-left-[5%] w-[110%]"}`}
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
            {arraySmallImages.map((smallImg, i) => (
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
                    <span
                        className={`absolute top-0 left-0 h-full w-full cursor-pointer rounded-md bg-transparent hover:bg-[rgba(255,255,255,0.5)] ${
                            currentIndex === i &&
                            "border-2 border-orange-primary bg-[rgba(255,255,255,0.5)]"
                        }`}
                    ></span>
                </div>
            ))}
        </section>
    );
};

export default SlideProduct;
