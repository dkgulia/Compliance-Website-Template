import theme from '../../../../theme';

const iso27018FaqStyle = {
 box: {
   paddingTop: { sm: '3rem', xs: '1rem', md: '1rem' },
   paddingBottom: { sm: '4rem', xs: '1.5rem' },
   backgroundColor: theme.palette.background.default,
 },
 section: {
   maxWidth: '1200px',
   margin: '0 auto',
   padding: { xs: '0 1rem', sm: '0 2rem' },
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '32px' },
   fontWeight: 600,
   textAlign: 'center',
   marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   color: theme.palette.text.primary,
 },
 subtitle: {
   fontSize: { xs: '0.85rem', sm: '1.1rem' },
   textAlign: 'center',
   marginBottom: { xs: '1.5rem', sm: '2.5rem' },
   color: '#6B7280',
 },
 accordionContainer: {
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: '#17171799',
   border: `1px solid #333`,
   borderRadius: { xs: '0.75rem', sm: '12px' },
   overflow: 'hidden',
 },
 accordion: {
   backgroundColor: '#17171799',
   boxShadow: 'none',
   '&:before': {
     display: 'none',
   },
   '&.Mui-expanded': {
     margin: 0,
   },
   borderBottom: '1px solid #333',
   '&:last-child': {
     borderBottom: 'none',
   },
 },
 accordionSummary: {
   padding: { xs: '0.75rem 1rem', sm: '1.25rem 1.5rem' },
   backgroundColor: '#17171799',
   minHeight: { xs: '48px', sm: '64px' },
   '& .MuiAccordionSummary-content': {
     margin: '0',
   },
   '&.Mui-expanded': {
     minHeight: { xs: '48px', sm: '64px' },
   },
 },
 expandIcon: {
   color: theme.palette.text.primary,
   fontSize: { xs: '1rem', sm: '1.25rem' },
   transform: 'rotate(0deg)',
   '&.Mui-expanded': {
     transform: 'rotate(45deg)',
   },
 },
 questionTypography: {
   fontSize: { xs: '14px', sm: '1rem' },
   fontWeight: 500,
   color: theme.palette.text.primary,
 },
 accordionDetails: {
   padding: { xs: '0.75rem 1rem', sm: '1.25rem 1.5rem' },
   backgroundColor: '#171717',
   color: theme.palette.text.secondary,
   borderTop: '1px solid #333',
 },
 answerTypography: {
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.6,
   color: theme.palette.text.secondary,
 },
};

export default iso27018FaqStyle;