/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, title, img, price, status, category, rating } = product;

  const handleAddToPC = (product) => {
    console.log("Done the product add");
    console.log(product);
  };

  return (
    <div key={id} className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={img} width="auto" height="200px" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-orange-400">{status}</p>
        <Link href={`/detail/${product?._id}`}>
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{price}৳</div>
          </h2>
        </Link>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="">
          <div className="">
            <p>
              {" "}
              <span className="font-bold capitalize">Category:</span>{" "}
              <span className="bg-black px-2 py-1 text-white rounded-full capitalize">
                {category}
              </span>
            </p>
          </div>
          <br />
          <div className="">
            <p>
              {" "}
              <span className="font-bold">Rating:</span> {rating}
            </p>
          </div>
          <div className="text-center my-4">
            <button
              onClick={() => handleAddToPC(product)}
              className="btn btn-primary"
            >
              Add To Builder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
