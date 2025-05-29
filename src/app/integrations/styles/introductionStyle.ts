import theme from '../../../theme';

const introductionStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '0rem', md: '0rem' },
   gap: '2rem',
   alignItems: 'center',
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
   paddingBottom: { xs: '2rem', sm: '4rem' },
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
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   marginBottom: '1rem',
   color: theme.palette.text.primary,
   textAlign: 'center',
   position: 'relative',
   paddingBottom: '1rem',
 },
 description: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   color: '#6b7280',
   marginBottom: '1rem',
   lineHeight: 1.6,
   textAlign: 'center',
 },
 highlightText: {
   fontWeight: 600,
   color: '#0d9488',
   position: 'relative',
   padding: '0 2px',
   transition: 'all 0.3s ease',
 },
};

export default introductionStyle;