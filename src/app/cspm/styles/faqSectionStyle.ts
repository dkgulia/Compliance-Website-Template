import theme from '../../../theme';

const faqSectionStyle = {
   section: {
       display: 'flex',
       flexDirection: 'column',
       px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
       marginTop: { xs: '0rem', md: '0rem' },
       paddingBottom: { xs: '3.5rem', md: '6rem' },
       gap: '2rem',
       alignItems: 'center',
       background: theme.palette.background.default,
       position: 'relative',
       overflow: 'hidden',
   },
   headerContainer: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       gap: '0.5rem',
       marginBottom: '1rem',
       textAlign: 'center',
   },
   tagline: {
       fontFamily: 'monospace',
       fontSize: '0.875rem',
       color: '#0d9488',
       letterSpacing: '0.05em',
       textTransform: 'uppercase',
   },
   title: {
    marginTop: { xs: '3rem', md: '3rem' },

       fontSize: { xs: '1.5rem', md: '1.875rem' },
       fontWeight: 600,
       color: theme.palette.text.primary,
       textAlign: 'center',
   },
   subtitle: {
       color: '#6b7280',
       fontSize: { xs: '1rem', sm: '1.1rem' },
       lineHeight: 1.6,
       textAlign: 'center',
   },
   accordionContainer: {
       display: 'flex',
       flexDirection: 'column',
       backgroundColor: '#171717',
       border: '1px solid #374151',
       borderRadius: '12px',
       overflow: 'hidden',
       width: '100%',
       maxWidth: '1000px',
   },
   accordion: {
       backgroundColor: '#171717',
       boxShadow: 'none',
       '&:before': {
           display: 'none',
       },
       '&.Mui-expanded': {
           margin: 0,
       },
       borderBottom: '1px solid #374151',
       '&:last-child': {
           borderBottom: 'none',
       },
   },
   accordionSummary: {
       padding: '1.25rem 1.5rem',
       backgroundColor: '#171717',
       minHeight: '64px',
       '& .MuiAccordionSummary-content': {
           margin: '0',
       },
       '&.Mui-expanded': {
           minHeight: '64px',
       },
   },
   accordionDetails: {
       padding: '1.25rem 1.5rem',
       backgroundColor: 'rgba(23, 23, 23, 1)',
       color: '#6b7280',
       borderTop: '1px solid #374151',
   },
   questionTypography: {
       fontSize: '1rem',
       fontWeight: 600,
       color: theme.palette.text.primary,
   },
   answerTypography: {
       fontSize: '1rem',
       color: '#6b7280',
       lineHeight: 1.7,
       textAlign: 'left',
   },
   expandIcon: {
       color: theme.palette.text.primary,
       fontSize: '1.25rem',
       transition: 'transform 0.3s ease',
       '&.Mui-expanded': {
           transform: 'rotate(45deg)',
       },
   },
};

export default faqSectionStyle;