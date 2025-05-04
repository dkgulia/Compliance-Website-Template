import { Theme } from '@mui/material/styles';

const featuresSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
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
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: '2rem',
  },
  featureCard: {
    padding: '1.5rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,

    height: '100%',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.customShadows?.cardHover || theme.customShadows?.card,
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  featureIcon: {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
    marginRight: '0.5rem',
  },
  featureTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
});

export default featuresSectionStyle;
