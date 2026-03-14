import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { staggerContainer, staggerItem, scaleInBounce } from "@/lib/animations";

interface FAQSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export const FAQSection = ({ limit, showTitle = true }: FAQSectionProps) => {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </div>
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight"
              // whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Find answers to common questions about our medical billing services.
            </motion.p>
          </motion.div>
        )}

        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={staggerItem}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <AccordionItem
                    value={faq.id}
                    className="border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden relative"
                  >
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(147, 51, 234, 0.03) 100%)",
                      }}
                    />
                    <div className="relative">
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-4">
                        <motion.span
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            {index + 1}
                          </motion.div>
                          {faq.question}
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-11">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </motion.div>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
