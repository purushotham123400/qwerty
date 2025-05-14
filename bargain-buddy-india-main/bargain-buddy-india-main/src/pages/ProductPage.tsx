
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import RetailerBadge from "@/components/RetailerBadge";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;
  const [priceAlertEmail, setPriceAlertEmail] = useState("");
  const [showPriceAlertForm, setShowPriceAlertForm] = useState(false);

  // Find the lowest price among retailers where the product is in stock
  const lowestPrice = product?.prices
    .filter((p) => p.inStock && typeof p.price === "number")
    .sort((a, b) => Number(a.price) - Number(b.price))[0];

  const handlePriceAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a backend service in a real application
    alert(`Price alert set for ${priceAlertEmail}. You'll be notified when the price drops!`);
    setPriceAlertEmail("");
    setShowPriceAlertForm(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-500">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="bg-white rounded-lg border border-price-guru-border p-6">
          {/* Product Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Product Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-64 h-64 object-contain"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">{product.brand}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                
                <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Best Price Highlight */}
                {lowestPrice && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <RetailerBadge retailer={lowestPrice.retailer} />
                      <span className="text-sm font-medium text-price-guru-green">Best Price</span>
                    </div>
                    <div className="text-3xl font-bold text-price-guru-blue mt-1">
                      ₹{typeof lowestPrice.price === 'number' ? lowestPrice.price.toLocaleString() : lowestPrice.price}
                    </div>
                  </div>
                )}
                
                {/* Price Alert Button */}
                <Button
                  variant="outline"
                  className="flex items-center gap-2 mt-4"
                  onClick={() => setShowPriceAlertForm(!showPriceAlertForm)}
                >
                  <Bell className="h-4 w-4" />
                  Set Price Alert
                </Button>
                
                {/* Price Alert Form */}
                {showPriceAlertForm && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Get notified when the price drops</h3>
                    <form onSubmit={handlePriceAlertSubmit} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                        value={priceAlertEmail}
                        onChange={(e) => setPriceAlertEmail(e.target.value)}
                        required
                      />
                      <Button type="submit">Set Alert</Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Prices Comparison */}
          <div>
            <h2 className="text-xl font-bold mb-4">Compare Prices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.prices.map((price, index) => (
                <PriceCard
                  key={index}
                  retailer={price.retailer}
                  price={price.price}
                  inStock={price.inStock}
                  productUrl={price.productUrl}
                  isBestPrice={lowestPrice && price.retailer === lowestPrice.retailer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
