
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import HowItWorks from "@/components/HowItWorks";
import FeatureCards from "@/components/FeatureCards";
import PopularSearches from "@/components/PopularSearches";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

// Icons for categories
const CategoryIcons: Record<string, JSX.Element> = {
  tvs: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="15" x="2" y="3" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="18" x2="12" y2="21"></line>
    </svg>
  ),
  smartphones: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="12" height="20" x="6" y="2" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18.01"></line>
    </svg>
  ),
  headphones: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  ),
  smartwatches: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" x="4" y="4" rx="2" ry="2"></rect>
      <path d="M12 9v3l1.5 1.5"></path>
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <path d="M8 22v-4"></path>
      <path d="M16 22v-4"></path>
    </svg>
  ),
  cameras: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  laptops: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>
  ),
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const RetailerLogos = () => (
    <div className="mt-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-xl text-center font-medium mb-8">Compare prices across major retailers</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="bg-price-guru-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
              A
            </div>
            <p className="mt-2 text-sm font-medium">Amazon.in</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-price-guru-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
              F
            </div>
            <p className="mt-2 text-sm font-medium">Flipkart</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-price-guru-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
              C
            </div>
            <p className="mt-2 text-sm font-medium">Croma</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-price-guru-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
              R
            </div>
            <p className="mt-2 text-sm font-medium">Reliance Digital</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-price-guru-blue text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the Best Electronics Deals in India
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Compare prices instantly across Amazon, Flipkart, Croma, and Reliance Digital
          </p>
          
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex">
            <Input
              type="text"
              placeholder="Search for electronics (e.g., iPhone 15, Samsung TV)..."
              className="rounded-l-md py-6 px-4 w-full text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-price-guru-orange hover:bg-orange-600 text-white rounded-r-md rounded-l-none py-6"
            >
              <Search className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Search</span>
            </Button>
          </form>
          
          <PopularSearches />
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={CategoryIcons[category.slug]}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Logos Section */}
      <RetailerLogos />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <FeatureCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-price-guru-blue text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Start saving on your electronics purchases today
          </h2>
          <p className="text-xl mb-8">
            Compare prices across major retailers and find the best deals on your favorite electronics
          </p>
          <Link
            to="/categories"
            className="inline-block bg-price-guru-orange hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition"
          >
            Browse Categories
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
