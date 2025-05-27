"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import iso27001ComplianceHubStyle from "../styles/iso27001ComplianceHubStyle";
import { iso27001Data, Step, SectionContent } from "../constants/iso27001Data";

const Iso27001ComplianceHub: React.FC = () => {
 const section = iso27001Data.sections.find((sec) => sec.Sno === "11");
 if (!section) return null;

 const { title, subtitle, steps } = section.content as SectionContent;

 return (
   <Box sx={iso27001ComplianceHubStyle.box}>
     <Container sx={iso27001ComplianceHubStyle.container}>
       <Box sx={iso27001ComplianceHubStyle.containerBox}>
         <Typography component="h2" variant="h4" sx={iso27001ComplianceHubStyle.heading}>
           {title}
         </Typography>

         <Typography variant="body1" sx={iso27001ComplianceHubStyle.subHeading}>
           {subtitle}
         </Typography>
       </Box>

       <Grid container spacing={{ xs: 2, sm: 4 }}>
         {steps.map((item: any, index: number) => (
            <Grid size={{xs:12,sm:6,md:4}}  key={index}>
             <Box sx={iso27001ComplianceHubStyle.stepContainer}>
               <Box sx={iso27001ComplianceHubStyle.iconContainer}>
                 <item.icon sx={iso27001ComplianceHubStyle.icon} />
               </Box>

               <Typography variant="body1" sx={iso27001ComplianceHubStyle.title}>
                 {item.title}
               </Typography>

               <Typography variant="body2" sx={iso27001ComplianceHubStyle.description}>
                 {item.description}
               </Typography>
             </Box>
           </Grid>
         ))}
       </Grid>
     </Container>
   </Box>
 );
};

export default Iso27001ComplianceHub;