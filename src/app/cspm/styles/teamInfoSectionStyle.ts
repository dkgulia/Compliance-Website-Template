import theme from '../../../theme';

const teamInfoSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '0rem', md: '0rem' },
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
    gap: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#0d9488',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: '2rem', md: '4rem' },
    backgroundColor: '#171717',
    borderRadius: '1rem',
    padding: { xs: '2rem', md: '1rem' },
    border: '1px solid #374151',
    width: '100%',
    maxWidth: '1100px',
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    textAlign: { xs: 'center', md: 'left' },
  },
  description: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: { xs: '250px', sm: '300px', md: 'auto' },
  },
  imageWrapper: {
    width: '100%',
    maxWidth: { xs: '280px', sm: '350px', md: '400px' },
    height: { xs: '250px', sm: '300px', md: '350px' },
    position: 'relative',
    borderRadius: '0.75rem',
    overflow: 'hidden',
  },
  teamImage: {
    objectFit: 'contain' as const,
  },
};

export default teamInfoSectionStyle;