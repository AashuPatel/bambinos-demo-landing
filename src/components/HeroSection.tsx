import { Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-light to-white">
      <div className="container max-w-4xl px-6 py-16 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-8 shadow-soft">
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
          Trusted by 50,000+ Families
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your Child Deserves the Best in 
          <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent block mt-2">
            English
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
          Certified Teachers. 1-on-1 Attention.
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Live, 1-on-1 English sessions designed to help your child communicate confidently — from the comfort of your home.
        </p>

        {/* Ratings */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              <strong>4.9</strong> Google
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              <strong>4.8</strong> Trustpilot
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-2xl mx-auto">
          <img 
            src={heroImage} 
            alt="Child learning English online with certified teacher"
            className="w-full rounded-2xl shadow-card animate-fade-in"
          />
          <div className="absolute -top-4 -right-4 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce-soft">
            Live Classes!
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;