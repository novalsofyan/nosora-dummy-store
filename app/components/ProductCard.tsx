import type { ProductPreview } from "~/types/ProductTypes";
import { Link } from "react-router";

export default function ProductCard({ title, description, price, stock, rating, thumbnail }: ProductPreview) {
  return (
    <div className="flex flex-col w-[160px] md:w-[300px] h-[450px] md:h-[550px] bg-white rounded-md shadow-md p-4 mb-2">
      <img className="w-fit mx-auto mt-2 mb-4 h-[120px] md:h-[150px] rounded-t-md" src={`${thumbnail}`} alt={title} />
      <h1 className="font-bold text-base text-center mb-2">{title}</h1>
      <p className="mb-2 hidden md:block">{description}</p>
      <div className="flex flex-col justify-center grow just">
        <p className="mb-2">Price: ${price}</p>
        <p className="mb-2">Stock: {stock}</p>
        <p className="mb-2">Rating: {rating}</p>
      </div>
      <button className="text-white bg-gray-800 w-fit self-center rounded-md py-2 px-4 cursor-pointer hover:bg-gray-700 transition duration-200">
        <Link
          to={`mailto:novalsofyan.business@gmail.com?subject=Nosora Dummy Store&body=Hello i want to buy ${title}%0A%0AItem Desc:%0A${description}%0A%0APrice: $${price}%0A%0AThanks!`}
        >
          Order via Email
        </Link>
      </button>
    </div>
  );
}
