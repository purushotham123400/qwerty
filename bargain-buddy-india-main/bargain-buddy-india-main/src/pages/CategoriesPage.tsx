
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

// Icons for categories
const CategoryIcons: Record<string, JSX.Element> = {
  tvs: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="15" x="2" y="3" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="18" x2="12" y2="21"></line>
    </svg>
  ),
  smartphones: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="12" height="20" x="6" y="2" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18.01"></line>
    </svg>
  ),
  headphones: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  ),
  smartwatches: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" x="4" y="4" rx="2" ry="2"></rect>
      <path d="M12 9v3l1.5 1.5"></path>
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <path d="M8 22v-4"></path>
      <path d="M16 22v-4"></path>
    </svg>
  ),
  cameras: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  laptops: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>
  ),
};

const CategoriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        <div className="bg-price-guru-blue text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Electronics Categories</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Browse through our categories to find the best deals on electronics
            </p>
          </div>
        </div>
        
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`}
                className="bg-white rounded-lg border border-price-guru-border overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-price-guru-blue mb-4">
                      {CategoryIcons[category.slug]}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {category.brands.map((brand) => (
                        <span 
                          key={brand} 
                          className="bg-blue-50 text-price-guru-blue px-3 py-1 rounded-full text-sm"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
