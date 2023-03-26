import React, { useContext } from "react";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { CartContext } from "@/context/CartContext";

const CartDetails = () => {
    const { cartProducts, deleteCartProduct } = useContext(CartContext);
    return (
        <section className="absolute top-[115%] right-0 z-10 w-full md:max-w-sm">
            <div className="mx-4 rounded-md bg-white shadow-xl">
                <h4 className="text-md px-4 py-4 font-bold">Cart</h4>
                <hr />
                {cartProducts.length === 0 && (
                    <p className="px-8 py-16 text-center text-sm font-bold text-gray-500">
                        Your cart is empty.
                    </p>
                )}
                {cartProducts &&
                    cartProducts.map((product) => (
                        <article
                            key={product.id}
                            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4 px-4 py-4"
                        >
                            <img
                                src={product.img}
                                alt=""
                                className="rounded-md"
                            />
                            <div>
                                <h6 className="text-sm">{product.title}</h6>
                                <div>
                                    <p className="flex gap-2">
                                        <span className="text-sm">
                                            ${product.priceWithDiscount} x{" "}
                                            {product.quantity}
                                        </span>
                                        <span className="text-sm font-bold">
                                            $
                                            {(
                                                product.priceWithDiscount *
                                                product.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <button className="ml-auto" onClick={() => deleteCartProduct(product.id)}>
                                <DeleteIcon className="hover:fill-orange-primary" />
                            </button>
                        </article>
                    ))}
                {cartProducts.length !== 0 && (
                    <div className="w-full px-6 pb-6">
                        <button className="w-full rounded-md bg-orange-primary py-3 font-bold text-white transition-all hover:bg-orange-300">
                            Checkout
                        </button>
                    </div>
                )}
                <div></div>
            </div>
        </section>
    );
};

export default CartDetails;
