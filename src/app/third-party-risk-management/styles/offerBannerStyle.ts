import theme from '../../../theme';

const offerBannerStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '3.5rem', md: '6rem' },
   gap: '2rem',
   alignItems: 'center',
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
 },
 container: {
   width: '100%',
   textAlign: 'center',
   position: 'relative',
   zIndex: 1,
 },
 title: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
   textAlign: 'center',
 },
 subtitle: {
   color: '#6b7280',
   fontSize: { xs: '1rem', sm: '1.1rem' },
   lineHeight: 1.6,
   textAlign: 'center',
 },
};

export default offerBannerStyle;