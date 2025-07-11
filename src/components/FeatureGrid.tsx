import { GraduationCap, Shield, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    description: "Your child learns from certified educators with proven track records",
    bgColor: "bg-blue-50",
    iconColor: "text-accent-blue"
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "1-on-1 sessions in a secure environment with complete privacy",
    bgColor: "bg-green-50",
    iconColor: "text-accent-green"
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "Built to build communication skills with age-appropriate content",
    bgColor: "bg-purple-50",
    iconColor: "text-primary"
  },
  {
    icon: Heart,
    title: "Child-First Approach",
    description: "Personalized pace, no pressure - learning that feels like play",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Parents Choose 
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent"> Bambinos.Live</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand what matters most to you as a parent - your child's safety, growth, and happiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Child's English Journey Today
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of happy families who trust Bambinos.Live for their child's English learning journey.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">50,000+</span>
                <span>Happy Students</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">98%</span>
                <span>Parent Satisfaction</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">500+</span>
                <span>Expert Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;