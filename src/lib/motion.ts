import { Variants } from "framer-motion";

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
   },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {  opacity: 1,
    x: 0,
    transition: { duration: 0.5 }, },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 },},
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 }, },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
    
  },
});
