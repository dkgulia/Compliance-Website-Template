import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import {hipaaComplianceData} from '../constant/hipaaData';
import hipaaComplianceHubStyles from '../styles/hipaaComplianceHubStyle';

const HipaaComplianceHub: React.FC = () => {
 return (
   <Box id="hipaa-compliance-hub" sx={hipaaComplianceHubStyles.box}>
     <Container sx={hipaaComplianceHubStyles.container}>
       <Box sx={hipaaComplianceHubStyles.containerBox}>
         <Typography component="h2" variant="h4" sx={hipaaComplianceHubStyles.heading}>
           HIPAA Compliance Hub
         </Typography>
         <Typography variant="body1" sx={hipaaComplianceHubStyles.subHeading}>
           A structured approach to help healthcare organizations achieve and maintain HIPAA compliance.
         </Typography>
       </Box>
       <Grid container spacing={{ xs: 2, sm: 4 }}>
         {hipaaComplianceData.complianceHub.map(({ id, title, description, icon: Icon }) => (
           <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
             <Box sx={hipaaComplianceHubStyles.stepContainer}>
               <Box sx={hipaaComplianceHubStyles.iconContainer}>
                 <Icon sx={hipaaComplianceHubStyles.icon} />
               </Box>
               <Box sx={hipaaComplianceHubStyles.textContainer}>
                 <Typography variant="body1" sx={hipaaComplianceHubStyles.title}>
                   {title}
                 </Typography>
                 <Typography variant="body2" sx={hipaaComplianceHubStyles.description}>
                   {description}
                 </Typography>
               </Box>
             </Box>
           </Grid>
         ))}
       </Grid>
     </Container>
   </Box>
 );
};

export default HipaaComplianceHub;