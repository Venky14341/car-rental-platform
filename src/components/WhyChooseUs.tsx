import { Shield, Clock, Headphones, CreditCard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Pick up and drop off your vehicle anytime. We're always here when you need us.",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description: "Our dedicated support team is ready to assist you around the clock.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Flexible payment options including credit cards, debit cards, and digital wallets.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why DriveX
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best car rental experience. 
            Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
