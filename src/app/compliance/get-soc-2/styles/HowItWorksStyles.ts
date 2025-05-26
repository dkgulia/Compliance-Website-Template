import theme from '../../../../theme';

const howItWorksStyles = {
  box: {
    py: { xs: 2, sm: 2 },
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
    marginBottom: '1rem',
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.8rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    marginTop: '2rem',
  },
  iconContainer: {},
  card: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#17171799',
    borderRadius: '12px',

    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-4px)',
      background: theme.palette.background.darkTransparent || '#17171799',
    },
  },
  cardContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start',
    padding: '1rem',
  },
  cardText: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.4rem',
    color: '#6B7280',
  },
};

export default howItWorksStyles;
