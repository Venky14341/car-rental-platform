import CarCard from "./CarCard";

const featuredCars = [
  {
    name: "Mercedes AMG GT",
    category: "Sports",
    price: 199,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    seats: 2,
    fuel: "Petrol",
    transmission: "Auto",
    rating: 4.9,
  },
  {
    name: "BMW X5 M Sport",
    category: "SUV",
    price: 149,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    seats: 5,
    fuel: "Diesel",
    transmission: "Auto",
    rating: 4.8,
  },
  {
    name: "Audi RS7 Sportback",
    category: "Luxury",
    price: 179,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    seats: 4,
    fuel: "Petrol",
    transmission: "Auto",
    rating: 4.9,
  },
  {
    name: "Porsche Cayenne",
    category: "SUV",
    price: 189,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    seats: 5,
    fuel: "Hybrid",
    transmission: "Auto",
    rating: 4.7,
  },
  {
    name: "Tesla Model S",
    category: "Electric",
    price: 159,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    seats: 5,
    fuel: "Electric",
    transmission: "Auto",
    rating: 4.8,
  },
  {
    name: "Range Rover Sport",
    category: "Luxury SUV",
    price: 209,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop",
    seats: 5,
    fuel: "Diesel",
    transmission: "Auto",
    rating: 4.9,
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of premium vehicles. 
            Each car is maintained to the highest standards for your comfort and safety.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car, index) => (
            <div
              key={car.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
