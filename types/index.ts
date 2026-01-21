export interface ServiceCard {
  id: string
  number: string
  title: string
  description: string
  capabilities: string[]
  metrics: {
    label: string
    value: string
    description: string
  }[]
  techStack: string[]
}

export interface CaseStudy {
  id: string
  number: string
  title: string
  description: string
  impact: {
    metric: string
    description: string
  }[]
  techStack: string[]
  link: string
}

export interface SocialLink {
  platform: string
  url: string
  ariaLabel: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
}
