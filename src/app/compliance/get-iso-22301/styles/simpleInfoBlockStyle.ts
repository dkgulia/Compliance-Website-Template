import theme from '../../../../theme';

const simpleInfoBlockStyle = {
 rootBox: {
   paddingTop: { xs: '0.5rem', sm: '1.5rem' },
   paddingBottom: { xs: '1rem', sm: '2rem' },
   marginTop: '0rem',
   backgroundColor: theme.palette.background.default,
   px: { xs: 1, sm: 4 },
 },
 container: {
   maxWidth: '1200px',
   marginX: 'auto',
   px: { xs: '1rem', sm: '2rem' },
 },
 mainTitle: {
   textAlign: 'center',
   color: theme.palette.text.primary,
   fontWeight: '600',
   fontSize: { xs: '1.4rem', sm: '2rem', md: '2rem' },
   marginBottom: '0.55rem',
   letterSpacing: '-0.02em',
 },
 subTitle: {
   textAlign: 'center',
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   marginBottom: { xs: '1rem', sm: '2rem' },
   fontWeight: '400',
   maxWidth: '700px',
   marginX: 'auto',
 },
 innerBox: {
   marginTop: '1rem',
   padding: { xs: '1.5rem', sm: '2rem' },
   borderRadius: { xs: '0.75rem', sm: '12px' },
   boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
   border: `1px solid ${theme.palette.divider}`,
   backgroundColor: '#17171799',
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   maxWidth: '1100px',
   marginX: 'auto',
 },
 headingText: {
   color: theme.palette.text.primary,
   marginBottom: { xs: '1rem', sm: '1.5rem' },
   fontWeight: '600',
   fontSize: { xs: '1.1rem', sm: '1.5rem' },
   letterSpacing: '-0.01em',
 },
 bodyText: {
   color: theme.palette.text.secondary,
   marginBottom: '1rem',
   lineHeight: 1.7,
   fontSize: { xs: '0.85rem', sm: '1rem' },
   fontWeight: '400',
 },
 imageGridItem: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
 },
 imageContainer: {
   position: 'relative',
   width: '100%',
   height: 'auto',
   display: 'flex',
   justifyContent: 'center',
 },
 imageStyle: {
   maxWidth: '80%',
   height: 'auto',
   borderRadius: { xs: '0.75rem', sm: '8px' },
   objectFit: 'contain' as const,
 },
};

export default simpleInfoBlockStyle;