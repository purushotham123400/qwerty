
const RetailerColors = {
  'Amazon.in': 'bg-yellow-100 text-yellow-800',
  'Flipkart': 'bg-blue-100 text-blue-800',
  'Croma': 'bg-green-100 text-green-800',
  'Reliance Digital': 'bg-red-100 text-red-800',
};

type RetailerBadgeProps = {
  retailer: 'Amazon.in' | 'Flipkart' | 'Croma' | 'Reliance Digital';
  className?: string;
};

const RetailerBadge = ({ retailer, className = '' }: RetailerBadgeProps) => {
  const colorClass = RetailerColors[retailer] || 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} ${className}`}>
      {retailer}
    </span>
  );
};

export default RetailerBadge;
