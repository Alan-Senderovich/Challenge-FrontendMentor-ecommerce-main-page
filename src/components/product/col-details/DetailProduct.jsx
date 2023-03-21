import React from "react";
import CartIcon from "@/components/icons/CartIcon";

const DetailProduct = () => {
  return (
    <section className="container mx-auto mt-4 px-4 md:px-0 md:gap-5">
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-primary">
        Sneaker Company
      </p>
      <h2 className=" mb-3 text-2xl font-bold">
        Fall Limited Edition Sneakers
      </h2>
      <p className="mb-3 text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-3 grid grid-cols-3 items-center font-bold md:gap-2 md:grid-cols-[1fr_3fr]">
        <span className="text-2xl">$125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          50%
        </span>
        <span className="text-right text-grayish-blue line-through md:col-span-3 md:text-left">
          $250.00
        </span>
      </div>
      <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-5">
        <div className="col-span-3 flex items-baseline justify-between bg-light-grayish-blue px-5 py-2 rounded-md pb-3 md:col-span-2">
          <button className="text-3xl text-orange-primary">-</button>
          <span>0</span>
          <button className="text-3xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 flex items-center justify-center gap-3 rounded-md bg-orange-primary py-3 text-white hover:bg-orange-300 transition-all md:col-span-3">
          <CartIcon fill="#fff" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default DetailProduct;
