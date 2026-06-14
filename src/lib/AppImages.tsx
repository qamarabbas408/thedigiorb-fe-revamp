import Image from 'next/image';

// Logo
export const LogoImage = () => (
  <Image
    src="/assets/figma_assets/logo.png"
    alt="Thedigiorb Logo"
    width={48}
    height={48}
    className="object-contain"
  />
);

// Hero Subject Image
export const HeroSubjectImage = () => (
  <Image
    src="/assets/figma_assets/image 1-removed-bg 1.png"
    alt="Hero Subject"
    width={340}
    height={453}
    className="object-contain w-full h-full"
  />
);

// Portrait Image for Stats
export const PortraitImage = () => (
  <Image
    src="/assets/figma_assets/image 7.png"
    alt="Portrait"
    width={56}
    height={56}
    className="object-cover rounded-full"
  />
);

// Social Icons
export const TwitterIcon = () => (
  <Image
    src="/assets/figma_assets/social (1).png"
    alt="Twitter"
    width={36}
    height={36}
    className="object-contain"
  />
);

export const LinkedInIcon = () => (
  <Image
    src="/assets/figma_assets/social (2).png"
    alt="LinkedIn"
    width={36}
    height={36}
    className="object-contain"
  />
);

export const InstagramIcon = () => (
  <span className="text-white/60 text-[10px] font-medium">IG</span>
);

// Service Girl (for services section)
export const ServiceGirlImage = () => (
  <Image
    src="/assets/figma_assets/service girl.png"
    alt="Service"
    width={400}
    height={500}
    className="object-contain"
  />
);

// Mask Group (for other sections)
export const MaskGroupImage = () => (
  <Image
    src="/assets/figma_assets/Mask group.png"
    alt="Mask Group"
    width={400}
    height={400}
    className="object-contain"
  />
);
