const products = [
  {
    id: "1",
    image: "images/toyota-corolla.jpg",
    name: "Toyota Corolla",
    rating: { stars: 4.5, count: 120 },
    priceRupees: 2000000,
    keywords: ["Toyota", "Corolla", "sedan", "reliable"],
    transmission: "Automatic",
    engine: "1.8L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Sunroof",
        "Leatherette Seats",
        "Blind Spot Monitor",
        "Rear View Camera",
        "Front Seat Heaters",
      ],
    },
  },
  {
    id: "2",
    image: "images/honda-civic.jpg",
    name: "Honda Civic",
    rating: { stars: 4.7, count: 140 },
    priceRupees: 2200000,
    keywords: ["Honda", "Civic", "sedan", "fuel efficient"],
    transmission: "Manual",
    engine: "2.0L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Adaptive Cruise Control",
        "Lane Keep Assist",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "3",
    image: "images/ford-f150.jpg",
    name: "Ford F-150",
    rating: { stars: 4.6, count: 200 },
    priceRupees: 3000000,
    keywords: ["Ford", "F-150", "pickup", "utility"],
    transmission: "Automatic",
    engine: "3.5L V6",
    driveType: "Four-Wheel Drive",
    bodyType: "Pickup",
    features: {
      highlightIcons: [
        "Tow Package",
        "Navigation System",
        "Rear View Camera",
        "Bluetooth",
      ],
    },
  },
  {
    id: "4",
    image: "images/chevrolet-silverado.jpg",
    name: "Chevrolet Silverado",
    rating: { stars: 4.5, count: 180 },
    priceRupees: 3200000,
    keywords: ["Chevrolet", "Silverado", "pickup", "powerful"],
    transmission: "Automatic",
    engine: "5.3L V8",
    driveType: "Four-Wheel Drive",
    bodyType: "Pickup",
    features: {
      highlightIcons: [
        "Remote Start",
        "Leather Seats",
        "Blind Spot Monitor",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "5",
    image: "images/tesla-model-3.jpg",
    name: "Tesla Model 3",
    rating: { stars: 4.8, count: 250 },
    priceRupees: 5000000,
    keywords: ["Tesla", "Model 3", "electric", "sedan"],
    transmission: "Automatic",
    engine: "Electric",
    driveType: "Rear Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Autopilot",
        "Full Self-Driving Capability",
        "Rear View Camera",
        "Heated Seats",
      ],
    },
  },
  {
    id: "6",
    image: "images/nissan-altima.jpg",
    name: "Nissan Altima",
    rating: { stars: 4.4, count: 130 },
    priceRupees: 2300000,
    keywords: ["Nissan", "Altima", "sedan", "spacious"],
    transmission: "CVT",
    engine: "2.5L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Android Auto",
        "Rear View Camera",
        "Heated Seats",
      ],
    },
  },
  {
    id: "7",
    image: "images/bmw-3-series.jpg",
    name: "BMW 3 Series",
    rating: { stars: 4.7, count: 160 },
    priceRupees: 4500000,
    keywords: ["BMW", "3 Series", "luxury", "sedan"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Rear Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Sunroof",
        "Leather Seats",
        "Premium Sound System",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "8",
    image: "images/audi-a4.jpg",
    name: "Audi A4",
    rating: { stars: 4.6, count: 145 },
    priceRupees: 4700000,
    keywords: ["Audi", "A4", "luxury", "sedan"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Sunroof",
        "Navigation",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "9",
    image: "images/mercedes-c-class.jpg",
    name: "Mercedes-Benz C-Class",
    rating: { stars: 4.8, count: 150 },
    priceRupees: 5500000,
    keywords: ["Mercedes-Benz", "C-Class", "luxury", "sedan"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Rear Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Sunroof",
        "Rear View Camera",
        "Advanced Safety Features",
      ],
    },
  },
  {
    id: "10",
    image: "images/hyundai-sonata.jpg",
    name: "Hyundai Sonata",
    rating: { stars: 4.3, count: 110 },
    priceRupees: 2100000,
    keywords: ["Hyundai", "Sonata", "sedan", "affordable"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Android Auto",
        "Rear View Camera",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "11",
    image: "images/kia-optima.jpg",
    name: "Kia Optima",
    rating: { stars: 4.4, count: 105 },
    priceRupees: 2200000,
    keywords: ["Kia", "Optima", "sedan", "value"],
    transmission: "Automatic",
    engine: "2.4L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Heated Seats",
        "Blind Spot Monitor",
        "Rear View Camera",
        "Android Auto",
      ],
    },
  },
  {
    id: "12",
    image: "images/toyota-camry.jpg",
    name: "Toyota Camry",
    rating: { stars: 4.7, count: 150 },
    priceRupees: 2400000,
    keywords: ["Toyota", "Camry", "sedan", "popular"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Rear View Camera",
        "Leather Seats",
        "Sunroof",
        "Heated Seats",
      ],
    },
  },
  {
    id: "13",
    image: "images/honda-accord.jpg",
    name: "Honda Accord",
    rating: { stars: 4.6, count: 160 },
    priceRupees: 2500000,
    keywords: ["Honda", "Accord", "sedan", "spacious"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Sunroof",
        "Rear View Camera",
        "Lane Keep Assist",
      ],
    },
  },
  {
    id: "14",
    image: "images/ford-mustang.jpg",
    name: "Ford Mustang",
    rating: { stars: 4.8, count: 180 },
    priceRupees: 3500000,
    keywords: ["Ford", "Mustang", "sports", "coupe"],
    transmission: "Manual",
    engine: "5.0L V8",
    driveType: "Rear Wheel Drive",
    bodyType: "Coupe",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Performance Package",
        "Rear View Camera",
        "Bluetooth",
      ],
    },
  },
  {
    id: "15",
    image: "images/chevrolet-camaro.jpg",
    name: "Chevrolet Camaro",
    rating: { stars: 4.7, count: 175 },
    priceRupees: 3600000,
    keywords: ["Chevrolet", "Camaro", "sports", "coupe"],
    transmission: "Automatic",
    engine: "6.2L V8",
    driveType: "Rear Wheel Drive",
    bodyType: "Coupe",
    features: {
      highlightIcons: [
        "Sunroof",
        "Leather Seats",
        "Navigation System",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "16",
    image: "images/subaru-wrx.jpg",
    name: "Subaru WRX",
    rating: { stars: 4.5, count: 140 },
    priceRupees: 2800000,
    keywords: ["Subaru", "WRX", "sports", "sedan"],
    transmission: "Manual",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "All-Wheel Drive",
        "Turbocharged Engine",
        "Rear View Camera",
        "Bluetooth",
      ],
    },
  },
  {
    id: "17",
    image: "images/jeep-wrangler.jpg",
    name: "Jeep Wrangler",
    rating: { stars: 4.6, count: 190 },
    priceRupees: 3000000,
    keywords: ["Jeep", "Wrangler", "SUV", "off-road"],
    transmission: "Automatic",
    engine: "3.6L V6",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Off-Road Capability",
        "Removable Roof",
        "Bluetooth",
        "Navigation",
      ],
    },
  },
  {
    id: "18",
    image: "images/toyota-highlander.jpg",
    name: "Toyota Highlander",
    rating: { stars: 4.5, count: 140 },
    priceRupees: 3500000,
    keywords: ["Toyota", "Highlander", "SUV", "family"],
    transmission: "Automatic",
    engine: "3.5L V6",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Third Row Seating",
        "Blind Spot Monitor",
        "Apple CarPlay",
        "Adaptive Cruise Control",
      ],
    },
  },
  {
    id: "19",
    image: "images/honda-pilot.jpg",
    name: "Honda Pilot",
    rating: { stars: 4.5, count: 125 },
    priceRupees: 3600000,
    keywords: ["Honda", "Pilot", "SUV", "family"],
    transmission: "Automatic",
    engine: "3.5L V6",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Apple CarPlay",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "20",
    image: "images/ford-escape.jpg",
    name: "Ford Escape",
    rating: { stars: 4.4, count: 100 },
    priceRupees: 2700000,
    keywords: ["Ford", "Escape", "SUV", "compact"],
    transmission: "Automatic",
    engine: "1.5L EcoBoost V4",
    driveType: "Front Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Hands-Free Liftgate",
        "Ford Co-Pilot360",
        "Apple CarPlay",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "21",
    image: "images/mazda-cx-5.jpg",
    name: "Mazda CX-5",
    rating: { stars: 4.5, count: 110 },
    priceRupees: 2800000,
    keywords: ["Mazda", "CX-5", "SUV", "compact"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Leatherette Seats",
        "Blind Spot Monitor",
        "Apple CarPlay",
        "Navigation",
      ],
    },
  },
  {
    id: "22",
    image: "images/subaru-outback.jpg",
    name: "Subaru Outback",
    rating: { stars: 4.6, count: 120 },
    priceRupees: 3200000,
    keywords: ["Subaru", "Outback", "SUV", "all-wheel drive"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "All-Wheel Drive",
        "Apple CarPlay",
        "Adaptive Cruise Control",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "23",
    image: "images/toyota-rav4.jpg",
    name: "Toyota RAV4",
    rating: { stars: 4.7, count: 140 },
    priceRupees: 3400000,
    keywords: ["Toyota", "RAV4", "SUV", "popular"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Adaptive Cruise Control",
        "Blind Spot Monitor",
        "Apple CarPlay",
        "Heated Seats",
      ],
    },
  },
  {
    id: "24",
    image: "images/honda-crv.jpg",
    name: "Honda CR-V",
    rating: { stars: 4.6, count: 130 },
    priceRupees: 3300000,
    keywords: ["Honda", "CR-V", "SUV", "compact"],
    transmission: "Automatic",
    engine: "1.5L Turbo V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Apple CarPlay",
        "Adaptive Cruise Control",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "25",
    image: "images/volkswagen-jetta.jpg",
    name: "Volkswagen Jetta",
    rating: { stars: 4.3, count: 100 },
    priceRupees: 2200000,
    keywords: ["Volkswagen", "Jetta", "sedan", "German"],
    transmission: "Automatic",
    engine: "1.4L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Rear View Camera",
        "Blind Spot Monitor",
        "Heated Seats",
      ],
    },
  },
  {
    id: "26",
    image: "images/chevrolet-traverse.jpg",
    name: "Chevrolet Traverse",
    rating: { stars: 4.5, count: 115 },
    priceRupees: 3700000,
    keywords: ["Chevrolet", "Traverse", "SUV", "family"],
    transmission: "Automatic",
    engine: "3.6L V6",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Apple CarPlay",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "27",
    image: "images/jeep-grand-cherokee.jpg",
    name: "Jeep Grand Cherokee",
    rating: { stars: 4.6, count: 140 },
    priceRupees: 4000000,
    keywords: ["Jeep", "Grand Cherokee", "SUV", "luxury"],
    transmission: "Automatic",
    engine: "3.6L V6",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Navigation",
        "Blind Spot Monitor",
        "Adaptive Cruise Control",
      ],
    },
  },
  {
    id: "28",
    image: "images/mercedes-gle.jpg",
    name: "Mercedes-Benz GLE",
    rating: { stars: 4.8, count: 150 },
    priceRupees: 7000000,
    keywords: ["Mercedes-Benz", "GLE", "SUV", "luxury"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Sunroof",
        "Navigation",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "29",
    image: "images/bmw-x5.jpg",
    name: "BMW X5",
    rating: { stars: 4.7, count: 145 },
    priceRupees: 6900000,
    keywords: ["BMW", "X5", "SUV", "luxury"],
    transmission: "Automatic",
    engine: "3.0L I6",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Navigation",
        "Sunroof",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "30",
    image: "images/audi-q5.jpg",
    name: "Audi Q5",
    rating: { stars: 4.6, count: 135 },
    priceRupees: 6800000,
    keywords: ["Audi", "Q5", "SUV", "luxury"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Leather Seats",
        "Navigation",
        "Sunroof",
        "Adaptive Cruise Control",
      ],
    },
  },
  {
    id: "31",
    image: "images/tesla-model-y.jpg",
    name: "Tesla Model Y",
    rating: { stars: 4.9, count: 200 },
    priceRupees: 7500000,
    keywords: ["Tesla", "Model Y", "electric", "SUV"],
    transmission: "Automatic",
    engine: "Electric",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: ["Autopilot", "Glass Roof", "Bluetooth", "Navigation"],
    },
  },
  {
    id: "32",
    image: "images/toyota-4runner.jpg",
    name: "Toyota 4Runner",
    rating: { stars: 4.5, count: 120 },
    priceRupees: 4200000,
    keywords: ["Toyota", "4Runner", "SUV", "off-road"],
    transmission: "Automatic",
    engine: "4.0L V6",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Off-Road Capability",
        "Navigation",
        "Bluetooth",
        "Roof Rack",
      ],
    },
  },
  {
    id: "33",
    image: "images/honda-fit.jpg",
    name: "Honda Fit",
    rating: { stars: 4.4, count: 110 },
    priceRupees: 1600000,
    keywords: ["Honda", "Fit", "compact", "hatchback"],
    transmission: "Automatic",
    engine: "1.5L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Hatchback",
    features: {
      highlightIcons: [
        "Compact Size",
        "Rear View Camera",
        "Bluetooth",
        "Navigation",
      ],
    },
  },
  {
    id: "34",
    image: "images/ford-explorer.jpg",
    name: "Ford Explorer",
    rating: { stars: 4.5, count: 130 },
    priceRupees: 4300000,
    keywords: ["Ford", "Explorer", "SUV", "family"],
    transmission: "Automatic",
    engine: "2.3L EcoBoost V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Apple CarPlay",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "35",
    image: "images/chevrolet-equinox.jpg",
    name: "Chevrolet Equinox",
    rating: { stars: 4.4, count: 125 },
    priceRupees: 2900000,
    keywords: ["Chevrolet", "Equinox", "SUV", "compact"],
    transmission: "Automatic",
    engine: "1.5L Turbo V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Bluetooth",
        "Rear View Camera",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "36",
    image: "images/kia-sportage.jpg",
    name: "Kia Sportage",
    rating: { stars: 4.4, count: 120 },
    priceRupees: 2500000,
    keywords: ["Kia", "Sportage", "SUV", "affordable"],
    transmission: "Automatic",
    engine: "2.4L V4",
    driveType: "Front Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Bluetooth",
        "Apple CarPlay",
        "Rear View Camera",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "37",
    image: "images/hyundai-tucson.jpg",
    name: "Hyundai Tucson",
    rating: { stars: 4.4, count: 115 },
    priceRupees: 2600000,
    keywords: ["Hyundai", "Tucson", "SUV", "compact"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Bluetooth",
        "Rear View Camera",
        "Apple CarPlay",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "38",
    image: "images/ford-bronco.jpg",
    name: "Ford Bronco",
    rating: { stars: 4.7, count: 150 },
    priceRupees: 4500000,
    keywords: ["Ford", "Bronco", "SUV", "off-road"],
    transmission: "Automatic",
    engine: "2.7L EcoBoost V6",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Off-Road Capability",
        "Navigation",
        "Removable Roof",
        "Bluetooth",
      ],
    },
  },
  {
    id: "39",
    image: "images/nissan-rogue.jpg",
    name: "Nissan Rogue",
    rating: { stars: 4.4, count: 125 },
    priceRupees: 2700000,
    keywords: ["Nissan", "Rogue", "SUV", "compact"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Rear View Camera",
        "Blind Spot Monitor",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "40",
    image: "images/toyota-sienna.jpg",
    name: "Toyota Sienna",
    rating: { stars: 4.6, count: 110 },
    priceRupees: 4500000,
    keywords: ["Toyota", "Sienna", "minivan", "family"],
    transmission: "Automatic",
    engine: "2.5L V4",
    driveType: "All-Wheel Drive",
    bodyType: "Minivan",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Dual Sliding Doors",
        "Rear Entertainment System",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "41",
    image: "images/honda-odyssey.jpg",
    name: "Honda Odyssey",
    rating: { stars: 4.6, count: 120 },
    priceRupees: 4400000,
    keywords: ["Honda", "Odyssey", "minivan", "family"],
    transmission: "Automatic",
    engine: "3.5L V6",
    driveType: "Front Wheel Drive",
    bodyType: "Minivan",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Rear Entertainment System",
        "Blind Spot Monitor",
        "Adaptive Cruise Control",
      ],
    },
  },
  {
    id: "42",
    image: "images/chrysler-pacifica.jpg",
    name: "Chrysler Pacifica",
    rating: { stars: 4.5, count: 115 },
    priceRupees: 4600000,
    keywords: ["Chrysler", "Pacifica", "minivan", "luxury"],
    transmission: "Automatic",
    engine: "3.6L V6",
    driveType: "Front Wheel Drive",
    bodyType: "Minivan",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Dual Sliding Doors",
        "Apple CarPlay",
        "Blind Spot Monitor",
      ],
    },
  },
  {
    id: "43",
    image: "images/chevrolet-suburban.jpg",
    name: "Chevrolet Suburban",
    rating: { stars: 4.6, count: 110 },
    priceRupees: 6000000,
    keywords: ["Chevrolet", "Suburban", "SUV", "large"],
    transmission: "Automatic",
    engine: "5.3L V8",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Apple CarPlay",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "44",
    image: "images/ford-expedition.jpg",
    name: "Ford Expedition",
    rating: { stars: 4.5, count: 100 },
    priceRupees: 6100000,
    keywords: ["Ford", "Expedition", "SUV", "large"],
    transmission: "Automatic",
    engine: "3.5L EcoBoost V6",
    driveType: "Four-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Adaptive Cruise Control",
        "Rear View Camera",
      ],
    },
  },
  {
    id: "45",
    image: "images/nissan-sentra.jpg",
    name: "Nissan Sentra",
    rating: { stars: 4.3, count: 90 },
    priceRupees: 1800000,
    keywords: ["Nissan", "Sentra", "sedan", "compact"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Rear View Camera",
        "Bluetooth",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "46",
    image: "images/hyundai-elantra.jpg",
    name: "Hyundai Elantra",
    rating: { stars: 4.4, count: 95 },
    priceRupees: 1900000,
    keywords: ["Hyundai", "Elantra", "sedan", "compact"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Bluetooth",
        "Rear View Camera",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "47",
    image: "images/volkswagen-atlas.jpg",
    name: "Volkswagen Atlas",
    rating: { stars: 4.5, count: 105 },
    priceRupees: 5000000,
    keywords: ["Volkswagen", "Atlas", "SUV", "family"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Third Row Seating",
        "Bluetooth",
        "Apple CarPlay",
      ],
    },
  },
  {
    id: "48",
    image: "images/mazda-mazda3.jpg",
    name: "Mazda Mazda3",
    rating: { stars: 4.4, count: 115 },
    priceRupees: 2100000,
    keywords: ["Mazda", "Mazda3", "sedan", "compact"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "Front Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Bluetooth",
        "Rear View Camera",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "49",
    image: "images/chevrolet-blazer.jpg",
    name: "Chevrolet Blazer",
    rating: { stars: 4.5, count: 100 },
    priceRupees: 3100000,
    keywords: ["Chevrolet", "Blazer", "SUV", "compact"],
    transmission: "Automatic",
    engine: "2.0L Turbo V4",
    driveType: "All-Wheel Drive",
    bodyType: "SUV",
    features: {
      highlightIcons: [
        "Apple CarPlay",
        "Bluetooth",
        "Rear View Camera",
        "Spacious Interior",
      ],
    },
  },
  {
    id: "50",
    image: "images/audi-a6.jpg",
    name: "Audi A6",
    rating: { stars: 4.8, count: 130 },
    priceRupees: 7000000,
    keywords: ["Audi", "A6", "luxury", "sedan"],
    transmission: "Automatic",
    engine: "2.0L V4",
    driveType: "All-Wheel Drive",
    bodyType: "Sedan",
    features: {
      highlightIcons: [
        "Spacious Interior",
        "Apple CarPlay",
        "Bluetooth",
        "Navigation",
      ],
    },
  },
];
