import { Link } from "react-router-dom";
import { Car, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-accent-foreground" />
              </div>
              <span>DriveX</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Premium car rentals for every journey. Experience the freedom of the road with our exceptional fleet.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/cars" className="text-primary-foreground/70 hover:text-accent transition-colors">Browse Cars</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Car Rental</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Long-term Lease</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Corporate Fleet</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span>123 Drive Street, Auto City</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@drivex.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 DriveX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
