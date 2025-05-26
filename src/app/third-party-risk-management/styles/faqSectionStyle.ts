import theme from '../../../theme';

const faqSectionStyle = {
  section: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    position: 'relative',
    zIndex: 1,
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '32px', md: '2rem' },
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
    position: 'relative',
    paddingBottom: '0.5rem',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
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
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  accordionSummary: {
    padding: '1.25rem 1.5rem',
    backgroundColor: '#17171799',
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
    backgroundColor: '#171717',
    color: theme.palette.text.secondary,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  question: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  answer: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
  },
  expandIcon: {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    transform: 'rotate(0deg)',
    '&.Mui-expanded': {
      transform: 'rotate(45deg)',
    },
  },
};

export default faqSectionStyle;
