import { Grid, Typography, Box } from '@mui/material';
import { hipaaWorkflowData } from '../constant/hipaaData';
import HipaaComplianceWorkFlowCard from './HipaaComplianceWorkFlowCard';
import hipaaComplianceWorkFlowStyles from '../styles/hipaaComplianceWorkFlowStyle';

const HipaaComplianceWorkFlow = () => {
 return (
   <Box sx={hipaaComplianceWorkFlowStyles.box}>
     <Box sx={hipaaComplianceWorkFlowStyles.workflowOuterContainer}>
       <Box sx={hipaaComplianceWorkFlowStyles.workflowContainer}>
         <Grid
           container
           spacing={4}
           sx={hipaaComplianceWorkFlowStyles.gridWrapper}
         >
           <Grid
             size={{ xs: 12, md: 5 }}
             sx={hipaaComplianceWorkFlowStyles.leftSection}
           >
             <Box sx={hipaaComplianceWorkFlowStyles.chip}>
               Succeed with Hexafort
             </Box>
             <Typography variant="h4" sx={hipaaComplianceWorkFlowStyles.title}>
               Do work that translates into true HIPAA compliance
             </Typography>
           </Grid>
           <Grid
             size={{ xs: 12, md: 7 }}
             sx={hipaaComplianceWorkFlowStyles.rightSection}
           >
             <Typography
               variant="body1"
               sx={hipaaComplianceWorkFlowStyles.description}
             >
               Leverage Hexafort to seamlessly implement HIPAA essentials in a
               structured and business-specific approach. Our experts will
               guide you every step of the way, eliminating the need for
               complex checklists. With Hexafort, you can ensure a thorough
               compliance program backed by continuous monitoring, helping you
               mitigate risks and avoid penalties.
             </Typography>
           </Grid>
         </Grid>
         <Grid
           container
           spacing={{ xs: 2, sm: 1 }}
           sx={hipaaComplianceWorkFlowStyles.gridContainer}
         >
           {hipaaWorkflowData.map((item, index) => (
             <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
               <HipaaComplianceWorkFlowCard
                 title={item.title}
                 icon={item.icon}
               />
             </Grid>
           ))}
         </Grid>
       </Box>
     </Box>
   </Box>
 );
};

export default HipaaComplianceWorkFlow;