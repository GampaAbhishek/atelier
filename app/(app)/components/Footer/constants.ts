/**
 * Footer Component Constants
 * Centralized configuration for footer content and layout
 */

export const FOOTER_SECTIONS = {
  BOUTIQUE: {
    title: 'BOUTIQUE',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Plan du site', href: '/plan-du-site' },
    ],
  },
  INFORMATIQUE: {
    title: 'INFORMATIQUE',
    links: [
      { label: 'Équipement IT', href: '/informatique/equipement' },
      { label: 'Sécurité et Réseaux', href: '/informatique/securite' },
      { label: 'Service Cloud', href: '/informatique/cloud' },
      { label: 'Intégration', href: '/informatique/integration' },
      { label: 'Téléphonie et Tablette', href: '/informatique/telephonie' },
      { label: 'Télésurveillance et Maintenance', href: '/informatique/teletravail' },
    ],
  },
  ELECTRONIQUE: {
    title: 'ÉLECTRONIQUE',
    links: [
      { label: 'Récupération de données', href: '/electronique/recuperation' },
      { label: 'Domotique', href: '/electronique/domotique' },
      { label: 'Micro-structure', href: '/electronique/micro' },
      { label: 'Contrôle d\'accès', href: '/electronique/controle' },
      { label: 'Alarme', href: '/electronique/alarme' },
      { label: 'Vidéosurveillance', href: '/electronique/video' },
    ],
  },
  GRAPHIQUE_WEB: {
    title: 'GRAPHIQUE ET WEB',
    links: [
      { label: 'Site web', href: '/web/site' },
      { label: 'Identité visuelle', href: '/web/identite' },
      { label: 'Référencement digital', href: '/web/seo' },
      { label: 'Support print', href: '/web/print' },
      { label: 'Vidéo', href: '/web/video' },
      { label: 'Innovation digitale', href: '/web/innovation' },
    ],
  },
  SERVICES: {
    title: 'NOS SERVICES',
    links: [
      { label: 'À PROPOS', href: '/apropos' },
      { label: 'BLOG', href: '/blog' },
      { label: 'FORMATION', href: '/formation' },
      { label: 'ASSISTANCE CLIENT', href: '/assistance' },
      { label: 'NOUS CONTACTER', href: '/contact' },
    ],
  },
} as const;

export const FOOTER_CONTACT = {
  phone: '+33 (0) 4 89 41 14',
  address: '23 Avenue Auguste Renoir',
  zipCity: '13300 Marseille',
  email: 'contact@atelierinfosumerik.fr',
} as const;

export const FOOTER_LEGAL = {
  copyright: '© 2025 Atelier Infosumerik - Tous droits réservés',
  disclaimer: 'Prestataire informatique de l\'ordre dans toute la France.',
  companyName: 'Atelier Infosumerik',
} as const;

export const FOOTER_SOCIAL_LINKS = {
  instagram: 'https://instagram.com/atelierinfosumerik',
  youtube: 'https://youtube.com/atelierinfosumerik',
  twitter: 'https://twitter.com/atelierinfosumerik',
  linkedin: 'https://linkedin.com/company/atelierinfosumerik',
  google: 'https://google.com/maps/search/atelierinfosumerik',
} as const;

export const FOOTER_SECTION_KEYS = [
  'BOUTIQUE',
  'INFORMATIQUE',
  'ELECTRONIQUE',
  'GRAPHIQUE_WEB',
  'SERVICES',
] as const;
