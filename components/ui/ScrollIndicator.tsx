'use client'

import { motion } from 'motion/react'

export function ScrollIndicator() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToServices}
      className="flex flex-col items-center gap-2 text-graphite hover:text-electric-lime transition-colors duration-150"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-label="Scroll to services section"
    >
      <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
      <motion.svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M8 0L8 22M8 22L1 15M8 22L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  )
}
