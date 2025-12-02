//Nav schema
export const NAV_SCHEMA = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Features',
    link: '/features',
  },
  {
    name: 'About us',
    link: '/about-us',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
];

// Footer Schema
export const footerSectionSchema = [
  {
    title: 'Company Info',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'About us', href: '/about-us' },
      { label: 'Contact Us', href: '/' },
    ],
  },
  {
    title: 'For Agents',
    links: [
      { label: 'Become An Agent', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms and Conditions', href: '/' },
      { label: 'FAQS', href: '/faq' },
    ],
  },
  {
    title: 'For Buyers',
    links: [
      { label: 'Become a Buyer', href: '/' },
      { label: 'FAQS', href: '/faq' },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/onecart_uk?igsh=bGUxcWcxYzIyYTBi',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/share/16HCaFFKy9/?mibextid=wwXIfr',
      },
      {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/company/onecartuk/',
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@onecart.me?_t=ZN-90thpsgPAda&_r=1',
      },
      {
        label: 'X',
        href: 'https://x.com/onecart_me?s=21',
      },
    ],
  },
];

// Faq Schema
export const BUYER_FAQ_SCHEMA = [
  { id: 1, question: 'Is my Information secure?' },
  { id: 2, question: 'How does the property inspection process work?' },
  { id: 3, question: 'Can I pay installmentally?' },
  { id: 4, question: 'What types of properties are available?' },
];
export const AGENTS_FAQ_SCHEMA = [
  { id: 1, question: 'Is my Information secure?' },
  { id: 2, question: 'How does the property inspection process work?' },
  { id: 3, question: 'Can I pay installmentally?' },
  { id: 4, question: 'What types of properties are available?' },
];

// propertyMenu
export const categories = [
  {
    name: 'Homes',
    value: 'homes',
  },
  {
    name: 'Lands',
    value: 'lands',
  },
  {
    name: 'Hotels',
    value: 'hotel`',
  },
  {
    name: 'Shopping Complexes',
    value: 'shopping',
  },
  {
    name: 'Recreational Centers',
    value: 'recreational',
  },
  {
    name: 'Office Spaces',
    value: 'office',
  },
];
