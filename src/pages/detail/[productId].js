import RootLayout from "@/components/Layouts/RootLayout";
import SingleProductDetailPage from "@/components/UI/ProductDetailsPage";

const ProductDetail = ({ product }) => {
  //   const products = product.data;
  return (
    <div>
      <SingleProductDetailPage product={product} />
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://pc-builder-server-ochre.vercel.app/products`
  );
  const products = await res.json();
  console.log("my products:", products);

  const paths = products?.map((product) => ({
    params: { productId: product?._id },
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-ochre.vercel.app/products/${params?.productId}`
  );
  const data = await res.json();
  return { props: { product: data } };
};
