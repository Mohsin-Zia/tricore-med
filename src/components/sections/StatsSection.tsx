import { useRef, useEffect } from "react";
import { TrendingUp, Award, Shield, Zap } from "lucide-react";
import { StatCounter } from "@/components/common/StatCounter";
import { stats } from "@/data/stats";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollReveal, useGsapStagger } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  TrendingUp,
  Award,
  Shield,
  Zap,
};

export const StatsSection = () => {
  const sectionRef = useGsapScrollReveal();
  const cardsContainerRef = useGsapStagger(".stat-card", 0.15);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate background pattern
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Medical Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Lighter gradient overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/70 to-primary/75" />
      </div>

      {/* Animated background decoration */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={sectionRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 tracking-tight">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Our track record of success shows why healthcare providers trust us
            with their revenue cycle management.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.id as keyof typeof iconMap] || TrendingUp;
            const cardRef = useRef<HTMLDivElement>(null);
            const iconRef = useRef<HTMLDivElement>(null);
            const pulseRef = useRef<HTMLDivElement>(null);

            // Hover effect for card
            useEffect(() => {
              const card = cardRef.current;
              if (!card) return;

              const handleMouseEnter = () => {
                gsap.to(card, {
                  y: -10,
                  duration: 0.3,
                  ease: "power2.out",
                });
              };

              const handleMouseLeave = () => {
                gsap.to(card, {
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              };

              card.addEventListener("mouseenter", handleMouseEnter);
              card.addEventListener("mouseleave", handleMouseLeave);

              return () => {
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
              };
            }, [cardRef]);

            // Icon rotation animation on hover
            useEffect(() => {
              const icon = iconRef.current;
              if (!icon) return;

              const handleMouseEnter = () => {
                gsap.to(icon, {
                  rotation: 360,
                  scale: 1.1,
                  duration: 0.6,
                  ease: "back.out(1.7)",
                });
              };

              const handleMouseLeave = () => {
                gsap.to(icon, {
                  rotation: 0,
                  scale: 1,
                  duration: 0.4,
                  ease: "power2.out",
                });
              };

              icon.addEventListener("mouseenter", handleMouseEnter);
              icon.addEventListener("mouseleave", handleMouseLeave);

              return () => {
                icon.removeEventListener("mouseenter", handleMouseEnter);
                icon.removeEventListener("mouseleave", handleMouseLeave);
              };
            }, [iconRef]);

            // Pulse animation
            useEffect(() => {
              if (pulseRef.current) {
                gsap.to(pulseRef.current, {
                  scale: 1.5,
                  opacity: 0.5,
                  duration: 1,
                  repeat: -1,
                  yoyo: true,
                  ease: "power1.inOut",
                  delay: index * 0.2,
                });
              }
            }, [index]);

            return (
              <div
                key={stat.id}
                ref={cardRef}
                className="stat-card relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl cursor-pointer transition-shadow hover:shadow-2xl"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity"
                  style={{
                    background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Icon container */}
                <div className="flex justify-center mb-4">
                  <div
                    ref={iconRef}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/30 to-yellow-300/20 flex items-center justify-center shadow-lg backdrop-blur-sm border border-amber-300/30"
                  >
                    <IconComponent className="w-8 h-8 text-amber-300" />
                  </div>
                </div>

                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                  className="text-primary-foreground"
                  variant="amber"
                />

                {/* Pulse effect */}
                <div
                  ref={pulseRef}
                  className="absolute top-0 right-0 w-2 h-2 rounded-full bg-amber-400"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
