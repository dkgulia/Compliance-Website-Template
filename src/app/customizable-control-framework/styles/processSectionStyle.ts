import theme from '../../../theme';

const processSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
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
    gap: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  tagline: {
    marginTop: { xs: '3rem', md: '2rem' },
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
  subtitle: {
    color: '#6b7280',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1.6,
    textAlign: 'center',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    width: '100%',
    maxWidth: '1000px',
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: '2rem', md: '3rem' },
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '1rem',
  },
  stepWrapperAlt: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  stepContent: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
  },
  stepNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0d9488',
    marginRight: '1rem',
    lineHeight: 1,
  },
  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: { xs: 'center', md: 'flex-start' },
  },
  stepDescription: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: 1.6,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: { xs: '200px', sm: '250px', md: 'auto' },
  },
  imageWrapper: {
    width: '100%',
    maxWidth: { xs: '280px', sm: '350px', md: '400px' },
    height: { xs: '200px', sm: '250px', md: '300px' },
    position: 'relative',
    borderRadius: '0.75rem',
    overflow: 'hidden',
  },
  stepImage: {
    objectFit: 'contain' as const,
    borderRadius: '0.75rem',
  },
};

export default processSectionStyle;