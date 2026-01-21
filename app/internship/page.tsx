'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { scrollRevealVariants } from '@/lib/animations'

export default function InternshipPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: programRef, isInView: programInView } = useInView({ threshold: 0.1 })
  const { ref: benefitsRef, isInView: benefitsInView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 })

  return (
    <main className="relative min-h-screen bg-deep-teal">
      {/* Hero Section */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-deep-teal grain-overlay vignette"
      >
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-electric-lime text-sm font-medium font-display tracking-wide hover:text-white transition-colors">
              ← SPIRAL LAB
            </span>
          </Link>
        </header>

        <div className="w-full max-w-5xl mx-auto relative z-10">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-electric-lime text-base font-medium font-display mb-3">
                AI INTERNSHIP PROGRAM
              </h1>
              <div className="w-10 h-0.5 bg-electric-lime mb-8" aria-hidden="true" />
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-medium font-display mb-6 text-balance">
              Free AI Training & Internship Opportunities
            </h2>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 text-pretty">
              We&apos;re committed to empowering the next generation of AI engineers in Pakistan.
              Our program offers free, industry-led training in cutting-edge AI technologies,
              hands-on experience, and pathways to career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-lime text-slate-dark text-base font-medium rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
              >
                Apply Now
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center px-8 py-4 text-graphite text-base font-medium hover:text-white transition-colors duration-150 relative group"
              >
                Learn More
                <span
                  className="absolute bottom-2 left-8 right-8 h-0.5 bg-electric-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Details Section */}
      <section
        id="program"
        ref={programRef as React.RefObject<HTMLElement>}
        className="relative py-20 px-4 bg-deep-teal grain-overlay"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <span className="text-2xl" aria-hidden="true">🎓</span>
              <h2 className="text-electric-lime text-base font-medium font-display mt-2 mb-3">
                PROGRAM OVERVIEW
              </h2>
              <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
            </div>

            <p className="text-white text-lg leading-relaxed text-pretty mb-12">
              Our internship program is designed to bridge the gap between academic learning and real-world AI development.
              We provide comprehensive training, mentorship from industry experts, and opportunities to work on actual production systems.
            </p>
          </motion.div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '🚀',
                title: 'Industry-Led Training',
                description: 'Learn from experienced AI engineers working on real-world production systems. Get hands-on experience with the latest tools and frameworks.',
              },
              {
                icon: '💡',
                title: 'Cutting-Edge Technologies',
                description: 'Master modern AI technologies including LLMs, transformers, neural networks, RAG systems, and production ML pipelines.',
              },
              {
                icon: '🎯',
                title: 'Real Project Experience',
                description: 'Work on actual client projects and contribute to production systems. Build a portfolio that stands out to employers.',
              },
              {
                icon: '🤝',
                title: 'Mentorship & Guidance',
                description: 'Receive one-on-one mentorship from senior engineers. Get career guidance and technical support throughout your journey.',
              },
              {
                icon: '🌟',
                title: 'Career Opportunities',
                description: 'High-performing interns are considered for full-time positions at Spiral Lab or receive referrals to our partner companies.',
              },
              {
                icon: '🇵🇰',
                title: 'Community Impact',
                description: 'Join a growing community of AI practitioners in Pakistan. Help build the local AI ecosystem and give back to future learners.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:border-electric-lime/20 transition-all duration-150"
                variants={scrollRevealVariants}
                initial="hidden"
                animate={programInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">{item.icon}</span>
                <h3 className="text-white text-xl font-medium font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Topics Covered */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-white text-2xl font-medium font-display mb-6">
              Topics Covered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-electric-lime text-sm font-medium uppercase tracking-wider mb-3">
                  AI & Machine Learning
                </h4>
                <ul className="space-y-2">
                  {[
                    'Large Language Models (LLMs)',
                    'Transformers & Neural Networks',
                    'Natural Language Processing',
                    'RAG (Retrieval Augmented Generation)',
                    'Fine-tuning & Model Training',
                    'Prompt Engineering',
                  ].map((topic, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-electric-lime mt-1" aria-hidden="true">→</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-electric-lime text-sm font-medium uppercase tracking-wider mb-3">
                  Engineering & Production
                </h4>
                <ul className="space-y-2">
                  {[
                    'Python & Django Development',
                    'API Design & Development',
                    'Database Design & Optimization',
                    'Cloud Infrastructure (AWS)',
                    'CI/CD & Deployment',
                    'Production ML Systems',
                  ].map((topic, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-electric-lime mt-1" aria-hidden="true">→</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section
        ref={benefitsRef as React.RefObject<HTMLElement>}
        className="relative py-20 px-4 bg-deep-teal grain-overlay"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <span className="text-2xl" aria-hidden="true">✨</span>
              <h2 className="text-electric-lime text-base font-medium font-display mt-2 mb-3">
                WHY JOIN US
              </h2>
              <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-white text-xl font-medium font-display mb-4">
                  100% Free Training
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  No tuition fees, no hidden costs. We believe in making quality AI education accessible to everyone
                  in Pakistan. Our program is completely free as part of our commitment to giving back to the community.
                </p>
              </div>

              <div className="w-full h-px bg-white/10" aria-hidden="true" />

              <div>
                <h3 className="text-white text-xl font-medium font-display mb-4">
                  Always-On Internship Batches
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  We run internship batches continuously throughout the year. No need to wait for specific
                  enrollment periods—apply when you&apos;re ready and start learning.
                </p>
              </div>

              <div className="w-full h-px bg-white/10" aria-hidden="true" />

              <div>
                <h3 className="text-white text-xl font-medium font-display mb-4">
                  Career Support & Opportunities
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Top performers are offered full-time positions at Spiral Lab. We also help place interns at
                  partner companies and provide career guidance, interview preparation, and networking opportunities.
                </p>
              </div>

              <div className="w-full h-px bg-white/10" aria-hidden="true" />

              <div>
                <h3 className="text-white text-xl font-medium font-display mb-4">
                  Giving Back to Pakistan
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  This program is our way of contributing to Pakistan&apos;s tech ecosystem. We&apos;re building
                  a community of skilled AI engineers who can compete globally and contribute locally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="apply"
        ref={ctaRef as React.RefObject<HTMLElement>}
        className="relative py-20 px-4 bg-deep-teal grain-overlay"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-4xl mb-6 block" aria-hidden="true">🚀</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium font-display mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our next batch and learn from industry experts. Whether you&apos;re a student,
              fresh graduate, or career switcher, we&apos;ll help you build the skills needed to succeed in AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jawwad@spirallab.co?subject=AI Internship Application"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-lime text-slate-dark text-base font-medium rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
              >
                Apply via Email
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-base font-medium"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Questions? Reach out to us at{' '}
                <a
                  href="mailto:jawwad@spirallab.co"
                  className="text-electric-lime hover:text-white transition-colors"
                >
                  jawwad@spirallab.co
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-slate-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2026 Spiral Lab. Building the future of AI, one engineer at a time.
          </p>
        </div>
      </footer>
    </main>
  )
}
