import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategory/FeaturedCategories";
import { getProductsCategorySuccess } from "@/redux/features/productCategory/productCategorySlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

export default function HomePage({ products }) {
  console.log(products);
  const dispatch = useAppDispatch();
  // dispatch(getProductsSuccess(product.data))
  useEffect(() => {
    if (products) {
      dispatch(getProductsCategorySuccess(products.data));
    }
  }, [products, dispatch]);
  return (
    <>
      <div className="">
        <Banner />
      </div>
      <div>
        <AllProduct products={products} />
      </div>
      <div className="py-20">
        <FeaturedCategories />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  return { props: { products: data }, revalidate: 10 };
};

/* export const getStaticProps = async () => {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
  // const randomProducts = getRandomProducts(data, 6);
  return {
    props: {
      allProducts: data.data,
    },
    revalidate: 5,
  };
};
 */
