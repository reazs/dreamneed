export type productT = {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    discount?: number; // Optional discount percentage (e.g., 10 for 10%)
    category: string; // Category of the product (e.g., "Men", "Women", "Kids")
    subCategory?: string; // Optional sub-category (e.g., "Shirts", "Sarees")
    sizes: string[]; // Array of available sizes (e.g., ["S", "M", "L", "XL"])
    colors: string[]; // Array of available colors (e.g., ["Red", "Blue", "Green"])
    materials: string[]; // Array of materials used (e.g., ["Cotton", "Silk"])
    images: string[]; // Array of image URLs for the product
    isFeatured: boolean; // Whether the product is featured on the site
    isNewArrival: boolean; // Whether the product is a new arrival
    isBestSeller: boolean; // Whether the product is a best seller
    stock: number; // Number of items in stock
    ratings: {
      average: number; // Average rating (e.g., 4.5)
      count: number; // Total number of reviews
    };
    reviews: {
      userId: string; // ID of the user who left the review
      comment: string; // Review comment
      rating: number; // Rating given by the user
      date: string; // Date of the review
    }[]; // Array of reviews
    tags?: string[]; // Optional tags for filtering (e.g., ["Festive", "Summer Collection"])
    careInstructions?: string; // Optional care instructions (e.g., "Hand wash only")
    shippingInfo?: string; // Optional shipping details (e.g., "Ships within 2 days")
    brand?: string; // Optional brand name
    sku?: string; // Optional stock-keeping unit
    returnPolicy?: string; // Optional return policy details
    createdAt: string; // Timestamp of when the product was added
    updatedAt?: string; // Timestamp of the last update (optional)
  };
  