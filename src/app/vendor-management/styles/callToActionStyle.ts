import theme from '../../../theme';

const callToActionStyle = {
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  contentWrapper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1rem',
    padding: { xs: '2rem', sm: '3rem' },

    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '3rem',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '350px',
    height: '200px',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.divider}`,

    padding: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  ctaButton: {
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
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
      transform: 'translateY(-2px)',
    },
  },
};

export default callToActionStyle;
