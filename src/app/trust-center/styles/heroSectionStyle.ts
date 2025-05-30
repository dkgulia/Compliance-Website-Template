import theme from '../../../theme';

const heroStyles = {
 heroContainer: {
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   alignItems: 'center',
   gap: { xs: '2rem', md: '4rem' },
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   paddingTop: { xs: '8rem', sm: '8rem', md: '8rem' },
   paddingBottom: { xs: '2.5rem', sm: '2rem', md: '6rem' },
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
 },
 contentBox: {
   flex: 1,
   textAlign: { xs: 'center', md: 'left' },
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.8rem', md: '1rem' },
   maxWidth: { xs: '100%', md: '600px' },
   alignItems: { xs: 'center', md: 'flex-start' },
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textTransform: 'uppercase' as const,
   marginBottom: '0.5rem',
 },
 title: {
   fontSize: { xs: '1.8rem', md: '2.2rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   lineHeight: 1.2,
   marginBottom: { xs: '0.5rem', md: '0.8rem' },
 },
 subtitle: {
   fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
   color: '#0d9488',
   lineHeight: 1.5,
   marginBottom: { xs: '0.8rem', md: '1rem' },
 },
 description: {
   color: '#6b7280',
   fontSize: { xs: '0.95rem', md: '1rem' },
   lineHeight: 1.6,
   marginBottom: { xs: '0.5rem', md: '0.8rem' },
   '&:last-of-type': {
     marginBottom: { xs: '1.5rem', md: '2rem' },
   },
 },
 button: {
   fontSize: '0.9rem',
   padding: '0.6rem 1.2rem',
   minWidth: 'auto',
   width: 'fit-content',
   whiteSpace: 'nowrap',
   alignSelf: { xs: 'center', md: 'flex-start' },
 },
 imageBox: {
   flex: 1,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   maxWidth: { xs: '100%', md: '500px' },
   width: '100%',
 },
 imageWrapper: {
   width: '100%',
   maxWidth: '500px',
   height: { xs: '280px', sm: '350px', md: '400px' },
   position: 'relative',
   borderRadius: '1rem',
   overflow: 'hidden',
   display: 'block', // Ensure it's always displayed
 },
};

export default heroStyles;