import theme from '../../../../theme';

const iso27001ComplianceWorkflowStyle = {
 box: {
   paddingTop: { xs: '0.5rem', sm: '3rem' },
   paddingBottom: { xs: '0.5rem', sm: '3rem' },
   backgroundColor: theme.palette.background.default,
 },
 workflowContainer: {
   maxWidth: '75rem',
   marginX: 'auto',
   px: { xs: '0.5rem', sm: '2rem' },
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   gap: { xs: '1rem', sm: '2rem' },
 },
 headerBox: {
   textAlign: 'center' as const,
   maxWidth: '50rem',
 },
 heading: {
   fontWeight: { xs: 600, sm: '600' },
   fontSize: { xs: '1.4rem', sm: '2rem' },
   color: 'white',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 subHeading: {
   color: '#6B7280',
   lineHeight: '1.6',
   marginBottom: { xs: '1rem', sm: '1.5rem' },
   fontSize: { xs: '0.85rem', sm: '1rem' },
 },
 gridContainer: {
   alignItems: 'stretch',
 },
 card: {
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   border: `1px solid ${theme.palette.divider}`,
      padding: { xs: '0.75rem', sm: '2rem' },
   textAlign: { xs: 'center', sm: 'center' } as const,
   transition: { xs: 'none', sm: 'transform 0.3s ease, box-shadow 0.3s ease' },
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: { xs: 'flex-start', sm: 'center' },
   gap: { xs: '0.5rem', sm: '1rem' },
   minHeight: { xs: '100px', sm: 'auto' },
   '&:hover': {
     transform: { xs: 'none', sm: 'scale(1.05)' },
     boxShadow: { xs: 'none', sm: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)' },
     backgroundColor: { xs: theme.palette.background.darkTransparent || '#17171799', sm: '#262626' },
   },
 },
 iconContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: { xs: '3.5rem', sm: '4.5rem' },
   height: { xs: '3.5rem', sm: '4.5rem' },
   background: theme.palette.secondary.light,
   borderRadius: '0.5rem',
   alignSelf: { xs: 'center', sm: 'center' },
 },
 cardTitle: {
   color: '#ffff',
   fontWeight: 'bold',
   fontSize: { xs: '14px', sm: '1rem' },
   textAlign: { xs: 'center', sm: 'center' } as const,
   width: '100%',
 },
};

export default iso27001ComplianceWorkflowStyle;