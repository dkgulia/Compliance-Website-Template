import theme from '../../../theme';

const heroSectionStyle = {
  container: {
    background: theme.palette.background.default,
    paddingTop: { xs: '8rem', sm: '8rem', md: '8rem' },
    paddingX: { xs: '1.5rem', md: '12rem', 'xl': '16rem' },
    paddingBottom: { xs: '2.5rem', sm: '2rem', md: '4rem' },
    position: 'relative',
    overflow: 'hidden',

  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
    gap: { xs: '2rem', md: '4rem' },
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#0d9488',
    letterSpacing: '0.05em',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', md: '2.2rem' },
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.2rem' },
    color: '#0d9488',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#6b7280',
    marginBottom: '1rem',
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-end' },
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '500px',
    height: { xs: '300px', sm: '400px', md: '450px' },
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  heroImage: {
    objectFit: 'cover' as const,
  },
};

export default heroSectionStyle;