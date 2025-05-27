import theme from '../../../../theme';

const comparingSectionStyle = {
 container: {
   backgroundColor: theme.palette.background.default,
   padding: { xs: '0.5rem', sm: '5px' },
   position: 'relative',
 },
 headerContainer: {
   marginTop: { xs: '1.5rem', sm: '3rem' },
   textAlign: 'center',
   marginBottom: { xs: '1.5rem', md: '3.5rem' },
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
 },
 sectionIcon: {
   color: theme.palette.secondary.main,
   fontSize: { xs: '2rem', sm: '2.5rem' },
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 sectionTitle: {
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: { xs: 600, sm: '600' },
   lineHeight: 1.2,
   position: 'relative',
   paddingBottom: { xs: '0.25rem', sm: '0.5rem' },
 },
 sectionSubtitle: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   lineHeight: 1.5,
   maxWidth: '700px',
   margin: '0.5rem auto 0',
 },
 comparisonContainer: {
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '12px' },
   border: `1px solid ${theme.palette.divider}`,
   overflow: 'hidden',
   transition: 'all 0.3s ease',
   '&:hover': {
     boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
     borderColor: theme.palette.secondary.main,
   },
 },
 list: {
   padding: { xs: '0.75rem', md: '2.25rem' },
 },
 listItem: {
   padding: { xs: '0.5rem 0', sm: '1rem 0' },
   '&:not(:last-child)': {
     borderBottom: `1px solid ${theme.palette.divider}`,
   },
   transition: 'all 0.2s ease',
   '&:hover': {
     backgroundColor: 'rgba(100, 255, 218, 0.03)',
     '& $arrowIcon': {
       transform: 'translateX(4px)',
       color: theme.palette.secondary.main,
     },
   },
   '&:focus': {
     backgroundColor: 'rgba(100, 255, 218, 0.05)',
     outline: 'none',
     '& $arrowIcon': {
       color: theme.palette.secondary.main,
     },
   },
 },
 listItemIcon: {
   minWidth: { xs: '24px', sm: '36px' },
 },
 arrowIcon: {
   color: '#fffff',
   fontSize: { xs: '0.8rem', sm: '1rem' },
   transition: 'all 0.2s ease',
 },
 listItemText: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.6,
   fontWeight: 400,
 },
 additionalInfo: {
   backgroundColor: theme.palette.background.paper,
   padding: { xs: '0.75rem', md: '2.25rem' },
 },
 infoHeader: {
   display: 'flex',
   alignItems: 'center',
   marginBottom: { xs: '0.5rem', sm: '1rem' },
 },
 infoIcon: {
   color: '#white',
   fontSize: { xs: '1.2rem', sm: '1.5rem' },
   marginRight: { xs: '0.5rem', sm: '0.75rem' },
 },
 additionalInfoTitle: {
   color: theme.palette.text.primary,
   fontSize: { xs: '14px', sm: '1.3rem' },
   fontWeight: 600,
 },
 additionalInfoText: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.7,
 },
};

export default comparingSectionStyle;