import theme from '../../../theme';

const faqSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '0.5rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '0rem', md: '6rem' },
    gap: '2rem',
    alignItems: 'center',
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: { xs: '2rem', sm: '4rem' },
  },
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.3rem',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop:{xs:'2rem'}
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1,
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#171717',
    border: '1px solid #374151',
    borderRadius: '0.5rem',
    overflow: 'hidden',
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
    backgroundColor: '#171717',
    color: '#6b7280',
    borderTop: '1px solid #374151',
  },
  question: {
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  answer: {
    fontSize: '1rem',
    color: '#6b7280',
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