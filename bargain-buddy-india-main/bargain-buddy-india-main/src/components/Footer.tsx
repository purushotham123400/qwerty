
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-price-guru-blue text-white py-8 px-4 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Price Guru</h3>
            <p className="text-gray-300">
              Compare prices for electronics across major Indian retailers and find the best deals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/tvs" className="text-gray-300 hover:text-white">
                  TVs
                </Link>
              </li>
              <li>
                <Link to="/category/smartphones" className="text-gray-300 hover:text-white">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/category/laptops" className="text-gray-300 hover:text-white">
                  Laptops
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Price Guru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
