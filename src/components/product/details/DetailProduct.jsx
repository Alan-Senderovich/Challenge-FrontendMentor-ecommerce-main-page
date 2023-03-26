import React, { useContext, useState } from "react";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/context/CartContext";

const DetailProduct = ({ objectProduct }) => {
    const { addCartProducts } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const decrementCount = () => {
        if (count === 0) return;

        setCount(count - 1);
    };

    const handleAddToCart = () => {
        if (count === 0) return;
        addCartProducts(productToAdd);
        setCount(1);
    };

    const {
        title,
        subtitle,
        description,
        price,
        discount,
        imagesMain,
        imagesSmall,
        id,
    } = objectProduct;

    const priceFormatted = price.toFixed(2);
    const discountFormatted = discount * 100;
    const priceWithDiscount = (price * (1 - discount)).toFixed(2);

    const productToAdd = {
        id: id,
        img: imagesSmall[0],
        title: title,
        priceWithDiscount: priceWithDiscount,
        quantity: count || 1,
    };

    return (
        <section className="container mx-auto mt-4 px-4 md:min-w-full md:gap-5 md:px-0 lg:max-w-sm xl:max-w-md ">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-primary">
                {subtitle}
            </p>
            <h2 className=" mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                {title}
            </h2>
            <p className="mb-3 text-dark-grayish-blue">{description}</p>
            <div className="mb-3 grid grid-cols-3 items-center font-bold md:grid-cols-[1fr_3fr] md:gap-2">
                <span className="text-2xl">${priceWithDiscount}</span>
                <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
                    {discountFormatted}%
                </span>
                <span className="text-right text-grayish-blue line-through md:col-span-3 md:text-left">
                    ${priceFormatted}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-5">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-light-grayish-blue px-5 py-2 pb-3 md:col-span-2">
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={decrementCount}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="col-span-3 flex items-center justify-center gap-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-300 md:col-span-3"
                >
                    <CartIcon fill="#fff" />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default DetailProduct;
