import theme from '../../../theme';

const ctaSectionStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '3rem' },
    paddingBottom: { xs: '3rem', sm: '4rem' },
    backgroundColor: theme.palette.background.default,
  },
  ctaContainer: {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#111111',
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #115e59, #0d9488)',
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
    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.125rem' },
    color: '#115e59',
    fontWeight: 500,
    lineHeight: 1.4,
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: { xs: '1rem', sm: '1.125rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  button: {
    marginTop:'1rem',
    color: theme.palette.common.white,
    fontWeight: 600,
    padding: {
      xs: '0.75rem 1.5rem',
      sm: '1rem 2rem',
    },
    borderRadius: '8px',
    backgroundColor: '#115e59',
    border: '1px solid #0d9488',
    textTransform: 'none',
    fontSize: { xs: '0.95rem', sm: '1rem' },
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#0f766e',
      borderColor: '#115e59',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(17, 94, 89, 0.3)',
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
    color: 'rgba(255, 255, 255, 0.5)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
};

export default ctaSectionStyle;