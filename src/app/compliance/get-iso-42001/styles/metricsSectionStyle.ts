import theme from '../../../../theme';

const metricsSectionStyle = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
  },
  innerContainer: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: { xs: '1rem', sm: '2rem' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginBottom: '3rem',
  },
  metricsContainer: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
    gap: '2rem',
  },
  metricCard: {
    padding: '2rem',
    borderRadius: '0.5rem',
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '12rem',
    transition: 'transform 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  metricValue: {
    fontSize: { xs: '2.5rem', sm: '3rem' },
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
    marginBottom: '0.5rem',
  },
  metricLabel: {
    fontSize: '1.1rem',
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
};

export default metricsSectionStyle;
