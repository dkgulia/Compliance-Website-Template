import theme from '../../../../theme';

const metricsSectionStyle = {
 container: {
   paddingTop: { xs: '0.5rem', sm: '2rem' },
   paddingBottom: { xs: '0.5rem', sm: '2rem' },
   background: theme.palette.background.default,
 },
 titleContainer: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', md: '3rem' },
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: { xs: 600, sm: 700 },
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   color: theme.palette.text.primary,
 },
 subtitle: {
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   color: theme.palette.text.secondary,
   maxWidth: '800px',
   margin: '0 auto',
   lineHeight: 1.6,
 },
 metricCard: {

   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '1rem', sm: '2rem' },
   height: '100%',
   display: 'flex',
   flexDirection: 'column' as any,
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center' as const,
   minHeight: { xs: '100px', sm: '12rem' },
  // border: `1px solid ${theme.palette.divider}`,
   transition: { xs: 'none', sm: 'transform 0.3s ease, box-shadow 0.3s ease' },
   '&:hover': {
     transform: { xs: 'none', sm: 'scale(1.02)' },
     boxShadow: { xs: 'none', sm: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)' },
   },
 },
 metricValue: {
   color: '#115e59',
   fontWeight: 'bold',
   fontSize: { xs: '1.8rem', md: '3.5rem' },
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
 },
 metricLabel: {
   color: theme.palette.text.primary,
   fontWeight: 'medium',
   fontSize: { xs: '0.85rem', md: '1.25rem' },
 },
};

export default metricsSectionStyle;