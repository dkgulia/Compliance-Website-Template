import theme from '../../../theme';

const callToActionSectionStyles = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    marginTop: '0rem',
    background: theme.palette.background.default,
  },
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#17171799',
    borderRadius: { xs: '0rem', md: '2rem' },
    width: '100%',
    maxWidth: '75rem',
    marginX: 'auto',
    paddingX: { xs: '1rem', sm: '2rem' },
    paddingY: '2rem',
    position: 'relative',
    flexDirection: { xs: 'column', md: 'row' },
    textAlign: { xs: 'center', md: 'left' },
    gap: '2rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    marginBottom: '1rem',
    color: theme.palette.text.secondary,
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  ctaButton: {
    marginTop: '1rem',
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
    alignSelf: { xs: 'center', md: 'flex-start' },
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: { xs: '100%', md: '40%' },
    height: { xs: '250px', md: '300px' },
  },
  ctaImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
    maxWidth: '400px',
    objectFit: 'contain',
  },
};

export default callToActionSectionStyles;
