import theme from '../../../../theme';

const implementationStepsStyle = {
 container: {
   paddingTop: { sm: '3rem', xs: '1rem', md: '1rem' },
   paddingBottom: { sm: '2rem', xs: '1rem' },
   backgroundColor: theme.palette.background.default,
 },
 headingContainer: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', sm: '2.5rem' },
 },
 sectionTitle: {
   fontWeight: 600,
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', sm: '2rem' },
 },
 sectionSubtitle: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   color: '#6B7280',
   maxWidth: '650px',
   margin: '0 auto',
 },
 stepsContainer: {
   maxWidth: '1200px',
   margin: '0 auto',
 },
 stepCard: {
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   overflow: 'hidden',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   padding: { xs: '0.75rem', sm: '1.5rem' },
   border: `1px solid ${theme.palette.divider}`,
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   '&:hover': {
     transform: 'translateY(-5px)',
     boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
   },
 },
 stepNumberCircle: {
   width: { xs: '40px', sm: '60px' },
   height: { xs: '40px', sm: '60px' },
   borderRadius: '50%',
   backgroundColor: '#115e59',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   margin: { xs: '0 auto 1rem auto', sm: '0 auto 1.5rem auto' }
 },
 stepNumber: {
   fontSize: { xs: '1.25rem', sm: '1.75rem' },
   fontWeight: 'bold',
   color: 'white'
 },
 stepTitle: {
   fontWeight: 600,
   color: theme.palette.text.primary,
   margin: { xs: '0 0 0.5rem 0', sm: '0 0 0.75rem 0' },
   textAlign: 'center' as const,
   fontSize: { xs: '14px', sm: '1.25rem' },
 },
 stepDescription: {
   color: '#6B7280',
   textAlign: 'center' as const,
   padding: { xs: '0 0.25rem', sm: '0 0.5rem' },
   fontSize: { xs: '12px', sm: '0.95rem' },
   lineHeight: 1.5,
 }
};

export default implementationStepsStyle;