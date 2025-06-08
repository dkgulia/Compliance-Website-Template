import theme from '../../../../theme';

const processSectionStyle = {
 container: {
   paddingTop: { xs: '0.5rem', sm: '1rem' },
   paddingBottom: { xs: '0.5rem', sm: '1rem',md:'5rem' },
   backgroundColor: theme.palette.background.default,
 },
 titleContainer: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', md: '3rem' },
   width: { xs: '100%', md: '80%' },
   margin: '0 auto',
 },
 title: {
   fontWeight: { xs: 600, sm: '600' },
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 subtitle: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   color: '#6B7280',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   maxWidth: '800px',
   marginLeft: 'auto',
   marginRight: 'auto',
 },
 stepCard: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '0.75rem', sm: '1.5rem' },
   height: '100%',
   minHeight: { xs: '140px', sm: '16rem' },
   display: 'flex',
   flexDirection: 'column' as any,
   alignItems: 'flex-start',
   transition: { xs: 'none', sm: 'transform 0.3s ease, box-shadow 0.3s ease' },
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: { xs: 'none', sm: 'scale(1.02)' },
     boxShadow: { xs: 'none', sm: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)' },
   },
 },
 stepNumberContainer: {
   width: { xs: '2rem', sm: '50px' },
   height: { xs: '2rem', sm: '50px' },
   backgroundColor: '#115e59',
   borderRadius: '50%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.75rem', sm: '1.5rem' },
 },
 stepNumber: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: { xs: '0.9rem', sm: '1.5rem' },
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column' as any,
   alignItems: 'flex-start',
   textAlign: 'left' as const,
   width: '100%',
 },
 stepHeading: {
   fontWeight: 'bold',
   color: '#ffffff',
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   fontSize: { xs: '14px', sm: '1.25rem' },
   width: '100%',
   textAlign: 'left' as const,
 },
 stepDescription: {
   color: '#6B7280',
   textAlign: 'left' as const,
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.6,
   width: '100%',
 },
 iconContainer: {
   width: { xs: '2rem', sm: '50px' },
   height: { xs: '2rem', sm: '50px' },
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.75rem', sm: '1.5rem' },
   '& svg': {
     fontSize: { xs: '1rem', sm: '28px' },
     color: 'white',
   },
 },
 icon: {
   fontSize: { xs: '1rem', sm: '28px' },
   color: 'white',
 },
};

export default processSectionStyle;