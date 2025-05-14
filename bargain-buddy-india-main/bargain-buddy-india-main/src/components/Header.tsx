
import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-price-guru-blue py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-price-guru-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            PG
          </div>
          <span className="text-white text-xl font-bold">Price Guru</span>
        </Link>

        <form onSubmit={handleSearch} className="flex w-full md:w-2/3 max-w-3xl">
          <Input
            type="text"
            placeholder="Search for electronics (e.g., iPhone 15, Samsung TV)..."
            className="rounded-l-md py-2 px-4 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            type="submit" 
            className="bg-price-guru-orange hover:bg-orange-600 text-white rounded-r-md rounded-l-none"
          >
            <Search className="h-5 w-5" />
            <span className="ml-2 hidden sm:inline">Search</span>
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
