import theme from '../../../theme';

const conclusionStyle = {
  section: {
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
    position: 'relative',
    paddingBottom: '1rem',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  description: {
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  highlightText: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
  },
  ctaButton: {
    marginTop: '1rem',
    backgroundColor: '#115e59',
    color: '#f9fafb',
    borderRadius: '0.5rem',
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.25rem 2rem',
    },
    textTransform: 'none',
    fontSize: '1.2rem',
    whiteSpace: 'nowrap',
    border: '1px solid #0d9488',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: '#0f766e',
    },
  },
};

export default conclusionStyle;