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
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '0.75rem',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    textAlign: 'center',
    marginBottom: '2.5rem',
    color: '#6B7280',
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#17171799',
    border: `1px solid #333`,
    borderRadius: '12px',
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
    color: '#ffffff',
    fontSize: '1.25rem',
    transform: 'rotate(0deg)',
    '&.Mui-expanded': {
      transform: 'rotate(45deg)',
    },
  },
  questionText: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#ffffff',
  },
  accordionDetails: {
    padding: '1.25rem 1.5rem',
    backgroundColor: '#171717',
    color: '#a3a3a3',
    borderTop: '1px solid #333',
  },
  answerText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#a3a3a3',
  },
};

export default faqSectionStyles;