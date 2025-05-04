import theme from '../../../theme';

const overviewSectionStyle = {
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.5rem' },
    fontWeight: 700,
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  paragraph: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.7,
  },
  keyFeaturesContainer: {
    marginTop: '3rem',
  },
  keyFeaturesTitle: {
    fontSize: { xs: '1.5rem', sm: '2rem' },
    fontWeight: 700,
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  featureCard: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    padding: '2rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  featureTitle: {
    fontSize: { xs: '1.2rem', sm: '1.3rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  featureDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default overviewSectionStyle;
