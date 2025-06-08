import theme from '../../../theme';

const faqSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '3.5rem', md: '2rem' },
    paddingBottom: { xs: '2rem', md: '4rem' },
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
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1.6,
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#171717',
    border: '1px solid #374151',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1200px',
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
    '&:hover': {
      backgroundColor: 'rgba(17, 94, 89, 0.05)',
    },
  },
  expandIcon: {
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s ease',
    '&.Mui-expanded': {
      transform: 'rotate(45deg)',
    },
  },
  questionTypography: {
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  accordionDetails: {
    padding: '1.25rem 1.5rem',
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    color: '#6b7280',
    borderTop: '1px solid #374151',
  },
  answerTypography: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#6b7280',
  },
};

export default faqSectionStyle;