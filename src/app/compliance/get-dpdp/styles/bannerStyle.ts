import { Theme } from '@mui/material';

const createBannerStyle = (theme: Theme) => ({
 box: {
   backgroundColor: theme.palette.background.default,
   paddingY: { xs: '0.5rem', sm: '2.5rem' },
   position: 'relative' as any,
 },
 container: {
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row' } as any,
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '95%',
   maxWidth: '72rem',
   margin: '0 auto',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   border: { xs: 'none',md:  `1px solid ${theme.palette.divider}` },
   padding: { xs: '1rem', sm: '2rem', md: '3rem' },
   gap: '1.5rem',
   overflow: 'hidden',
 },
 content: {
   display: 'flex',
   flexDirection: 'column' as any,
   alignItems: { xs: 'center', sm: 'flex-start' } as any,
   textAlign: { xs: 'center', sm: 'left' } as any,
   gap: { xs: '0.5rem', sm: '1rem' },
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: 'white',
 },
 description: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   lineHeight: '1.5',
   maxWidth: { xs: '100%', sm: '30rem' },
 },
 button: {
   marginTop: { xs: '0.5rem', sm: '1rem' },
   backgroundColor: '#115e59',
   color: '#f9fafb',
   borderRadius: '0.5rem',
   padding: {
     xs: '0.25rem 0.5rem',
     sm: '0.375rem 0.75rem',
     md: '0.25rem 1rem',
   },
   textTransform: 'none' as any,
   fontSize: { xs: '0.85rem', sm: '1rem' },
   whiteSpace: 'nowrap' as any,
   border: '1px solid #0d9488',
   transition: 'all 150ms ease',
   '&:hover': {
     backgroundColor: '#0f766e',
   },
 },
 imageWrapper: {
   position: 'relative' as any,
   width: { xs: '0px', sm: '250px', md: '300px' },
   height: { xs: '0px', sm: '250px', md: '200px' },
   display: { xs: 'none', sm: 'flex' },
   justifyContent: 'center',
   alignItems: 'center',
 },
 imagePlaceholder: {
   width: '100%',
   height: '100%',
   backgroundColor: '#17171799',
   borderRadius: '8px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   border: `1px solid ${theme.palette.divider}`,
 },
});

export default createBannerStyle;