import DetailProduct from "@/components/product/details/DetailProduct";
import MainImages from "@/components/product/gallery/MainImages";

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

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  subtitle: "SNEAKER COMPANY",
  imagesMain: ARRAY_IMGS,
  imagesSmall: ARRAY_IMGS_SMALL,
  price: 250,
  discount: 0.5,
}

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:container md:mx-auto md:min-h-[calc(100vh-88px-1px)] md:grid-cols-2 md:items-center md:gap-20 lg:h-3/4 lg:w-[90%] lg:gap-0 xl:w-[85%]">
            <MainImages
                ARRAY_IMGS={objectProduct.imagesMain}
                ARRAY_IMGS_SMALL={objectProduct.imagesSmall}
            />
            <DetailProduct objectProduct={objectProduct}/>
        </main>
    );
};

export default MainProduct;
