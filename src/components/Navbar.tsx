import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
            <span>DriveX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/cars" className="text-muted-foreground hover:text-foreground transition-colors">
              Browse Cars
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-1" />
              Sign In
            </Button>
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/cars" className="text-muted-foreground hover:text-foreground transition-colors">
                Browse Cars
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <div className="flex gap-3 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button variant="accent" size="sm" className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
