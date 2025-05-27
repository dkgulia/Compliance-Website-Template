import theme from '../../../../theme';

const gdprBookNowStyle = {
 container: {
   backgroundColor: theme.palette.background.default,
   padding: { xs: '0.5rem', sm: '0px' },
 },
 innerContainer: {
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: { xs: '1rem', md: '3rem' },
   borderRadius: { xs: '0.75rem', sm: '8px' },
   padding: { xs: '0.75rem', sm: '2.5rem' },
 },
 imageBox: {
   flex: 1,
   display: { xs: 'none', md: 'flex' },
   justifyContent: 'center',
   alignItems: 'center',
 },
 imageWrapper: {
   position: 'relative',
   width: '100%',
   maxWidth: '420px',
   height: 'auto',
   borderRadius: { xs: '0.75rem', sm: '8px' },
   overflow: 'hidden',
 },
 imageStyle: {
   width: '100%',
   height: 'auto',
   objectFit: 'cover' as const,
   borderRadius: { xs: '0.75rem', sm: '8px' },
 },
 textBox: {
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.75rem', sm: '1.5rem' },
 },
 tagline: {
   display: 'inline-block',
   padding: { xs: '0.3rem 0.6rem', sm: '0.4rem 0.8rem' },
   borderRadius: '1rem',
   fontSize: { xs: '0.85rem', sm: '0.9rem' },
   backgroundColor: theme.palette.secondary.light,
   color: theme.palette.text.primary,
   fontWeight: 600,
   width: 'fit-content',
 },
 title: {
   fontWeight: { xs: 600, sm: 700 },
   fontSize: { xs: '1.4rem', sm: '2.2rem', md: '2.2rem' },
   color: theme.palette.text.primary,
   lineHeight: 1.2,
 },
 points: {
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.5rem', sm: '1rem' },
 },
 point: {
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   padding: { xs: '0.5rem 0.75rem', sm: '0.75rem 1rem' },
   borderRadius: { xs: '0.75rem', sm: '6px' },
   border: `1px solid ${theme.palette.divider}`,
 },
 icon: {
   color: '#fffff',
   fontSize: { xs: '1rem', sm: '1.3rem' },
 },
 pointText: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.95rem' },
   lineHeight: 1.5,
 },
 buttonContainer: {
   marginTop: { xs: '0.25rem', sm: '0.5rem' },
 },
 button: {
   backgroundColor: '#115e59',
   color: '#f9fafb',
   borderRadius: '0.5rem',
   padding: {
     xs: '0.2rem 0.4rem',
     sm: '0.375rem 0.75rem',
     md: '0.25rem 1rem',
   },
   textTransform: 'none',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   whiteSpace: 'nowrap',
   border: '1px solid #0d9488',
   transition: 'all 150ms ease',
   width: { xs: '100%', sm: 'auto' },
   '&:hover': {
     backgroundColor: '#0f766e',
   },
 },
};

export default gdprBookNowStyle;