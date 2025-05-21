import theme from '../../../theme';

const featuresSectionStyle = {
  box: {
    paddingTop: { sm: '1.5rem', xs: '1rem' },
    paddingBottom: { sm: '1.5rem', xs: '1rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '1200px',
    px: { xs: '1rem', sm: '1.5rem' },
    position: 'relative',
    zIndex: 1,
  },
  containerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '2.5rem',
  },
  heading: {
    fontWeight: 600,
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.2rem' },
    color: theme.palette.text.primary,
    position: 'relative',
    marginTop:'1rem'
  },
  subheading: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: '1.4',
    maxWidth: '600px',
    marginX: 'auto',
  },
  featureStep: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '3.5rem',
    gap: { xs: '1.5rem', md: '1rem' },
    position: 'relative',
  },
  featureStepReverse: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: { md: '55%' },
  },
  stepNumber: {
    color: '#115e59',
    fontSize: '1rem',
    fontWeight: 'medium',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
  },
  stepTitle: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: { xs: '1.5rem', md: '1.5rem' },
    marginBottom: '0.5rem',
    lineHeight: 1.2,
  },
  stepDescription: {
    color: theme.palette.text.secondary,
    fontSize: '0.95rem',
    lineHeight: 1.5,
    maxWidth: '95%',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: { md: '45%' },
  },
};

export default featuresSectionStyle;