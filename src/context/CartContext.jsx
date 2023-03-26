import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addCartProducts = (product) => {
        if (cartProducts.length === 0) {
            return setCartProducts([...cartProducts, product]);
        }

        setCartProducts(
            cartProducts.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + product.quantity,
                    };
                } else {
                    return item;
                }
            })
        );
    };

    const deleteCartProduct = (id) => {
        const filteredProducts = cartProducts.filter((product) => {
            product.id !== id;
        });
        setCartProducts(filteredProducts);
    };

    const totalCartProducts = () => {
        let total = 0;
        cartProducts.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addCartProducts,
                deleteCartProduct,
                totalCartProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
