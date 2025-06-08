import theme from '../../../theme';

const bookADemoStyles = {
 box: {
   paddingBottom: { xs: '0.5rem', sm: '1rem' },
   backgroundColor: theme.palette.background.default,
   px: { xs: 2, sm: 4 },
 },
 container: {
   background: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   width: '100%',
   maxWidth: '1140px',
   marginX: 'auto',
   overflow: 'hidden',
   border: `1px solid ${theme.palette.divider}`,
   display: 'flex',
   alignItems: 'center',
   flexDirection: { xs: 'column', md: 'row' },
   minHeight: { xs: 'auto', sm: '220px' },
 },
 textBox: {
   padding: { xs: '0.5rem', sm: '2rem', md: '2.5rem' },
   flex: '1 1 60%',
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '1.75rem', md: '2rem' },
   fontWeight: { xs: 600, sm: '600' },
   color: theme.palette.text.primary,
   lineHeight: 1.2,
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
 },
 points: {
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.5rem', sm: '0.5rem' },
   marginTop: { xs: '0.5rem', sm: '0.75rem' },
   marginBottom: { xs: '0.75rem', sm: '1rem',md:'2rem' },
 },
 imageBox: {
   flex: '1 1 40%',
   display: { xs: 'none', md: 'flex' },
   justifyContent: 'center',
   alignItems: 'center',
   padding: { xs: '0 2rem 2rem', md: '1.5rem' },
   maxWidth: { xs: '300px', md: '350px' },
 },
 tagline: {
   display: 'inline-block',
   padding: { xs: '0.3rem 0.6rem', sm: '0.35rem 0.7rem' },
   borderRadius: '1rem',
   background: theme.palette.secondary.dark,
   marginBottom: { xs: '0.5rem', sm: '0.5rem' },
   color: theme.palette.text.primary,
   fontWeight: 'bold',
   fontSize: { xs: '0.85rem', sm: '0.85rem' },
   width: 'fit-content',
 },
 point: {
   display: 'flex',
   alignItems: 'center',
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.85rem', sm: '0.9rem' },
   lineHeight: 1.4,
 },
 icon: {
   color: theme.palette.secondary.main,
   marginRight: { xs: '0.5rem', sm: '0.6rem' },
   fontSize: { xs: '1rem', sm: '1.1rem' },
 },
};

export default bookADemoStyles;