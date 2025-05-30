import theme from '../../../../theme';

const platformWalkthroughStyle = {
 box: {
   paddingTop: { xs: '1rem', sm: '3rem' },
   paddingBottom: { xs: '1rem', sm: '3rem' },
   backgroundColor: theme.palette.background.default,
 },
 container: {
   maxWidth: '75rem',
   marginX: 'auto',
   px: { xs: '0.5rem', sm: '2rem' },
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   gap: { xs: '1rem', md: '2rem' },
 },
 headerBox: {
   textAlign: 'center' as const,
   maxWidth: '50rem',
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   marginBottom: '1rem',
 },
 subheading: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1rem' },
   lineHeight: '1.6',
   marginBottom: '1.5rem',
 },
 carouselContainer: {
   width: '100%',
   maxWidth: '1000px',
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '1rem', md: '1.5rem' },
 },
 navigationArrows: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1rem',
 },
 navArrow: {
   color: theme.palette.text.primary,
   backgroundColor: '#17171799',
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '6px', md: '8px' },
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
   fontSize: { xs: '0.8rem', md: '0.875rem' },
 },
 slideContent: {
   width: '100%',
   position: 'relative' as const,
 },
 slide: {
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '1rem', md: '1.5rem' },
   alignItems: 'center',
 },
 imagePlaceholder: {
   width: '100%',
   height: { xs: '15rem', md: '20rem' },
   backgroundColor: '#17171799',
   borderRadius: '0.75rem',
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
   fontWeight: 600,
   fontSize: { xs: '0.85rem', md: '1rem' },
 },
 dotsContainer: {
   display: 'flex',
   justifyContent: 'center',
   gap: '0.5rem',
   marginTop: '1rem',
 },
 dot: {
   width: '8px',
   height: '8px',
   borderRadius: '50%',
   backgroundColor: theme.palette.divider,
   cursor: 'pointer',
   transition: 'all 0.2s',
 },
};

export default platformWalkthroughStyle;