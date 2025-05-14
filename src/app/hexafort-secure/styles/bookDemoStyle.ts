import theme from '../../../theme';

const bookDemoStyle = {
  box: {
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
    px: { xs: 2, sm: 4 },
  },
  bannerContainer: {
    background: '#17171799',
    borderRadius: { xs: '0.75rem', sm: '12px' },
    width: '100%',
    maxWidth: '75rem',
    marginX: 'auto',
    padding: { xs: '1.5rem', sm: '3rem' },
    paddingLeft: { xs: '1rem', sm: '3rem' },
    paddingRight: { xs: '1rem', sm: '3rem' },
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
    marginTop: { xs: '1rem', md: '0' },
  },
  titleSection: {
    width: '100%',
    marginTop: { xs: '0.5rem', sm: '1rem' },
  },
  descriptionSection: {
    width: '100%',
  },
  buttonSection: {
    width: '100%',
  },
  heading: {
    fontWeight: '600',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.4rem', sm: '2rem' },
    marginBottom: { xs: '0.75rem', md: '0' },
    lineHeight: 1.3,
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    color: '#6b7280',
    fontSize: { xs: '0.9rem', md: '1rem' },
    lineHeight: '1.5',
  },
  button: {
    marginTop: { xs: '1rem', sm: '1.5rem' },
    color: '#f9fafb',
    fontWeight: 600,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#115e59',
    border: '1px solid #0d9488',
    textTransform: 'none',
    fontSize: { xs: '0.85rem', sm: '0.9rem' },
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#0f766e',
      borderColor: '#0d9488',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#115e59',
      border: '1px solid #0d9488',
    },
  },
  iconWrapper: {
    width: { xs: '120px', sm: '200px', md: '300px' },
    height: { xs: '120px', sm: '200px', md: '300px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#115e59',
    marginRight: '0.75rem',
    fontSize: '1.2rem',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '1rem',
    background: '#115e59',
    marginBottom: '0.75rem',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: 'fit-content',
  },
};

export default bookDemoStyle;