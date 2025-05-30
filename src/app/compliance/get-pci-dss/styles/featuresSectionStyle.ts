import theme from '../../../../theme';

const featuresSectionStyle = {
 box: {
   paddingBottom: { sm: '2rem', xs: '1rem' },
   paddingTop: { xs: '0.5rem', sm: '0rem' },
   marginTop: '0rem',
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
   marginBottom: { xs: '1.5rem', sm: '3rem' },
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   paddingBottom: { sm: '1rem', xs: '0.25rem' },
 },
 card: {
   display: 'flex',
   flexDirection: 'column' as const,
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   height: { sm: '150px', xs: 'auto' },
   minHeight: { xs: '150px', sm: '210px' },
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '0.5rem', sm: '1rem' },
 },
 iconContainer: {
   width: { xs: '2.5rem', sm: '4rem' },
   height: { xs: '2.5rem', sm: '4rem' },
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   padding: { xs: '0.25rem', sm: '0.5rem' },
   alignSelf: 'flex-start',
   marginTop:{xs:'0.5rem'}
 },
 iconImage: {
   objectFit: 'contain' as const,
   width: { xs: '2rem', sm: '3.5rem' },
   height: { xs: '2rem', sm: '3.5rem' },
   filter: 'brightness(0) invert(1)',
 },
 contentWrapper: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   width: '100%',
 },
 typography: {
   container: {
     display: 'flex',
     flexDirection: 'column' as const,
     alignItems: 'flex-start',
     textAlign: 'left' as const,
     width: '100%',
   },
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
     lineHeight: 1.6,
     fontSize: { xs: '12px', sm: '14px' },
   },
 },
 gridItem: {
   marginBottom: { xs: '1rem', sm: '1.5rem' },
 },
};

export default featuresSectionStyle;