import { motion } from "motion/react";

interface SectionTitleProps {
  children: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ children, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl mb-4 text-gray-800"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
