import theme from '../../../theme';

const platformHighlightsStyle = {
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
  
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem',md:'2rem'},
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
    gap: '1.5rem',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#17171799',
    borderRadius: '1rem',
    height: { sm: 'auto', xs: 'auto' },
    minHeight: '210px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1rem',
  },
  iconContainer: {
    color: theme.palette.primary.main,
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '2rem',
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.75rem',
  },
  featureDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default platformHighlightsStyle;
