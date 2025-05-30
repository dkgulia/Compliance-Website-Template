"use client";
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import controlSectionStyle from "../styles/controlSectionStyle";
import { iso27001Data } from "../constants/iso27001Data";
import * as Icons from "@mui/icons-material";

const Iso27001ControlsSection: React.FC = () => {
   const section = iso27001Data.sections.find(
       (sec) => sec.Sno === "6" && sec.blockType === "Features Block"
   );

   if (!section) return null;

   return (
       <Box sx={controlSectionStyle.box}>
           <Container sx={controlSectionStyle.container}>
               <Box sx={controlSectionStyle.containerBox}>
                   <Typography component="h2" variant="h4" sx={controlSectionStyle.heading}>
                       {section.content.title}
                   </Typography>
                   {section.content.subtitle && (
                       <Typography variant="body1" sx={controlSectionStyle.subheading}>
                           {section.content.subtitle}
                       </Typography>
                   )}
               </Box>

               <Grid container spacing={{ xs: 2, sm: 3 }}>
                   {section.content.features &&
                       section.content.features.map((feature: any, index: number) => {
                           const IconComp = (Icons as any)[feature.muiIcon] || Icons.Stars;

                           return (
                               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                   <Card variant="outlined" sx={controlSectionStyle.card}>
                                       <CardContent sx={{
                                           padding: { xs: '0 !important', sm: '1rem !important' },
                                           height: '100%',
                                           display: 'flex',
                                           flexDirection: 'column',
                                           alignItems: { xs: 'flex-start', sm: 'center' }
                                       }}>
                                           <Box sx={controlSectionStyle.iconContainer}>
                                               <IconComp sx={{ fontSize: { xs: "1.25rem", sm: "2rem" }, color: "#FFFFFF" }} />
                                           </Box>
                                           <Box sx={controlSectionStyle.typography.container}>
                                               <Typography variant="h6" sx={controlSectionStyle.typography.title}>
                                                   {feature.title}
                                               </Typography>
                                               <Typography
                                                   variant="body2"
                                                   sx={controlSectionStyle.typography.body}
                                               >
                                                   {feature.description}
                                               </Typography>
                                           </Box>
                                       </CardContent>
                                   </Card>
                               </Grid>
                           );
                       })}
               </Grid>
           </Container>
       </Box>
   );
};

export default Iso27001ControlsSection;