import theme from '../../../theme';

const categoriesStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '3.5rem', md: '6rem' },
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
   marginBottom: '3rem',
   textAlign: 'center',
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textAlign: 'center',
   textTransform: 'uppercase',
 },
 title: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   textAlign: 'center',
 },
 subtitle: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   color: '#6b7280',
   lineHeight: 1.6,
   textAlign: 'center',
 },
 card: {
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   padding: { xs: '1.5rem', sm: '2rem' },
   borderRadius: '0.5rem',
   backgroundColor: '#171717',
   border: '1px solid #374151',
   transition: 'transform 0.3s ease, border-color 0.3s ease',
   height: '100%',
   '&:hover': {
     transform: 'translateY(-5px)',
     borderColor: '#0d9488',
   },
 },
 iconContainer: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '60px',
   height: '60px',
   borderRadius: '12px',
   backgroundColor: '#115e59',
   flexShrink: 0,
 },
 icon: {
   fontSize: '24px',
   color: 'white',
 },
 cardTitle: {
   fontSize: '1.125rem',
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
 },
 cardDescription: {
   fontSize: '0.875rem',
   color: '#6b7280',
   lineHeight: 1.7,
   flex: 1,
 },
};

export default categoriesStyle;