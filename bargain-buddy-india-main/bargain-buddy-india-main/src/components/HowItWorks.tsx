
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Search Products",
      description: "Enter the name or category of the electronics product you're looking for",
    },
    {
      number: 2,
      title: "Compare Prices",
      description: "See real-time prices from Amazon, Flipkart, Croma, and Reliance Digital",
    },
    {
      number: 3,
      title: "Buy at Best Price",
      description: "Click through to the retailer with the best deal and make your purchase",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How Price Guru Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-price-guru-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-3">
            Save time and money by comparing prices in one place
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Price Guru helps you find the best electronics deals across major Indian retailers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
