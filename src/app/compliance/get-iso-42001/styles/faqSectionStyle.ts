import theme from '../../../../theme';

const faqSectionStyle = {
  container: {
    background: theme.palette.background.default,
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
  },
  innerContainer: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: { xs: '1rem', sm: '2rem' },
  },
  titleContainer: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  faqContainer: {
    width: '100%',
    maxWidth: '50rem',
    margin: '0 auto',
  },
  accordionRoot: {
    borderRadius: '0.5rem',
    background: theme.palette.background.paper,
    marginBottom: '1rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    padding: { xs: '0.5rem 1rem', sm: '1rem 1.5rem' },
    '& .MuiAccordionSummary-content': {
      margin: '0.5rem 0',
    },
  },
  accordionDetails: {
    padding: { xs: '0 1rem 1rem', sm: '0 1.5rem 1.5rem' },
  },
  question: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  answer: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default faqSectionStyle;
