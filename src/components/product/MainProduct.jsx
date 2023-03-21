import DetailProduct from "@/components/product/col-details/DetailProduct";
import MainImages from "@/components/product/col-images/MainImages";

import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "@/assets/images/image-product-4-thumbnail.jpg";


const ARRAY_IMGS = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
const ARRAY_IMGS_SMALL = [imageProduct1Thumbnail, imageProduct2Thumbnail, imageProduct3Thumbnail, imageProduct4Thumbnail];

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:container md:mx-auto md:min-h-[calc(100vh-88px-1px)] md:grid-cols-2 md:items-center md:gap-20">
      <MainImages ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}/>
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
