import theme from '../../../../theme';

const DoraKeyBenefitsStyle = {
 outerContainer: {
   paddingTop: { sm: '1rem', xs: '0.5rem' },
   paddingBottom: { sm: '1rem', xs: '0.5rem' },
   marginTop: '0rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: theme.palette.background.default,
 },
 contentBox: {
   maxWidth: '60rem',
   width: '100%',
   padding: { xs: '0.5rem', sm: '2rem' },
   margin: '0 auto',
   textAlign: { xs: 'center', sm: 'left' },
 },
 headline: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: { xs: '1rem', md: '1.5rem' },
   textAlign: 'center'
 },
 bulletList: {
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.75rem', md: '1rem' },
 },
 bulletItem: {
   display: 'flex',
   flexDirection: { xs: 'column', sm: 'row' },
   alignItems: { xs: 'flex-start', sm: 'center' },
   background: '#17171799',
   padding: { xs: '0.75rem', md: '1rem' },
   borderRadius: { xs: '0.75rem', md: '1rem' },
   textAlign: 'left',
   gap: { xs: '0.5rem', md: '0.8rem' },
   border: `1px solid ${theme.palette.divider}`,
 },
 checkIcon: {
   color: '#115e59',
   fontSize: { xs: '1rem', sm: '1.5rem' },
 },
 bulletText: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   lineHeight: 1.5,
 },
};

export default DoraKeyBenefitsStyle;