import theme from '../../../theme';

const platformHighlightsStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '0rem', md: '6rem' },
    gap: '2rem',
    alignItems: 'center',
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop:{xs:'1rem'}
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
    gap: '1rem',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: { xs: '1rem', sm: '1.5rem' },
    borderRadius: '0.5rem',
    backgroundColor: '#171717',
    border: '1px solid #374151',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    minHeight: { xs: '140px', sm: 'auto' },
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#0d9488',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#115e59',
    color: 'white',
    width: '45px',
    height: '45px',
    flexShrink: 0,
  },
  icon: {
    fontSize: { xs: '1.25rem', sm: '1.5rem' },
    color: 'white',
  },
  featureTitle: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  featureDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
    lineHeight: 1.7,
  },
};

export default platformHighlightsStyle;