import theme from '../../../../theme';

const featuresSectionStyle = {
 box: {
   paddingTop: { sm: '1.5rem', xs: '0.5rem' },
   paddingBottom: { sm: '2rem', xs: '1rem' },
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
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   paddingBottom: { sm: '1rem', xs: '0.25rem' },
   textAlign: 'center' as const,
 },
 subheading: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   lineHeight: '1',
   marginBottom: { xs: '1.5rem', sm: '2rem' },
   maxWidth: '600px',
   textAlign: 'center' as const,
 },
 gridContainer: {
   marginTop: '0.5rem',
   width: '100%',
 },
 card: {
   display: 'flex',
   flexDirection: 'column' as const,
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   height: { sm: 'auto', xs: 'auto' },
   minHeight: { xs: '160px', sm: '210px' },
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '0.75rem', sm: '1rem' },
 },
 cardContent: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   padding: { xs: '0.75rem', sm: '1.25rem' },
   textAlign: 'left' as const,
   width: '100%',
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
 },
 featureTitle: {
   fontWeight: 'bold' as const,
   color: theme.palette.text.primary,
   textAlign: 'left' as const,
   fontSize: { xs: '14px', sm: '18px' },
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
 },
 featureDesc: {
   color: '#6B7280',
   textAlign: 'left' as const,
   lineHeight: 1.6,
   fontSize: { xs: '12px', sm: '14px' },
 },
};

export default featuresSectionStyle;