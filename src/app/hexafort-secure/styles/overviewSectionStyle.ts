import theme from '../../../theme';

const overviewSectionStyle = {
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    // paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '1200px',
    px: { xs: '1rem', sm: '2rem' },
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
    position: 'relative',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
    marginBottom: '3rem',
  },
  paragraph: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.7,
  },
  keyFeaturesContainer: {
    marginTop: '1rem',
    width: '100%',
  },
  keyFeaturesTitle: {
    fontWeight: '600',
    fontSize: { xs: '1.5rem', sm: '2rem' },
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: '1.75rem',
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
  },
  featureCard: {
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '1.75rem',
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'all 0.35s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0rem 0.75rem 1.5rem rgba(0, 0, 0, 0.15)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  featureTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.1rem', sm: '1.2rem' },
    marginBottom: '0.75rem',
  },
  featureDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    lineHeight: 1.7,
    fontSize: '1rem',
  },
};

export default overviewSectionStyle;