import theme from '../../../../theme';

const complianceHubStyle = {
 box: {
   paddingTop: { sm: '3rem', xs: '1rem', md: '3rem' },
   paddingBottom: { sm: '2rem', xs: '1rem', md: '2rem' },
   marginTop: '0rem',
   backgroundColor: theme.palette.background.default,
 },
 container: {
   position: 'relative' as const,
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   maxWidth: '75rem',
   marginX: 'auto',
   px: { xs: '1rem', sm: '2rem' },
 },
 containerBox: {
   width: '100%',
   textAlign: 'center' as const,
   marginX: 'auto',
   marginBottom: { xs: '1.5rem', sm: '3rem' },
 },
 heading: {
   fontWeight: '600',
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 subHeading: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 stepContainer: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   minHeight: { xs: '150px', sm: '220px' },
   textAlign: 'left' as const,
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   padding: { xs: '0.75rem', sm: '1.5rem' },
 },
 iconContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: { xs: '28px', sm: '38px' },
   height: { xs: '28px', sm: '38px' },
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   padding: { xs: '0.25rem', sm: '0.5rem' },
   alignSelf: 'flex-start',
   marginTop:{xs:'0.5rem'}
 },
 icon: {
   fontSize: { xs: '16px', sm: '20px' },
   color: 'white',
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   gap: { xs: '0.25rem', sm: '0.5rem' },
   width: '100%',
   marginTop: '0.2rem',
 },
 title: {
   fontWeight: 'bold' as const,
   color: theme.palette.text.primary,
   fontSize: { xs: '14px', sm: '1.1rem' },
   marginBottom: { xs: '0.125rem', sm: '0.25rem' },
 },
 description: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.9rem' },
   lineHeight: 1.5,
 },
};

export default complianceHubStyle;