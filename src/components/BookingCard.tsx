import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingCard = () => {
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Demo Class Booked Successfully! 🎉",
      description: "We'll call you within 5 minutes to confirm your slot.",
    });
    
    setIsLoading(false);
    // Reset form
    setPhoneNumber("");
    setSelectedAge(null);
  };

  return (
    <section className="py-16 px-6">
      <div className="container max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Book Your Child's ₹49 Demo Class
            </h2>
            
            {/* Alert Strip */}
            <div className="bg-accent-orange text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 mb-6">
              <Clock className="w-4 h-4" />
              ⚡ Only 5 demo slots left today!
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Your Mobile Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10 h-12 text-base"
                  required
                />
              </div>
            </div>

            {/* Age Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Your Child's Age
              </label>
              <div className="grid grid-cols-4 gap-2">
                {ages.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setSelectedAge(age)}
                    className={`h-12 rounded-lg border-2 font-medium transition-all duration-200 ${
                      selectedAge === age
                        ? 'border-primary bg-primary text-white shadow-button'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:bg-primary-light'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Booking...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Book Demo Now
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </Button>

            {/* Trust Indicators */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-accent-green">
                <CheckCircle className="w-4 h-4" />
                No hidden charges
              </div>
              <div className="flex items-center gap-2 text-sm text-accent-green">
                <CheckCircle className="w-4 h-4" />
                Instant confirmation call
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingCard;