import MainHeader from "@/components/header/MainHeader";
import MainProduct from "@/components/product/MainProduct";
import { CartProvider } from "./context/CartContext";
import { SliderProvider } from "./context/SliderContext";

const App = () => {
    return (
        <SliderProvider>
            <CartProvider>
                <MainHeader />
                <MainProduct />
            </CartProvider>
        </SliderProvider>
    );
};

export default App;
