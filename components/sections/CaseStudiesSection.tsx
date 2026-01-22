'use client'

import { motion } from 'motion/react'
import { caseStudies } from '@/data/case-studies'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { useInView } from '@/hooks/useInView'
import { staggerContainerVariants, scrollRevealVariants } from '@/lib/animations'

export function CaseStudiesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="case-studies"
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
            <span className="text-2xl" aria-hidden="true">🌀</span>
            <h2 className="text-electric-lime text-base font-medium font-display mt-2 mb-3">
              SPIRAL LAB
            </h2>
            <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
          </div>

          <p className="text-white text-lg leading-relaxed text-pretty">
            Here are some AI systems we&apos;ve built:
          </p>
        </motion.div>

        {/* Case Study Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={scrollRevealVariants}>
              <CaseStudyCard caseStudy={study} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
