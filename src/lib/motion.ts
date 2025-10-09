// Motion variants for consistent animations across the app
// All animations respect prefers-reduced-motion

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

export const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const scaleHover = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    } 
  }
};

export const slideInFromRight = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    } 
  }
};

// Reduced motion variants
export const reducedMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

// Utility to get appropriate variants based on user preference
export const getMotionVariants = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      fadeInUp: reducedMotion,
      slideInFromLeft: reducedMotion,
      slideInFromRight: reducedMotion,
      staggerChildren: { hidden: {}, show: {} },
      scaleHover: {}
    };
  }
  
  return {
    fadeInUp,
    slideInFromLeft,
    slideInFromRight,
    staggerChildren,
    scaleHover
  };
};
