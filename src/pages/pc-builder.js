import CardTable from "@/components/CardTable";
import CardTableAdd from "@/components/CardTableAdd";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const PcBuilderPage = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();

  const { products } = useAppSelector((state) => state.products);
  // console.log(
  //   "all products: ",
  //   product.map((p) => p?.category === "monitor" && p.title)
  // );
  const { addToBuild } = useAppSelector((state) => state.addToBuild);

  const handelAddToBuilder = (category) => {
    setFilteredProducts(
      products.filter((product) => product?.category === `${category}`)
    );
    setShowModal(true);
  };

  const x = addToBuild.map((product) => "");

  const notify = () => toast.success("Successfully Build! Request ");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product) {
      dispatch(getProductsStart());
      if (product.success) {
        dispatch(getProductsSuccess(product?.data));
      } else {
        dispatch(getProductsFailure(product?.message));
      }
    }
  }, [product, dispatch]);
  return (
    <div className="md:flex md:justify-center">
      <Toaster />
      <div className="m-4  md:w-[70%] box-border  p-2">
        <div className="grid grid-cols-5">
          <div className="col-start-1 col-span-5 w-full h-auto bg-base-200">
            <div className="md:flex md:justify-between">
              <h3 className="text-1xl p-3 font-semibold my-3">
                PC Builder - Build Your Own Computer - PC Builder BD
              </h3>
              <div>
                <button
                  onClick={notify}
                  className={`btn btn-outline border-dashed border-[#42d91c] hover:border-[#42d91c] my-3 mx-1 bg-transparent hover:bg-[#42d91c] hover:text-white ${
                    x.length === 6 ? "" : "btn-disabled"
                  }`}
                >
                  Completed Build
                </button>
              </div>
            </div>
            <p className=" mt-1 font-semibold bg-[#4c4f4b] p-3 text-white">
              Your Build PC
            </p>
          </div>
        </div>

        {/* damo CPU */}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">CPU</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">CPU</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter((product) => product?.category === `processor`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("CPU")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find(
                        (product) => product?.category === `processor`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo Motherboard */}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Motherboard
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">Motherboard</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter((product) => product?.category === `motherboard`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("Motherboard")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find(
                        (product) => product?.category === `motherboard`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo RAM*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">RAM</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">RAM</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter((product) => product?.category === `ram`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("RAM")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find((product) => product?.category === `ram`)
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo PowerSupplyUnit*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            PowerSupplyUnit
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">PowerSupplyUnit</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter(
                      (product) => product?.category === `power-supply-unit`
                    )
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("PowerSupplyUnit")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find(
                        (product) => product?.category === `power-supply-unit`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo StorageDevice*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Motherboard
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">StorageDevice</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter((product) => product?.category === `storage-device`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("StorageDevice")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find(
                        (product) => product?.category === `storage-device`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo Monitor*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Monitor</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">Monitor</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {addToBuild
                    .filter((product) => product?.category === `monitor`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("Monitor")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                      addToBuild.find(
                        (product) => product?.category === `monitor`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo Other*/}
        <>
          {/* <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Other</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((product, i) => (
                            <CardTable
                              product={product}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">Keyboard</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                
                  {addToBuild
                    .filter((product) => product.category === `Other`)
                    .map((product, i) => (
                      <CardTableAdd product={product} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("Other")}
                    className={`btn btn-xs btn-outline border-dashed hover:bg-[#42d91c] border-[#42d91c]  hover:border-[#42d91c] ${
                         addToBuild.find(
                        (product) => product.category === `Other`
                      )
                        ? "btn-disabled"
                        : ""
                    }`}
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  return { props: { product: data } };
};
