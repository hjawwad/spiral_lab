'use client'

import Link from 'next/link'
import { contactInfo } from '@/data/contact'

export function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-slate-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-electric-lime text-base font-medium font-display mb-3">
              SPIRAL LAB
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Architecting AI systems for organizations building the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 text-sm font-medium mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/internship"
                  className="text-electric-lime hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-1"
                >
                  Join Our Internship Program
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 text-sm font-medium mb-3 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <p className="text-white/60 text-sm">{contactInfo.location}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Spiral Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-electric-lime transition-colors text-sm"
                aria-label={link.ariaLabel}
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
