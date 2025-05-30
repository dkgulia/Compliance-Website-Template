import theme from '../../../../theme';

const whatIsSectionStyle = {
 container: {
   backgroundColor: theme.palette.background.default,
   padding: { xs: '0.5rem', sm: '2px' },
 },
 contentContainer: {
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.5rem', sm: '1rem' },
 },
 sectionTitle: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: { xs: 600, sm: '600' },
   lineHeight: 1.2,
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
 },
 sectionSubtitle: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   fontWeight: 500,
   marginBottom: { xs: '0.25rem', sm: '1rem' },
 },
 contentHeading: {
   color: '#115e59',
   fontSize: { xs: '1.4rem', md: '1.6rem' },
   fontWeight: { xs: 600, sm: 600 },
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
 },
 contentDescription: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   lineHeight: 1.7,
   maxWidth: '95%',
 },
 imageContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   height: '100%',
 },
 imageWrapper: {
   width: { xs: '250px', sm: '350px' },
   height: { xs: '250px', sm: '350px' },
   borderRadius: '50%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   overflow: 'hidden',
   position: 'relative',
 },
 imageStyle: {
   objectFit: 'cover' as const,
   borderRadius: '50%',
 },
 iconCaption: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.9rem' },
   fontWeight: 500,
 },
 highlights: {
   marginTop: { xs: '1.5rem', md: '3.5rem' },
 },
 highlightCard: {
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   height: '90%',
   borderRadius: { xs: '0.75rem', sm: '8px' },
   transition: 'all 0.3s ease',
   border: `1px solid ${theme.palette.divider}`,
   '&:hover': {
     borderColor: theme.palette.secondary.main,
     transform: 'translateY(-5px)',
     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
   },
 },
 cardContent: {
   padding: { xs: '0.5rem', sm: '0.8rem' },
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   textAlign: 'left',
 },
 cardIconContainer: {
   backgroundColor: '#115e59',
   width: { xs: '35px', sm: '38px' },
   height: { xs: '35px', sm: '38px' },
   borderRadius: '6px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
   transition: 'all 0.3s ease',
 },
 cardIcon: {
   fontSize: { xs: '20px', sm: '20px' },
   color: 'white',
   transition: 'all 0.3s ease',
 },
 highlightTitle: {
   color: theme.palette.text.primary,
   fontSize: { xs: '14px', sm: '1.1rem' },
   fontWeight: 600,
   marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   width: '100%',
 },
 highlightText: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.95rem' },
   lineHeight: 1.6,
   width: '100%',
 },
};

export default whatIsSectionStyle;