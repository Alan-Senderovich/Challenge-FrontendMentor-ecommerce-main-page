import DetailProduct from "@/components/product/DetailProduct";
import SlideProduct from "@/components/product/SlideProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <SlideProduct />
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
