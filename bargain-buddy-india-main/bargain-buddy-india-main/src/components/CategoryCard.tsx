
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const CategoryCard = ({ title, description, icon, slug }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className="block">
      <div className="bg-white p-6 rounded-lg border border-price-guru-border hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-price-guru-blue">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-price-guru-blue">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
