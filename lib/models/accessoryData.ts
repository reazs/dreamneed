import { AccessoryT } from "@/types";

export const accessories: AccessoryT[] = [
  {
    id: "acc001",
    name: "Elegant Pearl Necklace",
    description: "A timeless 18-inch freshwater pearl necklace with a 14k gold clasp.",
    price: 12999.99,
    discount: 10,
    category: "Jewelry",
    subCategory: "Necklaces",
    materials: ["Freshwater Pearls", "14k Gold"],
    images: ["/potter-1.jpg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    stock: 50,
    ratings: {
      average: 4.8,
      count: 120
    },
    reviews: [
      {
        userId: "user123",
        comment: "Absolutely beautiful! The pearls are high quality and the gold clasp is secure.",
        rating: 5,
        date: "2023-05-15"
      }
    ],
    tags: ["Elegant", "Wedding", "Gift"],
    careInstructions: "Clean with a soft, damp cloth. Avoid harsh chemicals.",
    brand: "LuxeJewels",
    sku: "PRLNCK001",
    dimensions: {
      length: 45.72, // 18 inches in cm
      width: 0.8,
      height: 0.8,
      unit: "cm"
    },
    weight: {
      value: 35,
      unit: "g"
    },
    warranty: "1 year manufacturer warranty",
    isCustomizable: false,
    occasion: ["Wedding", "Formal", "Special Occasion"],
    style: "Classic",
    gender: "Women",
    ageGroup: "Adult",
    createdAt: "2023-01-10T09:00:00Z",
    updatedAt: "2023-05-20T14:30:00Z"
  },
  {
    id: "acc002",
    name: "Leather Messenger Bag",
    description: "Handcrafted full-grain leather messenger bag with adjustable strap and multiple pockets.",
    price: 8999.99,
    category: "Bags",
    subCategory: "Messenger Bags",
    materials: ["Full-grain Leather", "Brass Hardware"],
    images: ["/potter-2.jpg?height=300&width=300", "/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    stock: 30,
    ratings: {
      average: 4.6,
      count: 45
    },
    reviews: [
      {
        userId: "user456",
        comment: "Great quality bag, perfect for work and travel.",
        rating: 5,
        date: "2023-06-02"
      }
    ],
    tags: ["Business", "Travel", "Durable"],
    careInstructions: "Apply leather conditioner every 3-6 months.",
    brand: "UrbanCarry",
    sku: "LTHRMBG002",
    dimensions: {
      length: 40,
      width: 30,
      height: 12,
      unit: "cm"
    },
    weight: {
      value: 1200,
      unit: "g"
    },
    adjustable: true,
    warranty: "5 year limited warranty",
    isCustomizable: true,
    occasion: ["Business", "Casual", "Travel"],
    style: "Modern",
    gender: "Unisex",
    ageGroup: "Adult",
    createdAt: "2023-05-01T10:15:00Z"
  },
  {
    id: "acc003",
    name: "Smart Watch Band",
    description: "Compatible with popular smartwatches, this adjustable silicone band is perfect for sports and everyday wear.",
    price: 1499.99,
    discount: 15,
    category: "Tech Accessories",
    subCategory: "Watch Bands",
    materials: ["Silicone", "Stainless Steel"],
    images: ["/potter-3.jpg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    stock: 200,
    ratings: {
      average: 4.4,
      count: 310
    },
    reviews: [
      {
        userId: "user789",
        comment: "Comfortable and durable. Great for workouts!",
        rating: 4,
        date: "2023-06-10"
      }
    ],
    tags: ["Sports", "Fitness", "Wearable Tech"],
    careInstructions: "Rinse with water after exposure to sweat or saltwater.",
    brand: "TechFit",
    sku: "SMWBNDSIL003",
    dimensions: {
      length: 22,
      width: 2.2,
      height: 0.3,
      unit: "cm"
    },
    weight: {
      value: 22,
      unit: "g"
    },
    adjustable: true,
    compatibility: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit Versa"],
    warranty: "1 year warranty against defects",
    isCustomizable: false,
    occasion: ["Sports", "Casual", "Everyday"],
    style: "Sporty",
    gender: "Unisex",
    ageGroup: "Teen, Adult",
    createdAt: "2023-04-15T08:30:00Z",
    updatedAt: "2023-06-12T11:45:00Z"
  },
  {
    id: "acc004",
    name: "Vintage-Inspired Sunglasses",
    description: "Retro round sunglasses with UV400 protection and polarized lenses.",
    price: 3999.99,
    category: "Eyewear",
    subCategory: "Sunglasses",
    materials: ["Acetate", "Metal"],
    images: ["/potter-4.png?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
    stock: 75,
    ratings: {
      average: 4.2,
      count: 68
    },
    reviews: [
      {
        userId: "user101",
        comment: "Love the vintage look! Comfortable to wear all day.",
        rating: 4,
        date: "2023-05-28"
      }
    ],
    tags: ["Vintage", "UV Protection", "Polarized"],
    careInstructions: "Clean with the provided microfiber cloth. Avoid using harsh chemicals.",
    brand: "RetroVision",
    sku: "VNTGSNGLS004",
    dimensions: {
      length: 14.5,
      width: 5.2,
      height: 4.8,
      unit: "cm"
    },
    weight: {
      value: 28,
      unit: "g"
    },
    warranty: "2 year warranty on frame and lenses",
    isCustomizable: false,
    occasion: ["Outdoor", "Beach", "Everyday"],
    style: "Vintage",
    gender: "Unisex",
    ageGroup: "Adult",
    createdAt: "2023-03-20T13:00:00Z",
    updatedAt: "2023-05-30T09:15:00Z"
  },
  {
    id: "acc005",
    name: "Handcrafted Leather Wallet",
    description: "Slim bifold wallet made from premium Italian leather with RFID blocking technology.",
    price: 2499.99,
    category: "Leather Goods",
    subCategory: "Wallets",
    materials: ["Italian Leather", "RFID Blocking Fabric"],
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    stock: 100,
    ratings: {
      average: 4.9,
      count: 230
    },
    reviews: [
      {
        userId: "user202",
        comment: "Excellent craftsmanship and the RFID protection gives peace of mind.",
        rating: 5,
        date: "2023-06-05"
      }
    ],
    tags: ["RFID Blocking", "Slim", "Gift"],
    careInstructions: "Wipe clean with a damp cloth and condition leather every 6 months.",
    brand: "ArtisanLeather",
    sku: "LTHRWLT005",
    dimensions: {
      length: 11.5,
      width: 9,
      height: 1,
      unit: "cm"
    },
    weight: {
      value: 85,
      unit: "g"
    },
    warranty: "Lifetime warranty against defects in materials and workmanship",
    isCustomizable: true,
    occasion: ["Business", "Casual", "Gift"],
    style: "Classic",
    gender: "Men",
    ageGroup: "Adult",
    createdAt: "2022-11-01T11:30:00Z",
    updatedAt: "2023-06-07T16:20:00Z"
  }
];

