import theme from '../../../theme';

const whyUsStyles = {
 box: {
   py: { xs: 1, sm: 2 },
   color: theme.palette.text.primary,
   paddingTop: { xs: '0.5rem', sm: '1rem' },
   paddingBottom: { xs: '0.5rem', sm: '1rem' },
   background: theme.palette.background.default,
 },
 container: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: { xs: 1.5, sm: 6 },
   marginBottom: { xs: '1rem', sm: '2rem' },
 },
 card: {
   padding: { xs: '0.75rem', sm: '1.5rem' },
   textAlign: 'left',
   backgroundColor: theme.palette.background.paper,
   backdropFilter: 'blur(10px)',
   borderRadius: { xs: '0.75rem', sm: '12px' },
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'flex-start',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
   },
 },
 cardTitle: {
   fontWeight: 'bold',
   color: theme.palette.text.primary,
   fontSize: { xs: '14px', sm: '1.1rem' },
   marginTop: { xs: '0.5rem', sm: '1rem' },
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   textAlign: 'left',
 },
 description: {
   color: theme.palette.text.secondary,
   fontSize: { xs: '12px', sm: '0.9rem' },
   lineHeight: 1.5,
   textAlign: 'left',
 },
 iconContainer: {
   borderRadius: '0.5rem',
   width: { xs: 45, sm: 48 },
   height: { xs: 45, sm: 48 },
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   background: theme.palette.secondary.dark,
 },
 typography: {
   title: {
     color: theme.palette.text.primary,
     fontWeight: 'bold',
     fontSize: { xs: '14px', sm: '1.4rem' },
     marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   },
   body: {
     color: theme.palette.text.secondary,
     fontSize: { xs: '12px', sm: '1rem' },
     textAlign: 'left',
     lineHeight: '1.5',
   },
 },
};

export default whyUsStyles;