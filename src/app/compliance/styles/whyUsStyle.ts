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
    textAlign: 'left',
    backgroundColor: theme.palette.background.paper,
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
    },
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    textAlign: 'left',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.5,
    textAlign: 'left',
  },
  iconContainer: {
    borderRadius: '0.5rem',
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.dark,
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
      textAlign: 'left',
      lineHeight: '1.5',
    },
  },
};

export default whyUsStyles;