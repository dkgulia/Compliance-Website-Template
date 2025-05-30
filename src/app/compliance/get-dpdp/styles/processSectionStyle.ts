import { Theme } from '@mui/material';

const createProcessSectionStyle = (theme: Theme) => ({
 section: {
   paddingTop: { xs: '0.5rem', sm: '1rem' },
   paddingBottom: { xs: '0.5rem', sm: '1rem' },
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
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
   marginBottom: '0.5rem',
 },
 subHeading: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   color: '#6B7280',
   marginBottom: { xs: '1.25rem', sm: '2.5rem' },
   maxWidth: '800px',
   marginLeft: 'auto',
   marginRight: 'auto',
 },
 stepCard: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '1rem', sm: '1.5rem' },
   height: '100%',
   minHeight: { xs: '10rem', sm: '16rem' },
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
 stepNumberContainer: {
   width: { xs: '35px', sm: '50px' },
   height: { xs: '35px', sm: '50px' },
   backgroundColor: '#115e59',
   borderRadius: '50%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '1rem', sm: '1.5rem' },
 },
 stepNumber: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: { xs: '1.2rem', sm: '1.5rem' },
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   textAlign: 'left' as const,
   width: '100%',
 },
 stepTitle: {
   fontWeight: 'bold',
   color: '#ffffff',
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   fontSize: { xs: '14px', sm: '1.25rem' },
   width: '100%',
   textAlign: 'left' as const,
 },
 stepDescription: {
   color: '#6B7280',
   textAlign: 'left' as const,
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.6,
   width: '100%',
 },
});

export default createProcessSectionStyle;