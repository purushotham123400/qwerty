
import { ShoppingCart, Search, Filter, Bell, Tag } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      title: "Dedicated Comparison View",
      description: "See all prices from major retailers in one place",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Custom Price Alerts",
      description: "Get notified when products drop to your target price",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Focus on Specific Product Category",
      description: "Browse products by category for better comparison",
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Filter by Discounts / Coupons",
      description: "Find the best deals with additional savings",
      icon: <Tag className="h-6 w-6" />,
    },
    {
      title: "Direct Redirect to Product Page",
      description: "Go directly to the retailer with the best price",
      icon: <Filter className="h-6 w-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg border border-price-guru-border"
        >
          <div className="bg-blue-50 p-3 rounded-full w-fit mb-4 text-price-guru-blue">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
