import theme from '../../../../theme';

const ccpaCtaBannerStyles = {
 box: {
   backgroundColor: theme.palette.background.default,
   paddingY: { xs: '1rem', sm: '2.5rem' },
   position: 'relative',
   marginTop: { xs: '1rem', sm: '2rem' }
 },
 bannerContainer: {
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row' },
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '95%',
   maxWidth: '72rem',
   margin: '0 auto',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '1rem', sm: '2rem', md: '3rem' },
   gap: { xs: '0.75rem', sm: '1.5rem' },
   overflow: 'hidden',
   background: '#17171799',
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: { xs: 'center', sm: 'flex-start' },
   textAlign: { xs: 'center', sm: 'left' },
   gap: { xs: '0.5rem', sm: '1rem' },
   flex: 1,
 },
 heading: {
   fontWeight: 600,
   color: theme.palette.text.primary,
   fontSize: { xs: '1.5rem', sm: '2rem' },
 },
 description: {
   color: '#6B7280',
   fontSize: { xs: '0.8rem', sm: '1rem' },
   lineHeight: '1.5',
   maxWidth: { xs: '100%', sm: '30rem' },
 },
 button: {
   marginTop: { xs: '0.5rem', sm: '1rem' },
   backgroundColor: '#115e59',
   color: '#f9fafb',
   borderRadius: '0.5rem',
   padding: {
     xs: '0.375rem 0.75rem',
     sm: '0.375rem 0.75rem',
     md: '0.25rem 1rem',
   },
   textTransform: 'none',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   whiteSpace: 'nowrap',
   border: '1px solid #0d9488',
   transition: 'all 150ms ease',
   '&:hover': {
     backgroundColor: '#0f766e',
   },
 },
 imageWrapper: {
   position: 'relative',
   width: { xs: '200px', sm: '250px', md: '300px' },
   height: { xs: '130px', sm: '250px', md: '200px' },
   display: { xs: 'none', sm: 'flex' },
   justifyContent: 'center',
   alignItems: 'center',
   flexShrink: 0,
   '& img': {
     width: '100%',
     height: '100%',
     objectFit: 'contain',
   },
 },
};

export default ccpaCtaBannerStyles;