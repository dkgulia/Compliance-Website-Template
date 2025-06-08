import { Theme } from '@mui/material';

const createScreenshotsSectionStyle = (theme: Theme) => ({
 box: {
   paddingTop: { xs: '1rem', sm: '3rem' },
   paddingBottom: { xs: '1rem', sm: '3rem' },
   backgroundColor: theme.palette.background.default,
 },
 headerBox: {
   textAlign: 'center' as const,
   maxWidth: '50rem',
   margin: '0 auto',
   marginBottom: { xs: '1rem', sm: '2rem' },
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
 },
 subheading: {
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   color: theme.palette.text.secondary,
   maxWidth: '800px',
   margin: '0 auto',
   lineHeight: 1.5,
 },
 carouselContainer: {
   width: '100%',
   maxWidth: '1000px',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '1rem', sm: '1.5rem' },
 },
 navigationArrows: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: { xs: '0.5rem', sm: '1rem' },
 },
 navArrow: {
   color: theme.palette.text.primary,
   backgroundColor: '#17171799',
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '0.5rem', sm: '0.75rem' },
   '&:hover': {
     backgroundColor: '#262626',
   },
 },
 slidePrevNext: {
   display: 'flex',
   alignItems: 'center',
   gap: '0.5rem',
 },
 slideCountText: {
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.85rem', sm: '1rem' },
 },
 slideContent: {
   width: '100%',
   position: 'relative' as const,
   minHeight: { xs: '250px', sm: '400px' },
 },
 slide: {
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '1rem', sm: '1.5rem' },
   alignItems: 'center',
 },
 imagePlaceholder: {
   width: '100%',
   height: { xs: '200px', sm: '350px' },
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.5rem', sm: '0.75rem' },
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   border: `1px solid ${theme.palette.divider}`,
 },
 captionBox: {
   width: '100%',
   textAlign: 'center' as const,
 },
 caption: {
   color: theme.palette.text.secondary,
   fontWeight: '600',
   fontSize: { xs: '0.85rem', sm: '1rem' },
 },
 dotsContainer: {
   display: 'flex',
   justifyContent: 'center',
   gap: '0.5rem',
   marginTop: { xs: '0.5rem', sm: '1rem' },
 },
 dot: {
   width: { xs: '6px', sm: '8px' },
   height: { xs: '6px', sm: '8px' },
   borderRadius: '50%',
   backgroundColor: theme.palette.divider,
   cursor: 'pointer',
   transition: 'all 0.2s',
 },
});

export default createScreenshotsSectionStyle;