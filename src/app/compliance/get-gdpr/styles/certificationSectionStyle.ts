import theme from '../../../../theme';

const certificationSectionStyle = {
 container: {
   padding: { xs: '0.5rem', sm: '5px' },
   backgroundColor: theme.palette.background.default,
   marginX: { xs: '0.5rem', sm: '0rem' },
 },
 innerBox: {
   maxWidth: '75rem',
   marginX: 'auto',
   padding: { xs: '0.75rem', sm: '2rem' },
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   border: `1px solid ${theme.palette.divider}`,
   textAlign: 'center' as const,
   display: 'flex',
   flexDirection: 'column' as const,
   gap: { xs: '0.25rem', sm: '0.5rem' },
 },
 heading: {
   fontWeight: { xs: 600, sm: 700 },
   fontSize: { xs: '1.4rem', sm: '2.2rem', md: '2.2rem' },
   color: theme.palette.text.primary,
 },
 subHeading: {
   color: theme.palette.secondary.main,
   fontSize: { xs: '0.85rem', sm: '1rem' },
 },
 description: {
   color: '#6B7280',
   fontSize: { xs: '12px', sm: '0.95rem' },
   lineHeight: 1.6,
   marginTop: { xs: '0.25rem', sm: '0.5rem' },
 },
};

export default certificationSectionStyle;