import theme from '../../../theme';

const infoStyles = {
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
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: '2rem', md: '4rem' },
    width: '100%',
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#0d9488',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: 1.6,
    marginBottom: '0.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '500px',
    height: { xs: '300px', sm: '400px', md: '450px' },
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
};


export default infoStyles;