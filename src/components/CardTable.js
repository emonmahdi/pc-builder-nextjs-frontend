/* eslint-disable @next/next/no-img-element */

import { addToBuild } from "@/redux/features/addToBuild/addToBuildSlice";
import { useAppDispatch } from "@/redux/hook";

const category = [
  {
    title: "monitor",
    link: "/categories/monitor",
  },
  {
    title: "motherboard",
    link: "/categories/motherboard",
  },
  {
    title: "power-supply-unit",
    link: "/categories/power-supply-unit",
  },
  {
    title: "ram",
    link: "/categories/ram",
  },
  {
    title: "processor",
    link: "/categories/ram",
  },
  {
    title: "storage-device",
    link: "/categories/ram",
  },
];

const CardTable = ({ product, setShowModal }) => {
  const { img, title, price } = product;

  const dispatch = useAppDispatch();

  const handelAddToBuild = (product) => {
    dispatch(addToBuild(product));
    setShowModal(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <td>
              <img className="w-14" src={img} alt="" />
            </td>
            <td>
              <p>{title}</p>
              <p className="text-xl font-semibold">${price}</p>
            </td>
            <td>
              {/* <button
                onClick={() => handelAddToBuild(product)}
                className="btn btn-primary"
              >
                {" "}
                Add to Builder{" "}
              </button> */}
              <button>Choose</button>
            </td>
          </tr>
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default CardTable;
