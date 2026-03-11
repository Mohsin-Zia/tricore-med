import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { floatingAnimation } from "@/lib/animations";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  showPhoneButton?: boolean;
}

export const CTASection = ({
  title = "Ready to Maximize Your Revenue?",
  description = "Join 1,500+ healthcare providers who trust us with their medical billing. Get a free consultation and see how much we can improve your collections.",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  showPhoneButton = true,
}: CTASectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Medical Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/2.jpeg')",
          }}
        />
        {/* Lighter gradient overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/65 to-secondary/70" />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        {...floatingAnimation}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        {...floatingAnimation}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}>
          {/* Animated title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}>
            {title}
          </motion.h2>

          {/* Animated description */}
          <motion.p
            className="text-lg text-primary-foreground/90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>
            {description}
          </motion.p>

          {/* Buttons container */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}>
            {/* Primary button with animations */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0.4)",
                    "0 0 0 10px rgba(147, 51, 234, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}>
                <Button size="lg" variant="secondary" asChild>
                  <Link to={primaryButtonLink}>
                    <motion.div
                      className="inline-flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}>
                      {primaryButtonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Phone button with animations */}
            {showPhoneButton && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild>
                  <a href="tel:+1 (201) 699-6877">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}>
                      <Phone className="mr-2 w-5 h-5" />
                    </motion.div>
                    Call +1 (201) 699-6877
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Floating sparkle icons */}
          <motion.div
            className="absolute top-10 left-10 text-primary-foreground/20"
            {...floatingAnimation}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 text-primary-foreground/20"
            {...floatingAnimation}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}>
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
