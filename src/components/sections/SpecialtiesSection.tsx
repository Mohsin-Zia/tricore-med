import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpecialtyCard } from "@/components/common/SpecialtyCard";
import { featuredSpecialties } from "@/data/specialties";
import { staggerContainer, staggerItem } from "@/lib/animations";

export const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle Medical Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            75+ Specialties
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Medical Billing Specialties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We Provide Billing Solutions for various medical practices <br />
            <span>and healthcare providers</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredSpecialties.map((specialty) => (
            <motion.div key={specialty.id} variants={staggerItem}>
              <SpecialtyCard name={specialty.name} icon={specialty.icon} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button size="lg" asChild>
            <Link to="/specialties">
              View All Specialties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
