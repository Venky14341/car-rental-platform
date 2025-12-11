import { Button } from "@/components/ui/button";
import { Fuel, Users, Gauge, Star } from "lucide-react";

interface CarCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  fuel: string;
  transmission: string;
  rating: number;
}

const CarCard = ({ name, category, price, image, seats, fuel, transmission, rating }: CarCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{name}</h3>

        {/* Features */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{seats}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{transmission}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-display font-bold text-accent">${price}</span>
            <span className="text-muted-foreground text-sm">/day</span>
          </div>
          <Button variant="accent" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
