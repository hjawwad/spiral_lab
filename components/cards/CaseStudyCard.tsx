'use client'

import { motion } from 'motion/react'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.article
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-150 flex flex-col h-full"
      whileHover={{ borderColor: 'rgba(127, 217, 68, 0.2)' }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-electric-lime font-mono text-sm font-medium">
          [{caseStudy.number}]
        </span>
        <h3 className="text-white text-xl font-medium font-display flex-1">
          {caseStudy.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/70 text-base leading-relaxed mb-6 text-pretty flex-grow">
        {caseStudy.description}
      </p>

      {/* Impact Metrics */}
      <div className="mb-6 mt-auto">
        <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">
          Impact:
        </h4>
        <ul className="space-y-2">
          {caseStudy.impact.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-electric-lime" aria-hidden="true">•</span>
              <span className="text-white/70">
                <strong className="text-white font-semibold tabular-nums">
                  {item.metric}
                </strong>{' '}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">
          Stack:
        </h4>
        <p className="text-electric-lime/80 text-sm">
          {caseStudy.techStack.join(' • ')}
        </p>
      </div>

      {/* CTA */}
      <a
        href={caseStudy.link}
        className="inline-flex items-center gap-1 text-electric-lime hover:text-white transition-colors duration-150 text-sm font-medium group"
      >
        View Details
        <span
          className="group-hover:translate-x-1 transition-transform duration-150"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </motion.article>
  )
}
