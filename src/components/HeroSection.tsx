import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Search } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Premium Car Rentals</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Drive Your Dreams
              <span className="block text-accent">Today</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-lg">
              Experience the freedom of the open road with our premium fleet. 
              From luxury sedans to rugged SUVs, find your perfect ride.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero">
                Browse Cars
              </Button>
              <Button variant="hero-outline">
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/10">
              <div>
                <div className="text-3xl font-display font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/60">Premium Cars</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">50k+</div>
                <div className="text-sm text-primary-foreground/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent">100+</div>
                <div className="text-sm text-primary-foreground/60">Locations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img
                src={heroCarImage}
                alt="Luxury sports car"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card-hover animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Easy Booking</div>
                    <div className="text-xs text-muted-foreground">Book in 2 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-16 bg-card rounded-2xl p-6 shadow-card-hover animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Pick-up Location</label>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                <MapPin className="w-5 h-5 text-accent" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="bg-transparent outline-none flex-1 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Pick-up Date</label>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                <Calendar className="w-5 h-5 text-accent" />
                <input
                  type="date"
                  className="bg-transparent outline-none flex-1 text-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Return Date</label>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                <Calendar className="w-5 h-5 text-accent" />
                <input
                  type="date"
                  className="bg-transparent outline-none flex-1 text-foreground"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Button variant="accent" className="w-full h-12">
                <Search className="w-5 h-5 mr-2" />
                Search Cars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
