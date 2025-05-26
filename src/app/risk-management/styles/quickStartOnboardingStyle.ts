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
    marginBottom: '3rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  stepCard: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0rem 0.5rem 1rem rgba(0,0,0,0.3)',
    },
  },
  imageContainer: {
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    height: '180px',
  },
  contentContainer: {
    backgroundColor: '#171717',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    textAlign: 'left',
  },
  stepHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.75rem',
  },
  stepDescription: {
    fontSize: '0.95rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default quickStartOnboardingStyle;