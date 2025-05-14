
import { Link } from "react-router-dom";

interface RetailerPrice {
  retailer: string;
  price: number | string;
  inStock: boolean;
}

interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  prices: RetailerPrice[];
}

const ProductCard = ({
  id,
  title,
  brand,
  category,
  image,
  description,
  prices,
}: ProductCardProps) => {
  // Find the lowest price among retailers where the item is in stock
  const lowestPrice = prices
    .filter((p) => p.inStock && typeof p.price === "number")
    .sort((a, b) => Number(a.price) - Number(b.price))[0];

  return (
    <Link to={`/product/${id}`} className="block">
      <div className="bg-white rounded-lg border border-price-guru-border overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <img src={image} alt={title} className="w-24 h-24 object-contain" />
            <div>
              <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
              <div className="text-sm text-gray-500">
                {brand} | {category}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <div>
              {lowestPrice ? (
                <>
                  <p className="text-sm text-gray-500">Best price at {lowestPrice.retailer}</p>
                  <p className="font-semibold text-price-guru-blue">₹{lowestPrice.price.toLocaleString()}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">Check availability</p>
              )}
            </div>
            <div className="px-3 py-1 bg-price-guru-orange rounded text-white text-sm">
              Compare
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
