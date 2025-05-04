import { Theme } from '@mui/material';

const createFaqSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '3rem' },
    paddingBottom: { sm: '4rem', xs: '3rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  accordion: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '0.5rem !important',
    overflow: 'hidden',
    '&::before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: 0,
      boxShadow: theme.shadows[3],
    },
  },
  accordionSummary: {
    padding: '1rem 1.5rem',
    backgroundColor: theme.palette.background.paper,
    minHeight: '64px',
    '&.Mui-expanded': {
      minHeight: '64px',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  accordionDetails: {
    padding: '1rem 1.5rem',
    backgroundColor: theme.palette.background.paper,
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
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
    transform: 'rotate(0deg)',
    '&.Mui-expanded': {
      transform: 'rotate(45deg)',
    },
  },
});

export default createFaqSectionStyle;