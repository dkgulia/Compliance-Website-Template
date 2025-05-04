import theme from '../../../theme';

const howItWorksSectionStyles = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    marginTop: '0rem',
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    marginTop: '1rem',
    textAlign: { xs: 'center', sm: 'center' },
    background: '#17171799',
    borderRadius: { xs: '0rem', md: '2rem' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '1.5rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: '1rem',
    marginTop: '1.5rem',
    position: 'relative',
  },
  card: {
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1.25rem',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    zIndex: 2,
    '&:hover': {
      transform: 'translateY(-0.25rem)',
      boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
    },
  },
  stepNumber: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    color: theme.palette.primary.main,
    lineHeight: 1,
  },
  stepHeading: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  stepDescription: {
    color: theme.palette.text.muted,
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: '0.75rem',
  },
  stepImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    marginTop: '0.75rem',
  },
  stepsConnector: {
    position: 'absolute',
    top: '25%',
    left: '0',
    right: '0',
    height: '2px',
    backgroundColor: theme.palette.divider,
    zIndex: 1,
    display: { xs: 'none', md: 'block' },
  },
};

export default howItWorksSectionStyles;
