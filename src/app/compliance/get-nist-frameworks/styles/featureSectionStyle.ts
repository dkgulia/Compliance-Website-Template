import theme from '../../../../theme';

const nistFeaturesSectionStyles = {
  box: {
    paddingBottom: '3rem',
    backgroundColor: 'transparent',
  },
  container: {
    position: 'relative',
    maxWidth: '100%',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
  },
  containerBox: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '2rem',
  },
  heading: {
    fontWeight: 600,
    textAlign: 'center',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: '1.5rem',
  },
  cardContainer: {
    display: 'flex',
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: '#17171799',
    borderRadius: '0.5rem',
    border: '1px solid ${theme.palette.divider}',
    boxShadow: 'none',
    padding: { xs: '1rem', sm: '1.5rem' },
    transition: 'none',
    '&:hover': {
      transform: 'none',
      boxShadow: 'none',
    },
  },
  stack: {
    alignItems: 'flex-start',
    textAlign: 'left',
    spacing: 1.5,
  },
  iconContainer: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
  },
  icon: {
    fontSize: '1.5rem',
    color: 'white',
  },
  typography: {
    title: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'left',
      fontSize: '1.25rem',

    },
    body: {
      color: '#9CA3AF',
      textAlign: 'left',
      lineHeight: 1.4,
      fontSize: '0.875rem',
    },
  },
};

export default nistFeaturesSectionStyles;