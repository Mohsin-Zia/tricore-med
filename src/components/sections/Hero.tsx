import { useRef } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/common/ContactForm";
import {
  useGsapFadeIn,
  useGsapTextReveal,
  useGsapStagger,
} from "@/hooks/useGsapAnimations";

const heroFeatures = [
  "99% Clean Claim Rate",
  "24-48 Hour Turnaround",
  "HIPAA Compliant",
  "No Hidden Fees",
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useGsapTextReveal();
  const subtitleRef = useGsapFadeIn(0.3);
  const featuresRef = useGsapStagger(".hero-feature", 0.1);
  const buttonsRef = useGsapFadeIn(0.8);
  const formRef = useRef<HTMLDivElement>(null);

  // Animate form on load
  const formContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Medical Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Lighter gradient overlay for better visibility - using 4-color palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/70 to-teal/60" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={containerRef}>
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal/20 text-white text-sm font-medium border border-white/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Tricor Medical Billing | Modern Revenue Solutions
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Optimized Medical Billing
              <br />
              <span className="text-teal-light inline-block">
                Increase Your Revenue
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              Tricore Medical Billing delivers professional medical billing and
              consulting solutions designed to simplify your practice operations
              and enhance financial performance. Our comprehensive services
              include full-service billing, telehealth and RPM support, as well
              as provider credentialing — all tailored to help your practice
              thrive.
            </p>

            <div ref={featuresRef} className="grid grid-cols-2 gap-4 mb-8">
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="hero-feature flex items-center text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-teal-light mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-teal hover:bg-teal/90 text-white group"
                asChild>
                <Link to="/contact">
                  Speak with Billing Experts
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div ref={formContainerRef} className="hidden lg:block">
            <ContactForm variant="hero" />
          </div>
        </div>
      </div>

      {/* Decorative Elements - using 4-color palette
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
};
