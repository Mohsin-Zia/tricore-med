import { motion } from "framer-motion";
import { Shield, Award, Clock, Lock } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const badges = [
  { icon: Shield, label: "HIPAA Compliant", description: "Fully certified" },
  { icon: Award, label: "AAPC Certified", description: "Professional coders" },
  { icon: Clock, label: "24/7 Support", description: "Always available" },
  { icon: Lock, label: "256-bit SSL", description: "Bank-grade security" },
];

export const TrustBadges = () => {
  return (
    <section className="py-8 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{badge.label}</div>
                <div className="text-sm text-muted-foreground">{badge.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
