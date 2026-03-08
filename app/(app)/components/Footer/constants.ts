/**
 * Footer Component Constants
 * Centralized configuration for footer content and layout
 */

export const FOOTER_SECTIONS = {
  BOUTIQUE: {
    title: 'BOUTIQUE',
    link : 'https://www.atelierinfonumerik.fr/boutique/',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Mentions légales', href: 'https://www.atelierinfonumerik.fr/mentions-legales/' },
      { label: 'CGV', href: 'https://www.atelierinfonumerik.fr/cgv/' },
      { label: 'Confidentialité', href: 'https://www.atelierinfonumerik.fr/confidentialite/' },
      { label: 'Cookies', href: 'https://www.atelierinfonumerik.fr/cookies/' },
      { label: 'Plan du site', href: 'https://www.atelierinfonumerik.fr/plan-du-site/' },
    ],
  },
  INFORMATIQUE: {
    title: 'INFORMATIQUE',
    link: 'https://www.atelierinfonumerik.fr/informatique/',
    links: [
      { label: 'Équipement IT', href: 'https://www.atelierinfonumerik.fr/equipements-it/' },
      { label: 'Sécurité et Réseaux', href: 'https://www.atelierinfonumerik.fr/reseaux/' },
      { label: 'Service Cloud', href: 'https://www.atelierinfonumerik.fr/service-cloud/' },
      { label: 'Intégration', href: 'https://www.atelierinfonumerik.fr/infogerance/' },
      { label: 'Téléphonie et Tablette', href: 'https://www.atelierinfonumerik.fr/telephonie-et-tablette/' },
      { label: 'Télésurveillance et Maintenance', href: 'https://www.atelierinfonumerik.fr/teleassistance-et-maintenance/' },
    ],
  },
  ELECTRONIQUE: {
    title: 'ÉLECTRONIQUE',
    link:'https://www.atelierinfonumerik.fr/electronique/',
    links: [
      { label: 'Récupération de données', href: 'https://www.atelierinfonumerik.fr/recuperation-de-donnees/' },
      { label: 'Domotique', href: 'https://www.atelierinfonumerik.fr/domotique/' },
      { label: 'Micro-structure', href: 'https://www.atelierinfonumerik.fr/micro-soudure/' },
      { label: 'Contrôle d\'accès', href: 'https://www.atelierinfonumerik.fr/controle-dacces/' },
      { label: 'Alarme', href: 'https://www.atelierinfonumerik.fr/alarme/' },
      { label: 'Vidéosurveillance', href: 'https://www.atelierinfonumerik.fr/videosurveillance/' },
    ],
  },
  GRAPHIQUE_WEB: {
    title: 'GRAPHIQUE ET WEB',
    link:'https://www.atelierinfonumerik.fr/graphique-et-web/',
    links: [
      { label: 'Site web', href: 'https://www.atelierinfonumerik.fr/site-web/' },
      { label: 'Identité visuelle', href: 'https://www.atelierinfonumerik.fr/identite-visuelle/' },
      { label: 'Référencement digital', href: 'https://www.atelierinfonumerik.fr/marketing-digital/' },
      { label: 'Support print', href: 'https://www.atelierinfonumerik.fr/support-print/' },
      { label: 'Vidéo', href: 'https://www.atelierinfonumerik.fr/video/' },
      { label: 'Innovation digitale', href: 'https://www.atelierinfonumerik.fr/innovation-digitale/' },
    ],
  },
  SERVICES: {
    title: 'NOS SERVICES',
    link:'https://www.atelierinfonumerik.fr/nos-services/',
    links: [
      { label: 'À PROPOS', href: 'https://www.atelierinfonumerik.fr/la-fine-equipe/', color : 'white' , font : 'bold' },
      { label: 'BLOG', href: 'https://www.atelierinfonumerik.fr/blog-2/' , color : 'white' , font : 'bold'},
      { label: 'FORMATION', href: 'https://www.atelierinfonumerik.fr/formation/', color : 'white' , font : 'bold' },
      { label: 'ASSISTANCE CLIENT', href: 'https://www.atelierinfonumerik.fr/assistance-client/' , color : 'white' , font : 'bold'},
      { label: 'NOUS CONTACTER', href: 'https://www.atelierinfonumerik.fr/contact/' , color : 'white' , font : 'bold'},
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
