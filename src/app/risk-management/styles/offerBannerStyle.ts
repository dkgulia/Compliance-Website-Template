import theme from '../../../theme';

const offerBannerStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '3.5rem', md: '6rem' },
   gap: '2rem',
   alignItems: 'center',
   background: '#115e59',
   position: 'relative',
   overflow: 'hidden',
   paddingTop: { xs: '2rem', sm: '3rem' },
   paddingBottom: { xs: '2rem', sm: '3rem' },
 },
 headerContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '0.5rem',
   textAlign: 'center',
 },
 icon: {
   fontSize: '2.5rem',
   color: theme.palette.text.primary,
   marginBottom: '1rem',
 },
 title: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   textAlign: 'center',
   marginBottom: '0.5rem',
 },
 subtitle: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   color: theme.palette.text.primary,
   opacity: 0.9,
   textAlign: 'center',
 },
};

export default offerBannerStyle;