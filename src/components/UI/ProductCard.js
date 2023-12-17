/* eslint-disable @next/next/no-img-element */
import { addToPcBuilder } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { useSession } from "next-auth/react";
import Link from "next/link";
import MyButton from "./MyButton";

const ProductCard = ({ product }) => {
  const { id, title, description, img, price, status, category, rating } =
    product;

  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const handleAddToPC = (product) => {
    dispatch(addToPcBuilder(product));
  };

  return (
    <div
      key={id}
      className="card sm:w-full md:w-2/2 lg:w-3/3 bg-base-100 shadow-xl mb-4"
      style={{
        borderRight: "5px solid #444444",
      }}
    >
      <Link href={`/detail/${product?._id}`}>
        <figure>
          <img src={img} width="40%" height="auto" alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <p className="text-info font-bold">{status}</p>
        <Link href={`/detail/${product?._id}`}>
          <h2 className="card-title">
            <span className="hover:text-info">{title}</span>

            <div className="badge bg-[#444444] text-white">{price}৳</div>
          </h2>
        </Link>
        {/* <p> {description.slice(0, 120)}.......</p> */}
        <div>
          <div>
            <p>
              {" "}
              <span className="font-bold capitalize">Category:</span>{" "}
              <span className="font-bold px-2 text-info rounded-full capitalize">
                {category}
              </span>
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span className="font-bold">Rating:</span> {rating}
            </p>
          </div>
          <div className="text-center my-2">
            {session?.user ? (
              <Link href="/pc-build">
                <button
                  onClick={() => handleAddToPC(product)}
                  className="btn"
                  style={{
                    background: "rgb(101,80,219)",
                    background:
                      "linear-gradient(0deg, rgba(101,80,219,1) 2%, rgba(131,47,149,1) 100%)",
                    marginRight: "6px",
                    color: "#fff",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    fontWeight: "bold",
                  }}
                >
                  Add To Builder
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
