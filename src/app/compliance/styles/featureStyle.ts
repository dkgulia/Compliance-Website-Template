import theme from '../../../theme';

const featuresStyles = {
 box: {
   py: { xs: 1, sm: 2 },
   background: theme.palette.background.default,
 },
 container: {
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: { xs: 1.5, sm: 6 },
 },
 containerBox: {
   width: { xs: '100%', sm: '80%', md: '60%' },
   textAlign: 'center',
 },
 heading: {
   fontWeight: { xs: 600, sm: 'bold' },
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', sm: '2rem' },
 },
 cardContainer: {
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'flex-start',
 },
 card: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: { xs: 'flex-start', sm: 'flex-start' },
   justifyContent: 'flex-start',
   backgroundColor: theme.palette.background.paper,
   borderRadius: { xs: '0.75rem', sm: '12px' },
   padding: { xs: '0.75rem', sm: '2rem' },
   height: '100%',
   border: `1px solid ${theme.palette.divider}`,
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   '&:hover': {
     transform: 'scale(1.05)',
     boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
     backgroundColor: theme.palette.background.paper,
   },
   textAlign: { xs: 'left', sm: 'left' },
 },
 iconContainer: {
   width: { xs: '3rem', sm: '3rem' },
   height: { xs: '3rem', sm: '3rem' },
   borderRadius: '6px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   background: '#115e59',
   color: 'white',
 },
 typography: {
   title: {
     fontWeight: 'bold',
     color: theme.palette.text.primary,
     marginBottom: { xs: '0.5rem', sm: '0.75rem' },
     textAlign: 'left',
     fontSize: { xs: '14px', sm: '1.25rem' },
   },
   body: {
     color: theme.palette.text.secondary,
     textAlign: 'center',
     fontSize: { xs: '12px', sm: '1rem' },
   },
 },
};

export default featuresStyles;