import Image from 'next/image';
import React from 'react';

interface Logo {
  src: string;
  alt: string;
  height?: string; // Add an optional height property for individual logos
}

interface LogoMarqueeProps {
  logos: Logo[];
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
  return (
    <>
      {logos.map((logo, index) => (
        <li key={index}>
          <Image
            className={`${logo.height || 'h-8'} w-auto mx-6 lg:mx-2 md:mx-5`}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
          />
        </li>
      ))}
    </>
  );
};

export default LogoMarquee;
