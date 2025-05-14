
export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  prices: {
    retailer: 'Amazon.in' | 'Flipkart' | 'Croma' | 'Reliance Digital';
    price: number | string;
    inStock: boolean;
    productUrl: string;
  }[];
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  brands: string[];
}

export const categories: Category[] = [
  {
    id: "tvs",
    title: "TVs",
    slug: "tvs",
    description: "Smart TVs from Samsung, Sony, LG",
    brands: ["Samsung", "Sony", "LG"],
  },
  {
    id: "smartphones",
    title: "Smartphones",
    slug: "smartphones",
    description: "Latest phones from Apple, Samsung, Google Pixel",
    brands: ["Apple", "Samsung", "Google"],
  },
  {
    id: "headphones",
    title: "Headphones",
    slug: "headphones",
    description: "Audio from boAt, Sony, JBL",
    brands: ["boAt", "Sony", "JBL"],
  },
  {
    id: "smartwatches",
    title: "Smartwatches",
    slug: "smartwatches",
    description: "Wearables from Samsung, Apple, boAt",
    brands: ["Samsung", "Apple", "boAt"],
  },
  {
    id: "cameras",
    title: "Cameras",
    slug: "cameras",
    description: "Cameras from Nikon, Canon, Sony",
    brands: ["Nikon", "Canon", "Sony"],
  },
  {
    id: "laptops",
    title: "Laptops",
    slug: "laptops",
    description: "Premium laptops from Lenovo, HP, Dell",
    brands: ["Lenovo", "HP", "Dell"],
  },
];

export const products: Product[] = [
  // TVs
  {
    id: "samsung-qn90c-65",
    title: "Samsung Neo QLED QN90C 65-inch 4K Smart TV",
    brand: "Samsung",
    category: "TVs",
    description: "Experience brilliant colors, precise contrast and stunning clarity with Neo Quantum Processor 4K.",
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ua65qn90cakxxl/gallery/in-neo-qled-qn90c-ua65qn90cakxxl-534844058?$650_519_PNG$",
    prices: [
      { retailer: "Amazon.in", price: 189990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 192990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 193990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 195990, inStock: false, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "sony-bravia-xr-65",
    title: "Sony Bravia XR A80L 65-inch 4K OLED TV",
    brand: "Sony",
    category: "TVs",
    description: "Cognitive Processor XR and OLED panel for incredibly realistic picture quality and immersive sound.",
    image: "https://m.media-amazon.com/images/I/81qk13hPX1L._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 259990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 264990, inStock: false, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 257990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 258990, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "lg-oled-c3-65",
    title: "LG OLED C3 65-inch 4K Smart TV",
    brand: "LG",
    category: "TVs",
    description: "α9 Gen6 AI Processor 4K with self-lit OLED pixels for perfect black, infinite contrast and vibrant colors.",
    image: "https://m.media-amazon.com/images/I/814iFRsWEyL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 229990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 224990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 229990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 227990, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  // Smartphones
  {
    id: "iphone-15-pro-max",
    title: "iPhone 15 Pro Max 256GB - Natural Titanium",
    brand: "Apple",
    category: "Smartphones",
    description: "The most advanced iPhone ever with A17 Pro chip, 48MP camera system, and titanium design.",
    image: "https://m.media-amazon.com/images/I/716fvRQpkQL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 156900, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 158900, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: "Out of stock", inStock: false, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 157900, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "samsung-galaxy-s24-ultra",
    title: "Samsung Galaxy S24 Ultra 512GB - Titanium Gray",
    brand: "Samsung",
    category: "Smartphones",
    description: "Featuring Galaxy AI, 200MP camera, 6.8-inch QHD+ Dynamic AMOLED 2X display and Snapdragon 8 Gen 3 processor.",
    image: "https://m.media-amazon.com/images/I/71TjYEltYPL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 134999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 139999, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 136999, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 135999, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "google-pixel-8-pro",
    title: "Google Pixel 8 Pro 256GB - Obsidian",
    brand: "Google",
    category: "Smartphones",
    description: "Google's most advanced smartphone with Tensor G3 processor, 50MP triple camera system and AI-powered features.",
    image: "https://m.media-amazon.com/images/I/71iQ5JUUPNL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 99999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 96999, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 98999, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 97999, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  // Headphones
  {
    id: "boat-rockerz-550",
    title: "boAt Rockerz 550 Wireless Headphones",
    brand: "boAt",
    category: "Headphones",
    description: "Bluetooth v5.0 with 50mm dynamic drivers, 20 hours playback, and physical noise isolation.",
    image: "https://m.media-amazon.com/images/I/61F5SXju-nL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 1999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 1899, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 2099, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 2199, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    category: "Headphones",
    description: "Industry-leading noise cancellation with 8 microphones, 30-hour battery and crystal clear calls.",
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 29990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 27990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 28990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: "Out of stock", inStock: false, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "jbl-tour-one",
    title: "JBL Tour One Wireless Headphones",
    brand: "JBL",
    category: "Headphones",
    description: "Adaptive noise cancellation, Hi-Res certified sound, and up to 50 hours of battery life.",
    image: "https://m.media-amazon.com/images/I/71O7afauJSL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 24999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 23999, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 25999, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 24499, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  // Smartwatches
  {
    id: "samsung-galaxy-watch6-classic",
    title: "Samsung Galaxy Watch6 Classic 47mm",
    brand: "Samsung",
    category: "Smartwatches",
    description: "Rotating bezel with Body Composition analysis, Advanced Sleep Coaching and Sapphire Crystal Glass.",
    image: "https://m.media-amazon.com/images/I/616x42bTXVL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 39999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 41999, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 40999, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 39499, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "apple-watch-series-9",
    title: "Apple Watch Series 9 45mm GPS",
    brand: "Apple",
    category: "Smartwatches",
    description: "Featuring S9 chip, Double Tap gesture, Always-On Retina display and advanced health features.",
    image: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 45900, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 44900, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 46900, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 45900, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "boat-wave-call-2",
    title: "boAt Wave Call 2 Smartwatch",
    brand: "boAt",
    category: "Smartwatches",
    description: "1.83\" HD display, Bluetooth calling, 700+ active modes and 10-day battery life.",
    image: "https://m.media-amazon.com/images/I/618mFEP9mTL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 2499, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 2299, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 2599, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 2499, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  // Cameras
  {
    id: "nikon-z8",
    title: "Nikon Z8 Mirrorless Camera",
    brand: "Nikon",
    category: "Cameras",
    description: "45.7MP full-frame sensor, 8K video, in-body stabilization and hybrid phase-detection AF system.",
    image: "https://m.media-amazon.com/images/I/81OaIUfiL5L._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 343995, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 349995, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 346995, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 345995, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "canon-eos-r6-mark-ii",
    title: "Canon EOS R6 Mark II Mirrorless Camera",
    brand: "Canon",
    category: "Cameras",
    description: "24.2MP full-frame sensor, 6K RAW external recording, 40fps burst shooting and Dual Pixel CMOS AF II.",
    image: "https://m.media-amazon.com/images/I/71vJxFBdHWL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 244999, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 249999, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 247999, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 245999, inStock: false, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "sony-a7-iv",
    title: "Sony Alpha 7 IV Mirrorless Camera",
    brand: "Sony",
    category: "Cameras",
    description: "33MP full-frame sensor, 4K 60p video recording, advanced AF performance and creative look options.",
    image: "https://m.media-amazon.com/images/I/51bRSXgzF1L._SL1200_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 221990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 224990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 223990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 225990, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  // Laptops
  {
    id: "lenovo-yoga-9i",
    title: "Lenovo Yoga 9i 14-inch 2-in-1 Laptop",
    brand: "Lenovo",
    category: "Laptops",
    description: "Intel Core i7-1360P, 16GB RAM, 1TB SSD, 4K OLED touchscreen with Bowers & Wilkins speakers.",
    image: "https://m.media-amazon.com/images/I/718+zXWXNVL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 169990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 165990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 171990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 168990, inStock: false, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "hp-spectre-x360",
    title: "HP Spectre x360 14-inch 2-in-1 Laptop",
    brand: "HP",
    category: "Laptops",
    description: "Intel Core i7-1355U, 32GB RAM, 1TB SSD, 3K OLED touchscreen and 4-speaker B&O audio system.",
    image: "https://m.media-amazon.com/images/I/71Hlt-HcHhL._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 179990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 184990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 183990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 181990, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
  {
    id: "dell-xps-13-plus",
    title: "Dell XPS 13 Plus Laptop",
    brand: "Dell",
    category: "Laptops",
    description: "Intel Core i7-1360P, 16GB RAM, 512GB SSD, 3.5K OLED display and edge-to-edge zero-lattice keyboard.",
    image: "https://m.media-amazon.com/images/I/719TKC7Nx7L._SL1500_.jpg",
    prices: [
      { retailer: "Amazon.in", price: 199990, inStock: true, productUrl: "https://www.amazon.in/" },
      { retailer: "Flipkart", price: 198990, inStock: true, productUrl: "https://www.flipkart.com/" },
      { retailer: "Croma", price: 201990, inStock: true, productUrl: "https://www.croma.com/" },
      { retailer: "Reliance Digital", price: 199990, inStock: true, productUrl: "https://www.reliancedigital.in/" },
    ],
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(
    (product) => categories.find((cat) => cat.slug === categorySlug)?.title === product.category
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.brand.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery)
  );
};
