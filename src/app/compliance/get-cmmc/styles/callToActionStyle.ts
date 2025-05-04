import theme from '../../../../theme';

const callToActionStyle = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    padding: { xs: '1rem', sm: '2rem' },
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.secondary.main,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: '#6B7280',
    lineHeight: 1.6,
  },
  formBox: {
    flex: 1,
    maxWidth: { xs: '100%', md: '400px' },
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  formTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    textAlign: 'center',
  },
  formLabel: {
    marginBottom: '0.5rem',
  },
  formButton: {
    marginTop: '1.5rem',
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
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
  },
};

export default callToActionStyle;
