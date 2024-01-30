import { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function BookCard({ book }) {
  const { title, img, author, rating, favorite, price } = book;
  const [isFavorite, setIsFavorite] = useState(favorite);
  const handleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="h-60" src={img} alt="book name" />
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{title}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>

          <div className="flex items-center space-x-1">
            <span className="text-xs lg:text-sm">({rating} Star)</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
            <FaShoppingCart />
            Add to Cart
          </button>
          <button
            className={`${
              isFavorite
                ? "bg-red-300/[40%]  hover:bg-[#1C4336]/[24%]"
                : "bg-[#1C4336]/[14%] hover:bg-red-300/[40%]"
            } flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all lg:py-1.5`}
            onClick={() => handleFavorite()}
          >
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            Favorite 
          </button>
        </div>
      </div>
    </div>
  );
}
