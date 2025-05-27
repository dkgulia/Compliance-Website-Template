import theme from '../../../../theme';

const DoraRoadmapStyle = {
 container: {
   paddingTop: { sm: '1rem', xs: '0.5rem' },
   paddingBottom: { sm: '1rem', xs: '0.5rem' },
   marginTop: '0rem',
   background: theme.palette.background.default,
 },
 innerBox: {
   maxWidth: '75rem',
   marginX: 'auto',
   marginTop: { xs: '0.5rem', md: '1rem' },
   textAlign: { xs: 'center', sm: 'center' },
   background: '#17171799',
   borderRadius: { xs: '0rem', md: '2rem' },
   padding: { xs: '0.5rem', sm: '2rem' },
 },
 heading: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   marginBottom: { xs: '1rem', md: '1.5rem' },
   color: theme.palette.text.primary,
 },
 gridContainer: {
   marginTop: { xs: '0.75rem', md: '1rem' },
 },
 card: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', md: '1rem' },
   padding: { xs: '0.75rem', md: '1rem' },
   height: '100%',
   minHeight: { xs: '8rem', md: '12rem' },
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'translateY(-0.25rem)',
     boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
   },
 },
 cardTitle: {
   fontWeight: 'bold',
   color: 'white',
   marginBottom: { xs: '0.375rem', md: '0.5rem' },
   fontSize: { xs: '14px', md: '1.1rem' },
 },
 cardDescription: {
   color: theme.palette.text.muted,
   fontSize: { xs: '12px', md: '0.95rem' },
   lineHeight: 1.6,
 },
};

export default DoraRoadmapStyle;