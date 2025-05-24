import theme from '../../../theme';

const ctaSectionStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '4rem' },
    paddingBottom: { xs: '1rem', sm: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  ctaContainer: {
    borderRadius: '1rem',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { xs: '2rem 1.5rem', sm: '3rem 2rem', md: '3rem 4rem' },
    gap: { xs: '2rem', md: '3rem' },
  },
  textContent: {
    flex: '1',
    maxWidth: { md: '55%' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.secondary.main,
    fontWeight: 500,
    lineHeight: 1.4,
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  button: {
    marginTop: '1rem',
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
  imageContainer: {
    flex: '1',
    maxWidth: { md: '45%' },
    position: 'relative',
    width: '100%',
    height: { xs: '220px', sm: '280px', md: '320px' },
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  image: {
    objectFit: 'cover' as const,
  },
  illustrationPlaceholder: {
    width: '100%',
    maxWidth: '350px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '1rem',
  },
  placeholderText: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
};

export default ctaSectionStyle;
