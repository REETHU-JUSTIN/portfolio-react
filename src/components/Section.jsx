import { motion } from 'framer-motion';

/**
 * Section wrapper that fades + slides its children up when scrolled into
 * view (once). Framer Motion automatically respects prefers-reduced-motion.
 */
export default function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/** Small monospace section label, e.g. "01 / about". */
export function Eyebrow({ children }) {
  return <div className="font-mono text-[13px] text-accent-strong mb-2.5">{children}</div>;
}
