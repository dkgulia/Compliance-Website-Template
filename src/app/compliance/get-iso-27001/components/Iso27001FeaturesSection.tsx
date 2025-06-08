"use client";
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import featuresSectionStyle from "../styles/featuresSectionStyle";
import { iso27001Data } from "../constants/iso27001Data";
import * as Icons from "@mui/icons-material";

const Iso27001FeaturesSection: React.FC = () => {
   const featureBlock = iso27001Data.sections.find(
       (section) => section.Sno === "2" && section.blockType === "Features/Benefits"
   );

   if (!featureBlock) return null;

   return (
       <Box sx={featuresSectionStyle.box}>
           <Container sx={featuresSectionStyle.container}>
               <Box sx={featuresSectionStyle.containerBox}>
                   <Typography component="h2" variant="h4" sx={featuresSectionStyle.heading}>
                       {featureBlock.content.title}
                   </Typography>
                   {featureBlock.content.subtitle && (
                       <Typography variant="body1" sx={featuresSectionStyle.subheading}>
                           {featureBlock.content.subtitle}
                       </Typography>
                   )}
               </Box>

               <Grid container spacing={{ xs: 2, sm: 3 }}>
                   {featureBlock.content.features &&
                       featureBlock.content.features.map((feature: any, index: number) => {
                           const IconComp = (Icons as any)[feature.muiIcon] || Icons.Stars;

                           return (
                               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                   <Card variant="outlined" sx={featuresSectionStyle.card}>
                                       <CardContent sx={{
                                           padding: { xs: '0 !important', sm: '1rem !important' },
                                           height: '100%',
                                           display: 'flex',
                                           flexDirection: 'column',
                                           alignItems: { xs: 'flex-start', sm: 'center' }
                                       }}>
                                           <Box sx={featuresSectionStyle.iconContainer}>
                                               <IconComp sx={{ fontSize: { xs: "1.25rem", sm: "2rem" }, color: "#FFFFFF" }} />
                                           </Box>

                                           <Box sx={featuresSectionStyle.typography.container}>
                                               <Typography variant="h6" sx={featuresSectionStyle.typography.title}>
                                                   {feature.title}
                                               </Typography>
                                               <Typography
                                                   variant="body2"
                                                   sx={featuresSectionStyle.typography.body}
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

export default Iso27001FeaturesSection;