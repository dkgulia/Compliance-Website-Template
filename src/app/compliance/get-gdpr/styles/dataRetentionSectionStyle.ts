import theme from '../../../../theme';

const dataRetentionSectionStyle = {
 container: {
   backgroundColor: theme.palette.background.default,
   padding: { xs: '0.5rem', sm: '5px' },
 },
 headerContainer: {
   textAlign: 'center',
   marginBottom: { xs: '1rem', md: '3rem' },
   marginTop: { xs: '1.5rem', sm: '3rem' },
 },
 sectionTitle: {
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: { xs: 600, sm: '600' },
   lineHeight: 1.2,
   marginBottom: { xs: '0.25rem', sm: '0.75rem' },
 },
 sectionSubtitle: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1.2rem' },
   lineHeight: 1.5,
   maxWidth: '700px',
   margin: '0 auto',
 },
 featuresGrid: {
   display: 'flex',
   justifyContent: 'center',
 },
 featureCard: {
   height: '100%',
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '8px' },
   transition: 'transform 0.2s ease, box-shadow 0.2s ease',
   overflow: 'hidden',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     transform: 'translateY(-3px)',
     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
     borderColor: theme.palette.secondary.main,
   },
 },
 cardContent: {
   padding: { xs: '0.75rem', sm: '1rem' },
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   textAlign: 'left',
   height: '100%',
 },
 iconContainer: {
   backgroundColor: '#115e59',
   width: { xs: '50px', sm: '70px' },
   height: { xs: '50px', sm: '70px' },
   borderRadius: '6px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   padding: '8px',
 },
 iconImage: {
   objectFit: 'contain' as const,
   width: '90%',
   height: '90%',
   filter: 'brightness(0) invert(1)',
 },
 featureTitle: {
   color: theme.palette.text.primary,
   fontSize: { xs: '14px', sm: '1.1rem' },
   fontWeight: 600,
   textAlign: 'left',
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   width: '100%',
 },
 featureDescription: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.95rem' },
   lineHeight: 1.6,
   textAlign: 'left',
   width: '100%',
 },
};

export default dataRetentionSectionStyle;