'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ServiceCard as ServiceCardType } from '@/types'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: ServiceCardType
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={cn(
        'bg-white/5 border border-white/10 rounded-xl p-6 transition-colors duration-150',
        'hover:border-electric-lime/20'
      )}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-electric-lime font-mono text-sm">
              {service.number}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-medium font-display">
              {service.title}
            </h3>
          </div>
          <div className="w-15 h-px bg-electric-lime mb-4" aria-hidden="true" />
        </div>

        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-graphite hover:text-white transition-colors duration-150 text-sm"
            aria-label="Collapse details"
          >
            Collapse ↑
          </button>
        )}
      </div>

      {/* Description */}
      <p className="text-white/70 text-base leading-relaxed mb-6 text-pretty">
        {service.description}
      </p>

      {/* Expand/Collapse Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-graphite hover:text-electric-lime transition-colors duration-150 text-sm font-medium inline-flex items-center gap-1"
          aria-expanded={isExpanded}
        >
          Expand Details
          <span aria-hidden="true">→</span>
        </button>
      )}

      {/* Expanded Content */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 }
            }}
            className="overflow-hidden will-change-[height,opacity]"
          >
            <div className="space-y-8">
              {/* Capabilities */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Capabilities
                </h4>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="text-white/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-electric-lime mt-1" aria-hidden="true">→</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Performance Metrics
                </h4>
                <dl className="space-y-3">
                  {service.metrics.map((metric, index) => (
                    <div key={index} className="flex items-baseline gap-4">
                      <dt className="text-white text-2xl font-semibold font-mono tabular-nums min-w-[100px]">
                        {metric.value}
                      </dt>
                      <dd className="text-white/60 text-sm">
                        {metric.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-dark border border-zinc-dark rounded text-electric-lime/80 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-electric-lime text-electric-lime rounded-lg hover:bg-electric-lime hover:text-slate-dark transition-all duration-150 text-sm font-medium"
                >
                  Request Consultation
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-sm font-medium"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
