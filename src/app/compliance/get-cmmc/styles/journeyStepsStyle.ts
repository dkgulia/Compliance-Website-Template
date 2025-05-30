import theme from '../../../../theme';

const journeyStepsStyle = {
 box: {
   paddingTop: { xs: '0.5rem', sm: '1rem' },
   paddingBottom: { xs: '0.5rem', sm: '1rem' },
   backgroundColor: theme.palette.background.default,
 },
 containerBox: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', md: '3rem' },
   width: { xs: '100%', md: '80%' },
   margin: '0 auto',
 },
 heading: {
   fontWeight: 600,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: theme.palette.text.primary,
   marginBottom: { xs: '1rem', md: '2rem' }
 },
 subHeading: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   color: '#6B7280',
   maxWidth: '800px',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginBottom: '1rem'
 },
 card: {
   background: '#17171799',
   borderRadius: { xs: '0.75rem', md: '1rem' },
   padding: { xs: '0.75rem', md: '1rem' },
   height: '100%',
   minHeight: { xs: '6rem', md: '16rem' },
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   },
 },
 iconContainer: {
   width: { xs: '35px', md: '50px' },
   height: { xs: '35px', md: '50px' },
   backgroundColor: '#115e59',
   borderRadius: '0.5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '0.5rem',
   marginBottom: { xs: '1rem', md: '1.5rem' },
   '& svg': {
     fontSize: { xs: '18px', md: '25px' },
     color: 'white',
   },
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start',
   textAlign: 'left' as const,
   width: '100%',
 },
 cardTitle: {
   fontWeight: 'bold',
   color: '#ffffff',
   marginBottom: { xs: '0.5rem', md: '0.75rem' },
   fontSize: { xs: '14px', md: '1.25rem' },
   width: '100%',
   textAlign: 'left' as const,
 },
 cardDescription: {
   color: '#6B7280',
   fontSize: { xs: '12px', md: '1rem' },
   lineHeight: 1.6,
   textAlign: 'left' as const,
   width: '100%',
 },
};

export default journeyStepsStyle;