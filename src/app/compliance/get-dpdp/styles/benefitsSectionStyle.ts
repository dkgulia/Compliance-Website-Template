import { Theme } from '@mui/material';

const createBenefitsSectionStyle = (theme: Theme) => ({
 box: {
   paddingTop: { xs: '0.5rem', sm: '1rem' },
   paddingBottom: { xs: '0.5rem', sm: '1rem' },

 },
 container: {
   position: 'relative',
   display: 'flex',
   flexDirection: 'column' as const,
 },
 containerBox: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', sm: '3rem' },
   width: { xs: '100%', md: '80%' },
   margin: '0 auto',
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
 },
 subheading: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   color: '#6B7280',
   marginBottom: { xs: '1rem', sm: '2rem',md:'0.5rem' },
   maxWidth: '800px',
   marginLeft: 'auto',
   marginRight: 'auto',
 },
 card: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '0.5rem', sm: '1rem' },
   height: '100%',
   minHeight: { xs: '10rem', sm: '15rem' },
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   },
 },
 contentWrapper: {
   display: 'flex',
   flexDirection: 'column' as const,
   padding: { xs: '0.5rem', sm: '1rem' },
   height: '100%',
 },
 iconContainer: {
   width: { xs: '35px', sm: '50px' },
   height: { xs: '35px', sm: '50px' },
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '0.5rem',
   marginBottom: { xs: '1rem', sm: '1.5rem' },
   '& svg': {
     fontSize: { xs: '20px', sm: '28px' },
     color: 'white',
   },
 },
 icon: {
   fontSize: { xs: '20px', sm: '28px' },
   color: 'white',
 },
 typography: {
   container: {
     textAlign: 'left' as const,
     width: '100%',
   },
   title: {
     fontWeight: 'bold' as const,
     color: '#ffffff',
     marginBottom: { xs: '0.5rem', sm: '0.75rem' },
     fontSize: { xs: '14px', sm: '1.25rem' },
     width: '100%',
     textAlign: 'left' as const,
   },
   body: {
     color: '#6B7280',
     textAlign: 'left' as const,
     fontSize: { xs: '12px', sm: '1rem' },
     lineHeight: 1.6,
     width: '100%',
   },
 },
});

export default createBenefitsSectionStyle;