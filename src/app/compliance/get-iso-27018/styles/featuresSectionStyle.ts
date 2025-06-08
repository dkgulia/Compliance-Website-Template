import theme from '../../../../theme';

const featuresSectionStyle = {
 box: {
   paddingBottom: { sm: '2rem', xs: '1rem' },
   paddingTop: { xs: '0.5rem', sm: '0rem' },
   backgroundColor: theme.palette.background.default,
 },
 container: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   marginX: 'auto',
   maxWidth: '75rem',
   px: { xs: '1rem', sm: '2rem' },
 },
 containerBox: {
   textAlign: 'center' as const,
   width: '100%',
   maxWidth: '60rem',
   marginX: 'auto',
   marginBottom: { xs: '1rem', sm: '1.5rem' },
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
 },
 card: {
   display: 'flex',
   flexDirection: 'column' as const,
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
   height: {xs:'9rem',md:'12rem'},
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'scale(1.05)',
     boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
   },
 },
 cardContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'stretch',
   marginTop: { xs: '0.5rem', sm: '1rem' },
 },
 iconContainer: {
   width: { xs: '35px', sm: '38px' },
   height: { xs: '35px', sm: '38px' },
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   padding: { xs: '0.25rem', sm: '0.5rem' },
   alignSelf: 'flex-start',
 },
 typography: {
   title: {
     fontWeight: 'bold' as const,
     color: theme.palette.text.primary,
     textAlign: 'left' as const,
     fontSize: { xs: '14px', sm: '18px' },
     marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   },
   body: {
     color: '#6B7280',
     textAlign: 'left' as const,
     lineHeight: 1.4,
     fontSize: { xs: '12px', sm: '14px' },
   },
 },
};

export default featuresSectionStyle;