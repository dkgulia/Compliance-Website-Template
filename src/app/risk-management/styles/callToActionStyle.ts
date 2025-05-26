import theme from '../../../theme';

const callToActionStyle = {
  container: {
    paddingTop: { xs: '2rem', sm: '4rem' },
    paddingBottom: { xs: '1rem', sm: '2rem' },
    backgroundColor: theme.palette.background.default,
    px: { xs: 2, sm: 4 },
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
    marginBottom: '0.75rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.secondary.main,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  formBox: {
    flex: 1,
    maxWidth: { xs: '100%', md: '400px' },
    background: theme.palette.background.darkTransparent || '#17171799',
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
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  formButton: {
    marginTop: '1.5rem',
    color: theme.palette.text.primary,
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.secondary.dark,
    border: `1px solid ${theme.palette.secondary.main}`,
    textTransform: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-2px)',
    },
  },
  imagePlaceholder: {
    width: '100%',
    height: '10rem',
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
  },
};

export default callToActionStyle;
