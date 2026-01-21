'use client'

import { motion } from 'motion/react'
import { contactInfo } from '@/data/contact'
import { useInView } from '@/hooks/useInView'

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 px-4 bg-deep-teal grain-overlay flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-6 block" aria-hidden="true">💬</span>

          <h2 className="text-white text-4xl md:text-5xl font-medium font-display mb-6 text-balance">
            Let&apos;s Build Something Great Together
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 text-pretty max-w-2xl mx-auto">
            Ready to transform your organization with AI? We&apos;d love to hear about your project and explore how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-electric-lime text-slate-dark text-base font-medium rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
            >
              Start a Conversation
              <span className="ml-2" aria-hidden="true">→</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Schedule a Call`}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-base font-medium"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
