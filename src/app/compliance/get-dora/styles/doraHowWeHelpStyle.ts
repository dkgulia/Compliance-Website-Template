import theme from '../../../../theme';

const doraHowWeHelpStyle = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    background: theme.palette.background.default,
    padding: '1rem'
  },
  innerContainer: {
    maxWidth: '75rem',
    textAlign: { xs: 'center', sm: 'center' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  grid: {
    marginTop: '1rem',
  },
  card: {
    background: '#17171799',
    borderRadius: '0.5rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    },
  },
  cardContent: {
    padding: '0.1rem !important',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '1rem',
    marginBottom: '0.25rem',
    width: '100%',
    textAlign: 'left',
  },
  cardDescription: {
    color: '#6B7280',
    fontSize: '0.8rem',
    lineHeight: 1.5,
    width: '100%',
    textAlign: 'left',
  },
};

export default doraHowWeHelpStyle;