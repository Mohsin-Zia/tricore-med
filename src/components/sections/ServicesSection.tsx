import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/common/ServiceCard";
import { featuredServices } from "@/data/services";
import {
  staggerContainer,
  staggerItem,
  floatingAnimation,
} from "@/lib/animations";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle Medical Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        {...floatingAnimation}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        {...floatingAnimation}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Our Services
            </div>
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}>
            Comprehensive Medical Billing and Consulting
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>
            Tricore Medical Billing provides expert solutions designed to
            minimize errors, speed up reimbursements, and maintain full
            compliance — allowing you to stay focused on delivering exceptional
            patient care.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}>
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={staggerItem}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services#${service.id}`}
                benefits={service.benefits}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="ml-2 inline-block">
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
