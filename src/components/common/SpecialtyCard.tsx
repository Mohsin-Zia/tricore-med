import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardEnter, floatingAnimation } from "@/lib/animations";

interface SpecialtyCardProps {
  name: string;
  icon: LucideIcon;
  description?: string;
  onClick?: () => void;
  index?: number;
  className?: string;
}

export const SpecialtyCard = ({
  name,
  icon: Icon,
  description,
  onClick,
  index = 0,
  className,
}: SpecialtyCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 cursor-pointer transition-all duration-300 overflow-hidden",
        "hover:shadow-xl",
        className
      )}
      onClick={onClick}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardEnter}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-muted group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        {description && (
          <motion.p
            className="text-sm text-muted-foreground overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ height: "auto", opacity: 1 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary/100 transition-colors duration-300"
        whileHover={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
