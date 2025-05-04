import theme from '../../../theme';

const benefitsSectionStyles = {
  root: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: 'center',
    padding: { xs: '1rem', sm: '2rem' },
  },
  headerBox: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '2rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  featureCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    height: '100%',
    borderRadius: '1rem',
    backgroundColor: '#17171799',
    border: `2px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  iconBox: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '0.5rem',
    marginLeft: '0.5rem',
  },
  featureIcon: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
    textAlign: 'left',
  },
  featureDescription: {
    fontSize: '0.95rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    textAlign: 'left',
  },
};

export default benefitsSectionStyles;
