import { Theme } from '@mui/material';

const createMetricsSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '3rem' },
    paddingBottom: { sm: '4rem', xs: '3rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    textAlign: 'center',
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
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
    gap: '2rem',
  },
  metricCard: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1rem',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
    position: 'relative',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    },
  },
  metricValue: {
    fontSize: { xs: '2.5rem', sm: '3.5rem' },
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: '1rem',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  metricLabel: {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
});

export default createMetricsSectionStyle;