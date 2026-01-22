import { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:border-electric-lime hover:text-electric-lime transition-all duration-150 text-sm font-medium min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {link.platform}
        </a>
      ))}
    </div>
  )
}
