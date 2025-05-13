import theme from '../../../theme';

const ctaSectionStyle = {
  box: {
    backgroundColor: theme.palette.background.default,
    paddingY: { xs: '3rem', sm: '4rem' },
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    maxWidth: '72rem',
    margin: '0 auto',
    borderRadius: '1rem',
    border: `1px solid ${theme.palette.divider}`,
    padding: { xs: '1.5rem', sm: '2rem' },
    gap: '1.5rem',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', sm: 'flex-start' },
    textAlign: { xs: 'center', sm: 'left' },
    gap: '1rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem',md:'2rem' },
    color: theme.palette.text.primary,
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontSize: { xs: '1rem', sm: '1.1rem' },
    marginBottom: '0.5rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '0.9rem', sm: '1rem' },
    lineHeight: '1.5',
    maxWidth: { xs: '100%', sm: '30rem' },
  },
  button: {
    marginTop: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    borderRadius: '0.5rem',
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    border: `1px solid ${theme.palette.secondary.dark}`,
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  imageWrapper: {
    position: 'relative',
    width: { xs: '100%', sm: '250px', md: '300px' },
    height: { xs: '200px', sm: '230px' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ctaSectionStyle;