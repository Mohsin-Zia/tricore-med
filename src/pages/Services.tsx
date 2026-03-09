import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useGsapScrollReveal();

  useEffect(() => {
    // Parallax effect for hero background
    if (heroBgRef.current) {
      gsap.to(heroBgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroBgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <PageWrapper>
      {/* Hero with Background Image */}
      <section className="py-20 relative overflow-hidden">
        {/* Medical Background Image with Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={heroBgRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              height: '120%',
              top: '-10%',
            }}
          />
          {/* Lighter gradient overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroContentRef} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Medical Billing Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              From claim submission to payment collection, we offer end-to-end revenue cycle
              management services tailored to your practice's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-lg text-sm font-medium transition-all"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services - Each with ID for anchor navigation */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 scroll-mt-24 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Service Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Circle className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats for this service */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">95%+</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">24-48h</div>
                      <div className="text-xs text-muted-foreground">Turnaround</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Our Process</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A streamlined approach to maximize your revenue and minimize administrative burden.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Intake", description: "We gather your practice information and understand your unique needs" },
              { step: "02", title: "Setup", description: "Configure systems and establish workflows tailored to your practice" },
              { step: "03", title: "Execute", description: "Our team processes your claims and manages your revenue cycle" },
              { step: "04", title: "Optimize", description: "Continuous monitoring and improvement to maximize collections" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-secondary/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Billing?"
        description="Let our experts handle your revenue cycle while you focus on patient care."
      />
    </PageWrapper>
  );
};

export default Services;
