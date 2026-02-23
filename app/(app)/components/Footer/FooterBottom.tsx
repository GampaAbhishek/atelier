import React from 'react';

interface FooterSocialProps {
  socialLinks: Record<string, string>;
}

/**
 * FooterSocial Component
 * Responsible for rendering social media links
 * Follows Single Responsibility Principle
 */
const FooterSocial: React.FC<FooterSocialProps> = ({ socialLinks }) => {
  const socialIcons: Record<string, string> = {
    instagram: 'IG',
    youtube: 'YT',
    twitter: 'X',
    linkedin: 'IN',
    google: 'G',
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-tight">Nos Réseaux</h3>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {Object.entries(socialLinks).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-700 text-slate-400 text-xs font-semibold transition-all duration-200 hover:bg-slate-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 ${
              platform === 'instagram' ? 'hover:bg-gradient-to-br hover:from-red-400 hover:via-orange-400 hover:to-pink-500 hover:text-white' : ''
            }`}
            aria-label={`Suivez-nous sur ${platform}`}
          >
            {socialIcons[platform] || platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
