const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage in Malibu, where you can wake up to the sound of waves and enjoy breathtaking ocean views. Perfect for a relaxing getaway with direct beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of New York City in this stylish and modern loft. Ideal for urban explorers, this space offers easy access to major attractions, restaurants, and nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful cabin located in Aspen. Surrounded by mountains and fresh air, it is the perfect place to relax and reconnect with nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8370, 39.1911] }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the beauty of Tuscany in this historic villa located near Florence. Enjoy scenic vineyards, rustic charm, and authentic Italian architecture.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Stay among the treetops in this unique treehouse in Portland. Surrounded by greenery, this retreat offers peace, privacy, and a one-of-a-kind experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
  },
  {
    title: "Beachfront Paradise",
    description: "Enjoy a luxurious beachfront stay in Cancun with direct access to white sandy beaches and crystal-clear waters. Ideal for vacations and relaxation.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend peaceful days by Lake Tahoe in this cozy rustic cabin. Ideal for fishing, kayaking, and enjoying serene lake views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Experience luxury living in Los Angeles with this stunning penthouse offering panoramic city views, modern interiors, and premium amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Enjoy direct access to ski slopes in this luxurious chalet located in Verbier, Switzerland. Perfect for winter sports enthusiasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2260, 46.0960] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience wildlife up close in this safari lodge located in the Serengeti. Witness breathtaking landscapes and exotic animals.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
  },

  {
    title: "Historic Canal House",
    description: "Stay in a charming historic canal house in Amsterdam, offering classic architecture and a peaceful canal-side atmosphere.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
  },
  {
    title: "Private Island Retreat",
    description: "Enjoy complete privacy on your own island in Fiji. This luxurious retreat offers stunning beaches and unmatched exclusivity.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.0650, -17.7134] }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Relax in this charming English cottage in the Cotswolds, known for its scenic countryside and peaceful surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.8330] }
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Stay in a classic brownstone in Boston, offering historic charm and proximity to major attractions and universities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax in a tropical beachfront bungalow in Bali with stunning ocean views, a private pool, and serene surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views in Banff National Park from this cozy cabin surrounded by nature.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Stay in a stylish Art Deco apartment in Miami, close to beaches, nightlife, and vibrant city life.",
    image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a luxurious tropical villa in Phuket with private pool, modern amenities, and scenic surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle located in the Scottish Highlands with breathtaking landscapes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Scotland",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 56.4907] }
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the desert with this oasis-style villa in Dubai featuring modern amenities and stunning views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60" },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Enjoy a peaceful stay in a rustic log cabin surrounded by the scenic beauty of Montana.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60" },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] }
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy stunning Mediterranean views from this beachfront villa in Mykonos with luxury amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3289, 37.4467] }
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse in Costa Rica surrounded by lush forest and natural beauty.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience southern charm in this beautifully restored historic cottage in Charleston.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore Tokyo from this modern and centrally located apartment with easy access to transport and attractions.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Relax by the lake in this peaceful cabin located in New Hampshire’s scenic White Mountains.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.5724, 43.1939] }
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Stay in a luxurious overwater villa in the Maldives with stunning ocean views and private access to the sea.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60" },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] }
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Enjoy a luxurious ski experience in Aspen with this modern chalet located near world-class ski slopes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8370, 39.1911] }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica with beautiful sunsets and relaxing vibes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }
  }
];

module.exports = { data: sampleListings };