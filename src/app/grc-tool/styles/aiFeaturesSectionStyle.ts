import theme from '../../../theme';

const aiFeaturesSectionStyle = {
  section: {
    padding: { xs: '4rem 1rem', md: '3rem 2rem' },
    background: '#101010',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 5,
  },
  title: {
    color: 'white',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.8rem' },
    fontWeight: '600',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: '3rem', md: '4rem' },
    position: 'relative',
  },
  featuresList: {
    flex: { xs: '1 1 100%', md: '1 1 60%' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    zIndex: 2,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    background: 'rgba(23, 23, 23, 0.4)',
    backdropFilter: 'blur(5px)',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#115e59',
    },
  },
  featureNumberContainer: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.5rem',
    background: '#115e59',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureNumber: {
    color: '#ffff',
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: theme.palette.text.secondary,
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  logoColumn: {
    flex: { xs: '1 1 100%', md: '1 1 40%' },
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  },
  logoContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '2px solid white',
    position: 'relative',
    zIndex: 2,
  },
};

export default aiFeaturesSectionStyle;
