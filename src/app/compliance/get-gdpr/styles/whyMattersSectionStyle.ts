import theme from '../../../../theme';

const whyMattersSectionStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '5px',
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: { xs: '2rem', md: '3rem' },
    marginTop: '3rem',
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    lineHeight: 1.2,
    marginBottom: '0.75rem',
  },
  sectionSubtitle: {
    color: '#6B7280',
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: 1.5,
    maxWidth: '700px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  featureCard: {
    height: '100%',
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  cardContent: {
    padding: '0.8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    height: '100%',
  },
  iconContainer: {
    backgroundColor: '#115e59',
    width: '38px',
    height: '38px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '20px',
    color: 'white',
  },
  featureTitle: {
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
    fontWeight: 600,
    textAlign: 'left',
    marginBottom: '0.5rem',
    width: '100%',
  },
  featureDescription: {
    color: '#6B7280',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    textAlign: 'left',
    width: '100%',
  },
};

export default whyMattersSectionStyle;
