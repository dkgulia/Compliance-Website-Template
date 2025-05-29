'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import introductionStyle from '../styles/introductionStyle';
import integrationsData from '../constants/integrationsData';

const IntroductionSection: React.FC = () => {
   const { introduction } = integrationsData;
   const sectionRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   const highlightPhrases = (text: string, phrases: string[]) => {
       let parts: (string | React.ReactElement)[] = [text];
       let keyCounter = 0;

       phrases.forEach(phrase => {
           parts = parts.flatMap(part => {
               if (typeof part === 'string') {
                   const splitParts = part.split(phrase);
                   if (splitParts.length > 1) {
                       return splitParts.flatMap((subPart, index) => {
                           if (index < splitParts.length - 1) {
                               keyCounter++;
                               return [
                                   subPart,
                                   <Box
                                       component="span"
                                       key={`highlight-${phrase}-${keyCounter}`}
                                       sx={introductionStyle.highlightText}
                                   >
                                       {phrase}
                                   </Box>
                               ];
                           }
                           return [subPart];
                       });
                   }
               }
               return [part];
           });
       });

       return parts;
   };

   const highlightedPhrases = [
       'security data',
       'see more, do more, and secure more',
       'enhanced',
       'not replace',
       'seamless integration'
   ];

   useEffect(() => {
       const observer = new IntersectionObserver(
           (entries) => {
               entries.forEach(entry => {
                   if (entry.isIntersecting) {
                       setIsVisible(true);
                       observer.disconnect();
                   }
               });
           },
           { threshold: 0.2 }
       );

       if (sectionRef.current) {
           observer.observe(sectionRef.current);
       }

       return () => {
           if (sectionRef.current) {
               observer.disconnect();
           }
       };
   }, []);

   return (
       <Box sx={introductionStyle.section} ref={sectionRef}>
           <Box sx={introductionStyle.headerContainer}>
               <Typography sx={introductionStyle.tagline}>
                   ENHANCED CAPABILITIES
               </Typography>

               <Typography
                   sx={{
                       ...introductionStyle.title,
                       opacity: isVisible ? 1 : 0,
                       transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                       transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                   }}
               >
                   {introduction.title}
               </Typography>

               {introduction.description.map((paragraph, index) => (
                   <Typography
                       key={`intro-paragraph-${index}`}
                       sx={{
                           ...introductionStyle.description,
                           opacity: isVisible ? 1 : 0,
                           transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                           transition: `opacity 0.8s ease-out ${0.2 + index * 0.2}s, transform 0.8s ease-out ${0.2 + index * 0.2}s`,
                       }}
                   >
                       {highlightPhrases(paragraph, highlightedPhrases)}
                   </Typography>
               ))}

               <Box
                   sx={{
                       width: isVisible ? '80px' : '0px',
                       height: '3px',
                       backgroundColor: '#0d9488',
                       margin: '0 auto',
                       marginTop: '1rem',
                       transition: 'width 1s ease-out 0.6s',
                   }}
               />
           </Box>
       </Box>
   );
};

export default IntroductionSection;