import theme from '../../../theme';

const faqSectionStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '0rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '3.5rem', md: '2rem' },
   gap: '2rem',
   alignItems: 'center',
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
   paddingBottom: { xs: '3rem', sm: '5rem', md: '6rem' },
 },
 container: {
   maxWidth: '1200px',
   margin: '0 auto',
   width: '100%',
   position: 'relative',
   zIndex: 1,
 },
 header: {
   marginBottom: '2rem',
   textAlign: 'center',
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textAlign: 'center',
   textTransform: 'uppercase',
   marginBottom: '0.5rem',
 },
 title: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   paddingBottom: '0.75rem',
   textAlign: 'center',
 },
 subtitle: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   textAlign: 'center',
   marginBottom: '2.5rem',
   color: '#6b7280',
   maxWidth: '800px',
   marginLeft: 'auto',
   marginRight: 'auto',
   lineHeight: 1.6,
 },
 accordionContainer: {
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: 'transparent',
   border: '1px solid #374151',
   borderRadius: '12px',
   overflow: 'hidden',
   width: '100%',
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
   padding: { xs: '1rem', sm: '1.25rem 1.5rem' },
   backgroundColor: '#171717',
   minHeight: '64px',
   '& .MuiAccordionSummary-content': {
     margin: 0,
   },
   '&.Mui-expanded': {
     minHeight: '64px',
   },
 },
 accordionDetails: {
   padding: { xs: '1rem', sm: '1.25rem 1.5rem' },
   backgroundColor: '#262626',
   color: '#6b7280',
   borderTop: '1px solid #374151',
 },
 questionTypography: {
   fontSize: { xs: '0.95rem', sm: '1rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
 },
 answerTypography: {
   fontSize: { xs: '0.9rem', sm: '1rem' },
   color: '#6b7280',
   lineHeight: 1.7,
   textAlign: 'left',
 },
 expandIcon: {
   color: theme.palette.text.primary,
   fontSize: '1.25rem',
 },
};

export default faqSectionStyle;