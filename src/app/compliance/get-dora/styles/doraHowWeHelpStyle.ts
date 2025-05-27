import theme from '../../../../theme';

const doraHowWeHelpStyle = {
 cardContainer: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'flex-start',
 },
 container: {
   background: theme.palette.background.default,
   padding: { xs: '0.5rem', md: '1rem' }
 },
 innerContainer: {
   maxWidth: '75rem',
   textAlign: { xs: 'center', sm: 'center' },
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   color: '#ffffff',
   marginBottom: { xs: '0.75rem', md: '1rem' },
 },
 subtitle: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1rem' },
   lineHeight: 1.6,
   marginBottom: { xs: '1.5rem', md: '2rem' },
 },
 grid: {
   marginTop: { xs: '0.75rem', md: '1rem' },
 },
 card: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', md: '1rem' },
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
   minHeight: { xs: '5rem', md: '6rem' },
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
   },
 },
 cardContent: {
   padding: { xs: '0.5rem !important', md: '0.1rem !important' },
 },
 cardTitle: {
   fontWeight: 'bold',
   color: '#ffffff',
   fontSize: { xs: '14px', md: '1rem' },
   marginBottom: { xs: '0.25rem', md: '0.25rem' },
   width: '100%',
   textAlign: 'left',
 },
 cardDescription: {
   color: '#6B7280',
   fontSize: { xs: '12px', md: '0.8rem' },
   lineHeight: 1.5,
   width: '100%',
   textAlign: 'left',
 },
};

export default doraHowWeHelpStyle;