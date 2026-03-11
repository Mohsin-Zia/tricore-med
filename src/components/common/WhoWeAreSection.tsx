import { motion } from "framer-motion";
import { Users, CheckCircle, TrendingUp, Shield, Heart } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Certified Billing Specialists",
    description:
      "Industry-certified professionals ensuring accuracy in every claim.",
  },
  {
    icon: TrendingUp,
    title: "Increased Reimbursements",
    description: "Proven strategies that maximize your revenue potential.",
  },
  {
    icon: Shield,
    title: "Reduced Claim Denials",
    description: "Proactive denial management to protect your bottom line.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Letting you focus on care while we handle the rest.",
  },
];

const floatingAnimation = {
  animate: { y: [0, -15, 0] },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const WhoWeAreSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        {...floatingAnimation}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"
        {...floatingAnimation}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Medical billing team at work"
                className="w-full h-[480px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-border/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{
                y: -4,
                boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
              }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">
                    Clean Claim Rate
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-2xl" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Who We Are
              </div>
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Transforming Revenue Cycle{" "}
              <span className="text-primary">Management</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              At{" "}
              <span className="font-semibold text-foreground">
                Tricore Medical Billing
              </span>
              , we are dedicated to elevating the standard of medical billing
              for healthcare providers nationwide. Our mission is simple:
              empower healthcare professionals to concentrate on delivering
              outstanding patient care while we handle the complexities of
              billing and revenue cycle management.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our experienced team of certified billing specialists, coding
              experts, and healthcare consultants works seamlessly to increase
              reimbursements, reduce claim denials, and strengthen cash flow —
              helping your practice run smoothly and achieve sustainable growth.
            </p>

            {/* Highlights grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-30px" }}>
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ y: -2 }}>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
