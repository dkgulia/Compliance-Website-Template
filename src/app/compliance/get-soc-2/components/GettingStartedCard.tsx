// import React from "react";
// import { Box, Typography } from "@mui/material";
// import gettingStartedStyles from "../styles/GettingStartedStyles";

// interface StepProps {
//   step: {
//     icon: React.ElementType;
//     stepNumber: string;
//     title: string;
//   };
// }

// const StepCard: React.FC<StepProps> = ({ step }) => {
//   return (
//     <Box sx={gettingStartedStyles.card}>
//       {/* Icon */}
//       <Box sx={gettingStartedStyles.iconContainer}>
//         {React.createElement(step.icon, { sx: { fontSize: 40, color: "#FFF" } })}
//       </Box>

//       {/* Step Badge */}
//       <Box sx={gettingStartedStyles.stepBadge}>
//         <Typography sx={gettingStartedStyles.stepText}>{step.stepNumber}</Typography>
//       </Box>

//       {/* Step Title */}
//       <Typography sx={gettingStartedStyles.stepTitle}>{step.title}</Typography>
//     </Box>
//   );
// };

// export default StepCard;
