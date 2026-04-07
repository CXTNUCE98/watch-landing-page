export interface Feature {
  icon: string
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface NavLink {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
