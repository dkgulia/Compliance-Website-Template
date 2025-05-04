import theme from '../../../theme';

const whyUsStyles = {
  box: {
    py: { xs: 2, sm: 2 },
    color: theme.palette.text.primary,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
    marginBottom: '2rem',
  },
  card: {
    padding: '1.5rem',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '5 / 3',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
    },
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: '1.2rem',
    marginBottom: '0.75rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.5,
    marginTop: '0.5rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: '50%',
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  typography: {
    title: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      fontSize: '1.4rem',
      marginBottom: '0.5rem',
    },
    body: {
      color: theme.palette.text.secondary,
      fontSize: '1rem',
      textAlign: 'center',
      lineHeight: '1.5',
    },
  },
};

export default whyUsStyles;
