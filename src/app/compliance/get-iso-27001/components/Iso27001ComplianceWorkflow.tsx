"use client";
import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import iso27001ComplianceWorkflowStyle from "../styles/iso27001ComplianceWorkflowStyle";
import { iso27001Data, SectionContent } from "../constants/iso27001Data";

const Iso27001ComplianceWorkflow: React.FC = () => {
 const section = iso27001Data.sections.find((sec) => sec.Sno === "12");
 if (!section) return null;

 const { title, subtitle, steps } = section.content as SectionContent;

 return (
   <Box sx={iso27001ComplianceWorkflowStyle.box}>
     <Box sx={iso27001ComplianceWorkflowStyle.workflowContainer}>
       <Box sx={iso27001ComplianceWorkflowStyle.headerBox}>
         <Typography variant="h4" component="h2" sx={iso27001ComplianceWorkflowStyle.heading}>
           {title}
         </Typography>

         <Typography variant="body1" sx={iso27001ComplianceWorkflowStyle.subHeading}>
           {subtitle}
         </Typography>
       </Box>

       <Grid container spacing={{ xs: 2, sm: 2 }} sx={iso27001ComplianceWorkflowStyle.gridContainer}>
         {steps.map((item: any, index: number) => (
           <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
             <Box sx={iso27001ComplianceWorkflowStyle.card}>
               <Box sx={iso27001ComplianceWorkflowStyle.iconContainer}>
                 <Image src={item.image} alt={item.title} width={40} height={40} />
               </Box>
               <Typography variant="body1" sx={iso27001ComplianceWorkflowStyle.cardTitle}>
                 {item.title}
               </Typography>
             </Box>
           </Grid>
         ))}
       </Grid>
     </Box>
   </Box>
 );
};

export default Iso27001ComplianceWorkflow;