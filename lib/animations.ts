import { Variants } from 'motion/react'

/**
 * Page load sequence animations
 */
export const heroCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const buttonGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

/**
 * Scroll-triggered reveal animations
 */
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

/**
 * Card expansion animations
 */
export const cardExpandVariants: Variants = {
  collapsed: {
    height: 'auto',
  },
  expanded: {
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export const expandedContentVariants: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
  },
  expanded: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { delay: 0.2, duration: 0.3 },
      height: { duration: 0.4, ease: 'easeOut' },
    },
  },
}
