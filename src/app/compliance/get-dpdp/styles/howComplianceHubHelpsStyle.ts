import { Theme } from '@mui/material';

const createHowComplianceHubHelpsStyle = (theme: Theme) => ({
 section: {
   padding: { xs: '1rem 0.5rem', md: '4rem 2rem' },
   background: theme.palette.background.default,
   position: 'relative',
 },
 container: {
   maxWidth: '1200px',
   margin: '0 auto',
 },
 header: {
   textAlign: 'center' as any,
   marginBottom: { xs: '1.5rem', md: '3.5rem' },
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
 },
 subtitle: {
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   color: theme.palette.text.secondary,
   maxWidth: '800px',
   margin: '0 auto',
   lineHeight: 1.5,
 },
 stepCard: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '0.75rem', sm: '1rem' },
   height: '80%',
   minHeight: { xs: '7rem', sm: '11rem' },
   display: 'flex',
   flexDirection: 'column' as any,
   alignItems: 'flex-start',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   },
 },
 iconContainer: {
   width: { xs: '30px', sm: '40px' },
   height: { xs: '30px', sm: '40px' },
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '1rem', sm: '1.5rem' },
   marginTop: { xs: '0.5rem', sm: '1rem' }
 },
 stepIcon: {
   fontSize: { xs: '1.2rem', sm: '1.5rem' },
   color: '#ffffff',
 },
 stepText: {
   fontSize: { xs: '12px', sm: '1rem' },
   color: theme.palette.text.secondary,
   fontWeight: 500,
   lineHeight: 1.5,
   textAlign: 'left' as any,
 },
});

export default createHowComplianceHubHelpsStyle;