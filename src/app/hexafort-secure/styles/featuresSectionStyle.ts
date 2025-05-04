// src/app/hexafort-secure/styles/featuresSectionStyle.ts
import theme from '../../../theme';

const featuresSectionStyle = {
  box: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    px: { xs: '1rem', sm: '2rem' },
  },
  containerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '2rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
  },
  subheading: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  featureStep: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '4rem',
    gap: '2rem',
  },
  featureStepReverse: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    textAlign: { xs: 'center', md: 'left' },
    maxWidth: { xs: '100%', md: '26rem' },
  },
  stepNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  stepTitle: {
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: { xs: '1.2rem', sm: '1.4rem' },
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  stepDescription: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  featureIcon: {
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
    marginRight: '0.5rem',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '26rem',
    height: '14rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.divider}`,

    padding: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
};

export default featuresSectionStyle;
