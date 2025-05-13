import theme from '../../../theme';

const platformHighlightsStyle = {
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',

  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    position: 'relative',
    zIndex: 1,
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.5rem',md:'2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    textAlign: 'center',
    position: 'relative',

  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
    gap: '1.75rem',
  },
  feature: {
    backgroundColor: theme.palette.background.darkTransparent,
    padding: '1.75rem',
    borderRadius: '1rem',
    transition: 'all 0.3s ease',
    height: { sm: '16rem', xs: 'auto', md: '19rem' },
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  iconContainer: {
    color: theme.palette.secondary.dark,
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '3.5rem',
    height: '3.5rem',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(17, 94, 89, 0.1)',
    padding: '0.5rem',
  },
  icon: {
    fontSize: '2rem',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1) rotate(5deg)',
    },
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.75rem',
    position: 'relative',
    zIndex: 1,
  },
  featureDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    position: 'relative',
    zIndex: 1,
  },
};

export default platformHighlightsStyle;
