import { useRef } from "react";
import { FileCheck, Shield, Clock, AlertCircle } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";

const dmeFeatures = [
  {
    icon: FileCheck,
    title: "Documentation Scrubbing",
    description:
      "•	Accurate, reliable billing solutions for practices of all sizes",
  },
  {
    icon: Shield,
    title: "Compliance Oversight",
    description:
      "•	Personalized support designed for small and mid-sized practices",
  },
  {
    icon: Clock,
    title: "Rental Cycle Logic",
    description:
      "•	Efficient billing and coding workflows that save time and reduce errors",
  },
  {
    icon: AlertCircle,
    title: "Prior Auth Strategy",
    description:
      "•	Strategic consulting to strengthen and optimize your revenue cycle",
  },
];

export const DMESection = () => {
  const sectionRef = useGsapFadeIn();

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(215 80% 25% / 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-semibold text-sm mb-4">
            Specialized DME Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Tricore Medical Billing Handles DME Billing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We tailor our services to independent practices and expanding
            healthcare organizations, offering:
          </p>
          ``
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dmeFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-navy to-teal rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Learn More About DME Billing
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            With Tricore Medical Billing, you gain a dependable partner focused
            on your financial success — so you can dedicate your time to
            delivering exceptional patient care.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
            Contact Our DME Experts
          </a>
        </div>
      </div>
    </section>
  );
};
