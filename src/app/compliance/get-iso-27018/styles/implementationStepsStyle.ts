import theme from '../../../../theme';

const implementationStepsStyle = {
  container: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
    backgroundColor: theme.palette.background.default,
  },
  headingContainer: {
    textAlign: 'center' as const,
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem' },
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#6B7280',
    maxWidth: '650px',
    margin: '0 auto',
  },
  stepsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  stepCard: {
    backgroundColor: '#17171799',
    borderRadius: '1rem',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    },
  },
  stepNumberCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 1.5rem auto'
  },
  stepNumber: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: 'white'
  },
  stepTitle: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    margin: '0 0 0.75rem 0',
    textAlign: 'center' as const,
    fontSize: '1.25rem',
  },
  stepDescription: {
    color: '#6B7280',
    textAlign: 'center' as const,
    padding: '0 0.5rem',
    fontSize: '0.95rem',
    lineHeight: 1.5,
  }
};

export default implementationStepsStyle;