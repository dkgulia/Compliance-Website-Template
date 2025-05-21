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
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { xs: '2rem 1.5rem', sm: '3rem 2rem', md: '3rem 4rem' },
  },
  textContent: {
    flex: '1',
    maxWidth: { md: '60%' },
    marginRight: { md: '2rem' },
    marginBottom: { xs: '2rem', md: '0' },
  },
  description: {
    fontSize: { xs: '1rem', sm: '1.125rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  button: {
    color: theme.palette.common.white,
    fontWeight: 600,
    padding: {
      xs: '0.5rem 1rem',
      sm: '0.75rem 1.5rem',
    },
    borderRadius: '8px',
    backgroundColor: '#1f2937',
    border: '1px solid #4b5563',
    textTransform: 'none',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#6b7280',
      transform: 'translateY(-2px)',
    },
  },
  imageContainer: {
    flex: '1',
    maxWidth: { md: '40%' },
    position: 'relative',
    width: '100%',
    height: { xs: '200px', sm: '250px', md: '300px' },
    borderRadius: '8px',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
  image: {
    objectFit: 'contain'as const,
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