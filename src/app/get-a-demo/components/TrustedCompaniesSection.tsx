'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import trustedCompaniesSectionStyle from '../styles/trustedCompaniesSectionStyle';
import Image from 'next/image';

const logos = [
 { src: "/images/finstackk-logo.png", alt: 'Finstackk' },
 { src: "/images/dartle-logo.png", alt: 'Dartle' },
 { src: "/images/ccs-global-logo.png", alt: 'CCS Global Tech' },
 { src: "/images/itpa-logo.png", alt: 'ITPA' },
 { src: "/images/intain-logo.png", alt: 'Intain' },
 { src: "/images/indivillage-logo.png", alt: 'Indivillage' },
 { src: "/images/pazcare-logo.png", alt: 'Pazcare' },
];

const TrustedCompaniesSection: React.FC = () => {
   return (
       <Box component="section" sx={trustedCompaniesSectionStyle.section}>
           <Box sx={trustedCompaniesSectionStyle.headerContainer}>
               <Typography sx={trustedCompaniesSectionStyle.tagline}>
                   TRUSTED PARTNERS
               </Typography>
               <Typography sx={trustedCompaniesSectionStyle.title}>
                   Trusted by fast-growing companies worldwide
               </Typography>
           </Box>

           <Box sx={trustedCompaniesSectionStyle.marqueeOuter}>
               <Box sx={trustedCompaniesSectionStyle.marqueeContainer}>
                   {logos.map((logo, index) => (
                       <Box key={index} sx={trustedCompaniesSectionStyle.logoBox}>
                           <Image
                               src={logo.src}
                               alt={logo.alt}
                               width={140}
                               height={40}
                               style={trustedCompaniesSectionStyle.logoImageStyle}
                           />
                       </Box>
                   ))}

                   {logos.map((logo, index) => (
                       <Box key={`dup-${index}`} sx={trustedCompaniesSectionStyle.logoBox}>
                           <Image
                               src={logo.src}
                               alt={logo.alt}
                               width={140}
                               height={40}
                               style={trustedCompaniesSectionStyle.logoImageStyle}
                           />
                       </Box>
                   ))}
               </Box>
           </Box>
       </Box>
   );
};

export default TrustedCompaniesSection;