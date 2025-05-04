import theme from '../../../theme';

const featuresStyles = {
  box: {
    py: { xs: 2, sm: 2 },
    background: theme.palette.background.default,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
  },
  containerBox: {
    width: { xs: '100%', sm: '80%', md: '60%' },
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.5rem', sm: '2rem' },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',

    padding: '2rem',
    height: '100%',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  iconContainer: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    color: theme.palette.success.main,
  },
  typography: {
    title: {
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      marginBottom: '0.75rem',
    },
    body: {
      color: theme.palette.text.secondary,
    },
  },
};

export default featuresStyles;
