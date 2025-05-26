import theme from '../../../theme';

const conclusionStyle = {
  section: {
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: '#115e59',
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
    marginTop:'2rem',
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
    color: theme.palette.text.primary,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  highlightText: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
  },
  ctaButton: {
    marginTop: '0.5rem',
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 2rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#1f2937',
    border: '1px solid #4b5563',
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
    },
  },
};

export default conclusionStyle;