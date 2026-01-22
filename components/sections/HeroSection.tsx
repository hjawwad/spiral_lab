'use client'

import { motion } from 'motion/react'
import { heroCardVariants, buttonGroupVariants, buttonVariants } from '@/lib/animations'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center px-4 py-20 bg-deep-teal grain-overlay vignette overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center gap-2">
          <span className="text-electric-lime text-sm font-medium font-display tracking-wide">
            SPIRAL LAB
          </span>
        </div>
        <a
          href="/internship"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-electric-lime/10 border border-electric-lime/30 hover:border-electric-lime rounded-lg transition-all duration-150"
        >
          <span className="w-2 h-2 rounded-full bg-electric-lime animate-pulse" aria-hidden="true" />
          <span className="text-electric-lime text-xs md:text-sm font-medium group-hover:text-white transition-colors">
            Join Our Internship
          </span>
          <span className="text-electric-lime group-hover:translate-x-0.5 transition-transform text-xs" aria-hidden="true">
            →
          </span>
        </a>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14 shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.08)]"
          variants={heroCardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-electric-lime text-base font-medium font-display mb-3">
              SPIRAL LAB
            </h1>
            <div className="w-10 h-0.5 bg-electric-lime mb-8" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 className="text-white text-4xl md:text-5xl font-medium font-display mb-6 text-balance">
            We architect AI systems for organizations building the future.
          </h2>

          {/* Body */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 text-pretty">
            Autonomous agents. Neural networks. Production-grade intelligence.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={buttonGroupVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-electric-lime text-slate-dark text-base font-medium rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
              variants={buttonVariants}
            >
              Explore Capabilities
              <span className="ml-2" aria-hidden="true">→</span>
            </motion.a>

            <motion.a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-graphite text-base font-medium hover:text-white transition-colors duration-150 relative group"
              variants={buttonVariants}
            >
              View Case Studies
              <span
                className="absolute bottom-2 left-8 right-8 h-0.5 bg-electric-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150"
                aria-hidden="true"
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-graphite text-base font-medium hover:text-white transition-colors duration-150 relative group"
              variants={buttonVariants}
            >
              Discuss Your Project
              <span
                className="absolute bottom-2 left-8 right-8 h-0.5 bg-electric-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  )
}
