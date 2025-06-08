import { Theme } from '@mui/material';

const createCtaSectionStyle = (theme: Theme) => ({
 container: {
   padding: { xs: '1.5rem 0.5rem', md: '5rem 2rem' },
   backgroundColor: theme.palette.background.default,
   marginTop: { xs: '1rem', sm: '2rem' },
   marginBottom: { xs: '1rem', sm: '2rem' },

 },
 content: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   textAlign: 'center' as const,
   maxWidth: '800px',
   margin: '0 auto',
 },
 title: {
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', md: '2.25rem' },
   fontWeight: 600,
   marginBottom: { xs: '0.75rem', sm: '1rem' },
 },
 description: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1.125rem' },
   marginBottom: { xs: '1.5rem', sm: '2rem' },
   maxWidth: '600px',
 },
 button: {
   backgroundColor: '#115e59',
   color: '#f9fafb',
   fontWeight: '600',
   padding: { xs: '0.5rem 1.5rem', sm: '0.75rem 2rem' },
   fontSize: { xs: '0.85rem', sm: '1rem' },
   borderRadius: '0.5rem',
   border: '1px solid #0d9488',
   textTransform: 'none' as const,
   '&:hover': {
     backgroundColor: '#0f766e',
   },
 },
});

export default createCtaSectionStyle;