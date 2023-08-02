/* eslint-disable @next/next/no-img-element */
const CardTableAdd = ({ product }) => {
  const { img, title, price } = product;
  return (
    <>
      <div className="w-[600px] flex gap-3">
        <div>
          <img className="w-14" src={img} alt="" />
        </div>
        <div>
          <p>{title}</p>
          <p className="text-xl font-semibold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default CardTableAdd;
