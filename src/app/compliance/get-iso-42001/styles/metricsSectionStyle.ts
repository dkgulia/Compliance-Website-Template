import theme from '../../../../theme';

const metricsSectionStyle = {
  container: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    background: theme.palette.background.default,
  },
  titleContainer: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  metricCard: {
    backgroundColor: '#17171799',
    borderRadius: '1rem',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    minHeight: '12rem',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
    },
  },
  metricValue: {
    color: '#115e59',
    fontWeight: 'bold',
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    marginBottom: '0.5rem',
  },
  metricLabel: {
    color: theme.palette.text.primary,
    fontWeight: 'medium',
    fontSize: { xs: '1rem', md: '1.25rem' },
  },
};

export default metricsSectionStyle;