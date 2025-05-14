
import { Link } from "react-router-dom";

const PopularSearches = () => {
  const searches = [
    "iPhone 15 Pro",
    "Samsung S24",
    "MacBook Air",
    "Sony PS5",
    "Samsung TV",
    "OnePlus 12",
    "Noise Smartwatch",
  ];

  return (
    <div className="mt-6">
      <p className="text-white mb-3">Popular searches:</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <Link
            key={search}
            to={`/search?q=${encodeURIComponent(search)}`}
            className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition"
          >
            {search}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
