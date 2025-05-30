import theme from '../../../theme';

const heroSectionStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   paddingTop: { xs: '8rem', sm: '8rem', md: '12rem' },
   paddingBottom: { xs: '2.5rem', sm: '2rem', md: '4rem' },
   gap: '2rem',
   alignItems: 'center',
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
 },
 headerContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '0.5rem',
   textAlign: 'center',
   maxWidth: '900px',
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textAlign: 'center',
   textTransform: 'uppercase',
   marginBottom: '0.5rem',
 },
 title: {
   fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
   fontWeight: 600,
   marginBottom: '1rem',
   color: theme.palette.text.primary,
   lineHeight: 1.2,
   textAlign: 'center',
 },
 highlight: {
   color: '#0d9488',
 },
 subtitle: {
   color: '#0d9488',
   marginBottom: '1rem',
   fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
   fontWeight: 500,
   textAlign: 'center',
 },
 description: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   color: '#6b7280',
   marginBottom: '1.5rem',
   lineHeight: 1.6,
   textAlign: 'center',
   '&:last-of-type': {
     marginBottom: '2rem',
   },
 },
 button: {
   fontSize: '0.9rem',
   padding: '0.6rem 1.2rem',
   minWidth: 'auto',
   width: 'fit-content',
   whiteSpace: 'nowrap',
 },
};

export default heroSectionStyle;
