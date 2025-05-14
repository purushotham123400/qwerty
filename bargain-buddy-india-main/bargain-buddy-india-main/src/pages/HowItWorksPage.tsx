
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import FeatureCards from "@/components/FeatureCards";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        <div className="bg-price-guru-blue text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">How Price Guru Works</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Save time and money by comparing electronics prices across major Indian retailers
            </p>
          </div>
        </div>
        
        <HowItWorks />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <FeatureCards />
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-price-guru-border">
                <h3 className="text-xl font-semibold mb-2">How does Price Guru get the prices?</h3>
                <p className="text-gray-600">
                  We regularly scan the websites of major retailers like Amazon.in, Flipkart, Croma, and Reliance Digital to collect the latest prices for electronics products.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-price-guru-border">
                <h3 className="text-xl font-semibold mb-2">Are the prices always up-to-date?</h3>
                <p className="text-gray-600">
                  We update our prices multiple times a day to ensure you get the most accurate information. However, prices can change rapidly, so we always link you directly to the retailer for the final checkout.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-price-guru-border">
                <h3 className="text-xl font-semibold mb-2">How do price alerts work?</h3>
                <p className="text-gray-600">
                  When you set a price alert for a product, we'll monitor the price across all retailers and send you an email notification when it drops to your target price or lower.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-price-guru-border">
                <h3 className="text-xl font-semibold mb-2">Do you include shipping costs in the price comparison?</h3>
                <p className="text-gray-600">
                  The prices shown are the base prices listed by retailers. Shipping costs may vary depending on your location and the retailer's policies. We recommend checking the final price on the retailer's website before purchasing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
