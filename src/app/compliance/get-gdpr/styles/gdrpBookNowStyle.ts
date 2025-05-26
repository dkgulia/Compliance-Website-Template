import theme from '../../../../theme';

const gdprBookNowStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '0px',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: { xs: '2rem', md: '3rem' },
    borderRadius: '8px',
    padding: { xs: '1.5rem', sm: '2.5rem' },
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '420px',
    height: 'auto',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover' as const,
    borderRadius: '8px',
  },
  textBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '1rem',
    fontSize: '0.9rem',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    fontWeight: 600,
    width: 'fit-content',
  },
  title: {
    fontWeight: 700,
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.2rem' },
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  point: {
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    color: '#fffff',
    fontSize: '1.3rem',
  },
  pointText: {
    color: '#6B7280',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },
  buttonContainer: {
    marginTop: '0.5rem',
  },
  button: {
    backgroundColor: '#115e59',
    color: '#f9fafb',
    borderRadius: '0.5rem',
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.25rem 1rem',
    },
    textTransform: 'none',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    border: '1px solid #0d9488',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: '#0f766e',
    },
  },
};

export default gdprBookNowStyle;
