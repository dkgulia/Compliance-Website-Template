import theme from '../../../../theme';

const faqSectionStyle = {
   container: {
       padding: { xs: '0.5rem', sm: '5px' },
       backgroundColor: theme.palette.background.default,
       marginX: { xs: '0.5rem', sm: '0rem' },
   },
   innerBox: {
       maxWidth: '75rem',
       marginX: 'auto',
       padding: { xs: '0.75rem', sm: '2rem' },
       display: 'flex',
       flexDirection: 'column' as const,
       gap: { xs: '0.5rem', sm: '1rem' },
       borderRadius: { xs: '0.75rem', sm: '1rem' },
   },
   title: {
       fontSize: { xs: '1.4rem', sm: '32px' },
       fontWeight: { xs: 600, sm: 600 },
       textAlign: 'center' as const,
       color: theme.palette.text.primary,
   },
   accordionContainer: {
       display: 'flex',
       flexDirection: 'column',
       border: `1px solid #333`,
       borderRadius: { xs: '0.75rem', sm: '12px' },
       overflow: 'hidden',
   },
   accordionSummary: {
       backgroundColor: theme.palette.background.darkTransparent || '#17171799',
       padding: { xs: '0.3rem 0.6rem', sm: '0.5rem 1rem' },
       color: theme.palette.text.primary,
       minHeight: { xs: '40px', sm: '48px' },
       '&.Mui-expanded': {
           minHeight: { xs: '40px', sm: '48px' },
       },
   },
   accordionDetails: {
       backgroundColor: theme.palette.background.darkTransparent || '#17171799',
       padding: { xs: '0.5rem', sm: '1rem' },
       color: '#6B7280',
       fontSize: { xs: '12px', sm: '0.95rem' },
       lineHeight: '1.5',
       borderTop: `1px solid ${theme.palette.divider}`,
   },
};

export default faqSectionStyle;