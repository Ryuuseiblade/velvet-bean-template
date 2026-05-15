/** Shared types for site configuration — rarely need editing. */

export type NavLink = {
  href: string;
  label: string;
};

export type MenuItem = {
  id: string;
  name: string;
  note: string;
  price: string;
  tag: string;
};

export type GalleryImage = {
  id: string;
  /** Image URL or path under /public (e.g. "/images/hero.jpg") */
  src: string;
  alt: string;
  /** Tailwind classes for masonry grid span and min-height */
  gridClass: string;
  /** Set true for the largest gallery cell (loads with priority) */
  priority?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactInfoBlock = {
  id: string;
  label: string;
  lines?: string[];
  email?: string;
};
