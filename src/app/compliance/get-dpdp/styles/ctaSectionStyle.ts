import { Theme } from '@mui/material';

const createCtaSectionStyle = (theme: Theme) => ({
  container: {
    padding: { xs: '3rem 1rem', md: '5rem 2rem' },
    backgroundColor: theme.palette.background.default,
    marginTop: '2rem',
    marginBottom: '2rem',

  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.875rem', md: '2.25rem' },
    fontWeight: '700',
    marginBottom: '1rem',
  },
  description: {
    color: '#6B7280',
    fontSize: { xs: '1rem', md: '1.125rem' },
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  button: {
    backgroundColor: '#115e59',
    color: '#f9fafb',
    fontWeight: '600',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #0d9488',
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: '#0f766e',
    },
  },
});

export default createCtaSectionStyle;