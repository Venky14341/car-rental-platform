import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCars />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
