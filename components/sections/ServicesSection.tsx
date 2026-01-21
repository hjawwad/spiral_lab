'use client'

import { motion } from 'motion/react'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { useInView } from '@/hooks/useInView'
import { staggerContainerVariants, scrollRevealVariants } from '@/lib/animations'

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-20 px-4 bg-deep-teal grain-overlay"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-6">
            <h2 className="text-electric-lime text-base font-medium font-display mb-3">
              SPIRAL LAB
            </h2>
            <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
          </div>

          <p className="text-white text-lg leading-relaxed text-pretty">
            We engineer AI infrastructure across four specialized domains:
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="space-y-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={scrollRevealVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
