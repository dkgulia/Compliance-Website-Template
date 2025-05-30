'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/infoSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import dualHexImage from '../images/trustSecurity.png';

const InfoSection1: React.FC = () => {
 const data = trustCenterPageData.sections.infoSection1;

 return (
   <Box sx={styles.section}>
     <Box sx={styles.innerBox}>
       <Box sx={styles.contentLeft}>
         <Typography sx={styles.tagline}>
           {data.tagline}
         </Typography>

         <Typography sx={styles.title}>
           {data.title}
         </Typography>

         {data.description.map((desc, index) => (
           <Typography key={index} sx={styles.description}>
             {desc}
           </Typography>
         ))}
       </Box>

       <Box sx={styles.imageRight}>
         <Box sx={styles.imageContainer}>
           <Image
             src={dualHexImage}
             alt="Security showcase"
             fill
             style={{
               objectFit: 'contain',
             }}
             priority
           />
         </Box>
       </Box>
     </Box>
   </Box>
 );
};

export default InfoSection1;