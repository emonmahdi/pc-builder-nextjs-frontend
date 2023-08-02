/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { id, title, description, img, price, status, category, rating } =
    product;

  const handleAddToPC = (product) => {
    console.log("Done the product add");
    console.log(product);
  };

  return (
    <div
      key={id}
      className="card w-[100%] md:w-2/2 lg:w-3/3 bg-base-100 shadow-xl mb-4"
    >
      <figure>
        <img src={img} width="50%" height="auto" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-orange-400">{status}</p>
        <Link href={`/detail/${product?._id}`}>
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{price}৳</div>
          </h2>
        </Link>
        <p> {description.slice(0, 120)}.......</p>
        <div>
          <div>
            <p>
              {" "}
              <span className="font-bold capitalize">Category:</span>{" "}
              <span className="font-bold px-2 text-orange-400 rounded-full capitalize">
                {category}
              </span>
            </p>
          </div>
          <br />
          <div>
            <p>
              {" "}
              <span className="font-bold">Rating:</span> {rating}
            </p>
          </div>
          <div className="text-center my-2">
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
