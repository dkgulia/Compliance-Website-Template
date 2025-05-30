import theme from '../../../theme';

const faqSectionStyles = {
  box: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '0rem',
    color: theme.palette.text.primary,
    position: 'relative',
    paddingBottom: '1rem',
    display: 'inline-block',
    marginTop:'1rem'
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
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
    backgroundColor: '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px',
    overflow: 'hidden',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '93%',
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
  expandIcon: {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    transform: 'rotate(0deg)',
    '&.Mui-expanded': {
      transform: 'rotate(45deg)',
    },
  },
  questionText: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  accordionDetails: {
    padding: '1.25rem 1.5rem',
    backgroundColor: 'rgba(23, 23, 23, 1)',
    color: theme.palette.text.secondary,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  answerText: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    textAlign: 'left',
  },
  questionTypography: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  answerTypography: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    textAlign: 'left',
  },
};

export default faqSectionStyles;