import { useState } from "react";
import { Star, Phone, Clock, CheckCircle, ArrowRight, GraduationCap, Shield, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const ages = [4, 5, 6, 7, 8, 9, 10, 11];
  const isFormValid = phoneNumber.length >= 10 && selectedAge !== null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Demo Class Booked Successfully! 🎉",
      description: "We'll call you within 5 minutes to confirm your slot.",
    });
    
    setIsLoading(false);
    setPhoneNumber("");
    setSelectedAge(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-light via-white to-accent-blue/10">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        
        {/* Trust Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary shadow-soft">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
            Trusted by 50,000+ Families
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            
            {/* Headline */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Your Child Deserves the Best in 
                <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent block">
                  English
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-4">
                Certified Teachers. 1-on-1 Attention.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Live, 1-on-1 English sessions designed to help your child communicate confidently — from the comfort of your home.
              </p>
            </div>

            {/* Ratings */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  <strong>4.9</strong> Google
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  <strong>4.8</strong> Trustpilot
                </span>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent-blue" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Expert Teachers</div>
                  <div className="text-xs text-gray-600">Certified educators</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-accent-green" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Safe & Private</div>
                  <div className="text-xs text-gray-600">1-on-1 sessions</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Proven Curriculum</div>
                  <div className="text-xs text-gray-600">Age-appropriate</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">Child-First</div>
                  <div className="text-xs text-gray-600">No pressure</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Mobile */}
            <div className="lg:hidden relative">
              <img 
                src={heroImage} 
                alt="Child learning English online"
                className="w-full rounded-xl shadow-card"
              />
              <div className="absolute -top-2 -right-2 bg-accent-green text-white px-2 py-1 rounded-full text-xs font-medium">
                Live Classes!
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form + Image */}
          <div className="space-y-6">
            
            {/* Hero Image - Desktop */}
            <div className="hidden lg:block relative">
              <img 
                src={heroImage} 
                alt="Child learning English online"
                className="w-full rounded-xl shadow-card"
              />
              <div className="absolute -top-2 -right-2 bg-accent-green text-white px-2 py-1 rounded-full text-xs font-medium animate-bounce-soft">
                Live Classes!
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Book Your Child's ₹49 Demo Class
                </h3>
                <div className="bg-accent-orange text-white px-3 py-1 rounded-lg font-medium text-sm flex items-center justify-center gap-2">
                  <Clock className="w-3 h-3" />
                  ⚡ Only 5 demo slots left today!
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Your mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>

                {/* Age Selection */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Child's Age
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {ages.map((age) => (
                      <button
                        key={age}
                        type="button"
                        onClick={() => setSelectedAge(age)}
                        className={`h-10 rounded-lg border-2 font-medium text-sm transition-all ${
                          selectedAge === age
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-primary'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  type="submit"
                  variant="hero"
                  className="w-full h-12 font-semibold"
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Booking...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Book Demo Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>

                {/* Trust */}
                <div className="flex justify-center gap-4 text-xs text-accent-green">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    No hidden charges
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Instant confirmation
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="font-bold text-primary text-sm">50,000+</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">98%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary text-sm">500+</div>
                      <div className="text-xs text-gray-500">Teachers</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;