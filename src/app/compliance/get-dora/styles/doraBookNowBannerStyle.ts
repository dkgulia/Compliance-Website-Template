import theme from '../../../../theme';

const doraBookNowBannerStyle = {
 box: {
   backgroundColor: theme.palette.background.default,
   paddingY: { xs: '1rem', sm: '2.5rem' },
   position: 'relative',
 },
 container: {
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row' },
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '95%',
   maxWidth: '72rem',
   margin: '0 auto',
   borderRadius: { xs: '0.75rem', md: '1rem' },
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '1rem', sm: '2rem' },
   gap: { xs: '1rem', md: '1.5rem' },
   overflow: 'hidden',
 },
 content: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: { xs: 'center', sm: 'flex-start' },
   textAlign: { xs: 'center', sm: 'left' },
   gap: { xs: '0.75rem', md: '1rem' },
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
   marginTop: { xs: '0.5rem', md: '1rem' },
   backgroundColor: '#115e59',
   color: '#f9fafb',
   borderRadius: '0.5rem',
   padding: {
     xs: '0.25rem 0.5rem',
     sm: '0.375rem 0.75rem',
     md: '0.25rem 1rem',
   },
   textTransform: 'none',
   fontSize: { xs: '0.85rem', md: '1rem' },
   whiteSpace: 'nowrap',
   border: '1px solid #0d9488',
   transition: 'all 150ms ease',
   '&:hover': {
     backgroundColor: '#0f766e',
   },
 },
 imageWrapper: {
   position: 'relative',
   width: { xs: '0px', sm: '250px', md: '300px' },
   height: { xs: '0px', sm: '250px', md: '200px' },
   display: { xs: 'none', sm: 'flex' },
   justifyContent: 'center',
   alignItems: 'center',
 },
};

export default doraBookNowBannerStyle;