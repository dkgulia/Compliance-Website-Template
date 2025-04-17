import theme from '../../../../theme';

const faqSectionStyle = {
  box: {
    paddingTop: { sm: '3rem', xs: '2rem',md:'1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  section: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.2rem' },
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: theme.palette.text.primary,
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  accordion: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:before': {
      display: 'none', // Remove the default divider
    },
    border: 'none',
  },
  accordionSummary: {
    padding: '1rem 1.5rem',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.5rem',
    minHeight: '64px',
    '& .MuiAccordionSummary-content': {
      margin: '0',
    },
  },
  expandIcon: {
    color: theme.palette.text.secondary,
    fontSize: '1.5rem',
  },
  questionTypography: {
    fontSize: '1.2rem',
    fontWeight: 500,
    color: theme.palette.primary.light,
  },
  accordionDetails: {
    padding: '1.25rem 1.5rem',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderRadius: '0 0 0.5rem 0.5rem',
  },
  answerTypography: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
  },
};

export default faqSectionStyle;