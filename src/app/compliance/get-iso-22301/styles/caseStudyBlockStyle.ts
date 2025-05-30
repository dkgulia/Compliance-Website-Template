import theme from '../../../../theme';

const caseStudyBlockStyle = {
 rootBox: {
   paddingTop: { xs: '0.5rem', sm: '1.5rem' },
   paddingBottom: { xs: '1rem', sm: '2rem' },
   marginTop: '0rem',
   backgroundColor: theme.palette.background.default,
   px: { xs: 1, sm: 4 },
 },
 container: {
   maxWidth: 'lg',
 },
 innerBox: {
   marginTop: { xs: '0.75rem', sm: '1.5rem' },
   backgroundColor: '#17171799',
   padding: { xs: '1rem', sm: '1.5rem' },
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
   border: `1px solid ${theme.palette.divider}`,
 },
 mainTitle: {
   textAlign: 'center',
   color: theme.palette.text.primary,
   fontWeight: '600',
   fontSize: { xs: '1.4rem', sm: '2rem' },
   marginBottom: '0.5rem',
 },
 subTitle: {
   textAlign: 'center',
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.85rem', sm: '1.2rem' },
   marginBottom: { xs: '0.75rem', sm: '1rem' },
 },
 headingText: {
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
   fontWeight: 'bold',
   fontSize: { xs: '1.1rem', sm: '1.25rem' },
 },
 bodyText: {
   color: theme.palette.text.secondary,
   marginBottom: '1rem',
   lineHeight: 1.6,
   fontSize: { xs: '0.85rem', sm: '1rem' },
   fontWeight: '400',
 },
};

export default caseStudyBlockStyle;