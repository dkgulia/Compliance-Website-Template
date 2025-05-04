import theme from '../../../../theme';

const ctaSectionStyle = {
  container: {
    paddingTop: { sm: '3rem', xs: '2rem' },
    paddingBottom: { sm: '3rem', xs: '2rem' },
    background:
      'linear-gradient(135deg, ' +
      theme.palette.secondary.main +
      ' 0%, ' +
      theme.palette.secondary.dark +
      ' 100%)',
  },
  innerContainer: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: 'center',
    padding: { xs: '1rem', sm: '2rem' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.primary,
    opacity: 0.9,
    maxWidth: '40rem',
    margin: '0 auto 2rem auto',
  },
  button: {
    color: theme.palette.common.white,
    fontWeight: 800,
    padding: {
      xs: '0.5rem 1.5rem',
      sm: '0.75rem 2rem',
      md: '1rem 2.5rem',
    },
    borderRadius: '0.5rem',

    border: `1px solid ${theme.palette.divider}`,
    textTransform: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      transform: 'translateY(-2px)',
    },
  },
  icon: {
    fontSize: '2.5rem',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
};

export default ctaSectionStyle;
