import theme from '../../../theme';

const quickStartOnboardingStyle = {
  container: {
    paddingBottom: { sm: '3rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: { xs: 'center', sm: 'center' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  stepCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    background: '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '1rem',
    padding: '1.5rem',
    flex: '1 1 0',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
    },
  },
  stepNumber: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#115e59',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  imagePlaceholder: {
    width: '100%',
    height: '8rem',
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  stepHeading: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  stepDescription: {
    fontSize: '0.95rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default quickStartOnboardingStyle;