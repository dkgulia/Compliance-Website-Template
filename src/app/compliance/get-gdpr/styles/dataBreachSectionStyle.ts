import theme from '../../../../theme';

const dataBreachSectionStyle = {
 container: {
   padding: { xs: '0.5rem', sm: '5px' },
   backgroundColor: theme.palette.background.default,
   marginX: { xs: '0.5rem', sm: '0rem' },
   borderRadius: { xs: '0.75rem', sm: '1rem' },
 },
 innerBox: {
   maxWidth: '75rem',
   marginX: 'auto',
   padding: { xs: '0.75rem', sm: '2rem' },
   textAlign: 'center' as const,
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '0.5rem', sm: '1rem' },
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   border: `1px solid ${theme.palette.divider}`,
 },
 heading: {
   fontWeight: { xs: 600, sm: 700 },
   fontSize: { xs: '1.4rem', sm: '2.2rem', md: '2.2rem' },
   color: theme.palette.text.primary,
 },
 subHeading: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.6,
 },
 ctaButton: {
   marginTop: { xs: '0.5rem', sm: '1rem' },
   alignSelf: 'center',
   textTransform: 'none',
   fontWeight: 'bold',
   fontSize: { xs: '0.85rem', sm: '1rem' },
   padding: { xs: '0.5rem 1rem', sm: '0.8rem 1.6rem' },
   borderRadius: '2rem',
   backgroundColor: theme.palette.secondary.light,
   color: theme.palette.text.primary,
   border: `1px solid ${theme.palette.secondary.main}`,
   '&:hover': {
     backgroundColor: theme.palette.secondary.main,
     color: theme.palette.background.default,
   },
 },
};

export default dataBreachSectionStyle;