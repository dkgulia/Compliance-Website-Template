'use client';
import React from 'react';
import {
 Box,
 Typography,
 Grid,
 Card,
 CardContent,
 CardActions,
 Button,
 Divider,
} from '@mui/material';
import talkToExpertDoraStyle from '../styles/talkToExpertDoraStyle';

export default function TalkToAnExpertDora() {
 return (
   <Box sx={talkToExpertDoraStyle.container}>
     <Box sx={talkToExpertDoraStyle.innerBox}>
       <Typography variant="h4" sx={talkToExpertDoraStyle.title}>
         Talk to an Expert About DORA
       </Typography>
       <Typography variant="body1" sx={talkToExpertDoraStyle.subtitle}>
         Ready to elevate your operational resilience and stay ahead of EU
         regulations? Connect with our specialized team for a tailored DORA
         strategy.
       </Typography>

       <Grid container spacing={{ xs: 2, md: 3 }} sx={talkToExpertDoraStyle.gridContainer}>
         <Grid size={{ xs: 12, sm: 4 }}>
           <Card sx={talkToExpertDoraStyle.card}>
             <CardContent>
               <Typography variant="h5" sx={talkToExpertDoraStyle.cardTitle}>
                 Get a Quote
               </Typography>
               <Divider sx={talkToExpertDoraStyle.divider} />
               <Typography
                 variant="body2"
                 sx={talkToExpertDoraStyle.cardDescription}
               >
                 Share your compliance needs in a short form, and our experts
                 will reply within one business day with a tailored plan.
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="outlined"
                 fullWidth
                 href="support@compliancehub.io"
                 sx={talkToExpertDoraStyle.buttonOutlined}
               >
                 Email Us
               </Button>
             </CardActions>
           </Card>
         </Grid>

         <Grid size={{ xs: 12, sm: 4 }}>
           <Card sx={talkToExpertDoraStyle.card}>
             <CardContent>
               <Typography variant="h5" sx={talkToExpertDoraStyle.cardTitle}>
                 Schedule a Call
               </Typography>
               <Divider sx={talkToExpertDoraStyle.divider} />
               <Typography
                 variant="body2"
                 sx={talkToExpertDoraStyle.cardDescription}
               >
                 Prefer discussing your unique environment? Book a call at a
                 time that suits you best, and get direct guidance.
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="outlined"
                 fullWidth
                 href="https://cal.com/compliancehub/demo"
                 sx={talkToExpertDoraStyle.button}
               >
                 Book a Call
               </Button>
             </CardActions>
           </Card>
         </Grid>

         <Grid size={{ xs: 12, sm: 4 }}>
           <Card sx={talkToExpertDoraStyle.card}>
             <CardContent>
               <Typography variant="h5" sx={talkToExpertDoraStyle.cardTitle}>
                 Instant Chat
               </Typography>
               <Divider sx={talkToExpertDoraStyle.divider} />
               <Typography
                 variant="body2"
                 sx={talkToExpertDoraStyle.cardDescription}
               >
                 Have a quick question? Use our chat support for fast responses
                 during normal business hours (Mon-Sat, 9am-7pm).
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="outlined"
                 fullWidth
                 href="https://cal.com/compliancehub/demo"
                 sx={talkToExpertDoraStyle.buttonOutlined}
               >
                 Chat Now
               </Button>
             </CardActions>
           </Card>
         </Grid>
       </Grid>
     </Box>
   </Box>
 );
}