import HeroSection from "@/components/HeroSection";
import BookingCard from "@/components/BookingCard";
import FeatureGrid from "@/components/FeatureGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Booking Card */}
      <BookingCard />
      
      {/* Features Grid */}
      <FeatureGrid />
      
      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent-blue">
        <div className="container max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book a ₹49 demo class now and see the difference personalized English learning can make.
          </p>
          <div className="text-sm opacity-80">
            🔒 Safe & Secure | 📞 Instant Confirmation | 🎓 Expert Teachers
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
