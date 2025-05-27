import theme from '../../../theme';

const aiFeaturesSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '3.5rem', md: '6rem' },
    gap: '2rem',
    alignItems: 'center',
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#0d9488',
    letterSpacing: '0.05em',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom:{xs:'2rem'}
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    gap: { xs: '2rem', md: '4rem' },
    position: 'relative',
    width: '100%',
  },
  featuresList: {
    flex: { xs: '1 1 100%', md: '1 1 60%' },
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '1rem', sm: '1.5rem',md:'1rem' },
    zIndex: 2,
    marginTop:{xs:'1rem'}
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: { xs: '0.75rem', sm: '1.5rem' },
    padding: { xs: '0.75rem', sm: '1.5rem' },
    borderRadius: { xs: '0.75rem', sm: '1rem' },
    background: '#171717',
    border: '1px solid #374151',
    position: 'relative',
    zIndex: 2,
    minHeight: { xs: '80px', sm: 'auto' },
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#0d9488',
    },
  },
  featureNumberContainer: {
    width: { xs: '1.5rem', sm: '2.5rem' },
    height: { xs: '1.5rem', sm: '2.5rem' },
    borderRadius: '0.5rem',
    backgroundColor: '#115e59',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureNumber: {
    color: '#ffff',
    fontSize: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' },
    fontWeight: '700',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: { xs: '0.25rem', sm: '0.5rem' },
  },
  featureDescription: {
    color: '#6b7280',
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  logoColumn: {
    flex: { xs: '1 1 100%', md: '1 1 40%' },
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: { xs: '250px', md: '400px' },
    marginBottom: { xs: '0.5rem', md: 0 },
  },
};

export default aiFeaturesSectionStyle;