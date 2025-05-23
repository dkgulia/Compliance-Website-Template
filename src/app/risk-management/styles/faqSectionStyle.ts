import theme from '../../../theme';

const faqSectionStyle = {
  section: {
    paddingTop: { xs: '2rem', sm: '3rem', md: '4rem' },
    paddingBottom: { xs: '3rem', sm: '5rem', md: '6rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px', // FIXED: previously 100px
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem', md: '0 3rem' },
    position: 'relative',
    zIndex: 1,
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    paddingBottom: '0.75rem',
  },
  subtitle: {
    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px',
    overflow: 'hidden',
    width: '100%',
  },
  accordion: {
    backgroundColor: 'rgba(23, 23, 23, 0.6)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: 0,
    },
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  accordionSummary: {
    padding: { xs: '1rem', sm: '1.25rem 1.5rem' },
    backgroundColor: 'rgba(23, 23, 23, 0.6)',
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
    backgroundColor: 'rgba(23, 23, 23, 1)',
    color: theme.palette.text.secondary,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  questionTypography: {
    fontSize: { xs: '0.95rem', sm: '1rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  answerTypography: {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    textAlign: 'left',
  },
  expandIcon: {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
  },
};

export default faqSectionStyle;
