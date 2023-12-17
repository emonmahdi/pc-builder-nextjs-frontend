import RootLayout from "@/components/Layouts/RootLayout";
import AboutSupport from "@/components/UI/AboutSupport/AboutSupport";
import AllProduct from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Brands from "@/components/UI/Brands/Brands";
import FeaturedCategories from "@/components/UI/FeaturedCategory/FeaturedCategories";
import { getProductsCategorySuccess } from "@/redux/features/productCategory/productCategorySlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function HomePage({ products }) {
  // console.log(products);
  const dispatch = useAppDispatch();
  // dispatch(getProductsSuccess(product.data))
  useEffect(() => {
    if (products) {
      dispatch(getProductsCategorySuccess(products.data));
    }
  }, [products, dispatch]);
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <AboutSupport />
      </div>
      <div className="mb-8">
        <AllProduct products={products} />
      </div>
      <div>
        <Brands />
      </div>
      <div className=" ">
        <FeaturedCategories />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

function getRandomProducts(array, n) {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, n);
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  const randomProducts = getRandomProducts(data, 6);
  return { props: { products: randomProducts }, revalidate: 10 };
};
