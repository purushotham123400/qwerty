
import RetailerBadge from "./RetailerBadge";

interface PriceCardProps {
  retailer: 'Amazon.in' | 'Flipkart' | 'Croma' | 'Reliance Digital';
  price: number | string;
  inStock: boolean;
  productUrl: string;
  isBestPrice?: boolean;
}

const PriceCard = ({ retailer, price, inStock, productUrl, isBestPrice = false }: PriceCardProps) => {
  return (
    <div className={`p-4 rounded-lg ${isBestPrice ? 'bg-green-50 border border-green-200' : 'bg-white border border-price-guru-border'}`}>
      <div className="flex items-center justify-between mb-3">
        <RetailerBadge retailer={retailer} />
        {isBestPrice && (
          <span className="text-xs font-medium text-price-guru-green bg-green-100 px-2 py-0.5 rounded">
            Best Price
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center mb-4">
        {inStock ? (
          <div className="font-bold text-xl">₹{typeof price === 'number' ? price.toLocaleString() : price}</div>
        ) : (
          <div className="text-gray-500">Out of stock</div>
        )}
        
        <div className="text-xs text-gray-500">
          {inStock ? "In Stock" : "Unavailable"}
        </div>
      </div>
      
      <a 
        href={productUrl}
        target="_blank"
        rel="noopener noreferrer" 
        className={`block w-full text-center py-2 px-4 rounded font-medium text-sm ${
          inStock 
            ? 'bg-price-guru-orange hover:bg-orange-600 text-white' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        onClick={(e) => !inStock && e.preventDefault()}
      >
        {inStock ? "Visit Store" : "Unavailable"}
      </a>
    </div>
  );
};

export default PriceCard;
