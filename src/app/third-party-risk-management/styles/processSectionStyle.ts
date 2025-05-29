import theme from '../../../theme';

const processSectionStyle = {
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
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1.6,
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  step: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: '2rem', md: '4rem' },
    position: 'relative',
  },
  stepReversed: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  stepContent: {
    flex: 1,
  },
  stepHeading: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  stepDescription: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: 1.7,
  },
  stepImageContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  stepImageWrapper: {
    width: '100%',
    maxWidth: '400px',
    height: '250px',
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  stepImage: {
    objectFit: 'contain' as const,
  },
  stepImagePlaceholder: {
    width: '100%',
    maxWidth: '400px',
    height: '220px',
    borderRadius: '1rem',
    backgroundColor: '#171717',
    border: '1px solid #374151',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6b7280',
    padding: '1rem',
    fontSize: '0.875rem',
    textAlign: 'center',
  },
};

export default processSectionStyle;