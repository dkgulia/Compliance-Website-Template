import theme from '../../../theme';

const processSectionStyle = {
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    // paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '1200px',
    px: { xs: '1rem', sm: '2rem' },
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.75rem' },
    position: 'relative',
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '1rem',
    alignItems: 'center',
    borderRadius: '1rem',
    padding: '0rem',
    transition: 'all 0.35s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0rem 0.75rem 1.5rem rgba(0, 0, 0, 0.15)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  stepWrapperAlt: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  stepContent: {
    flex: 1,
  },
  stepNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#115e59',
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
  },
  stepDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '16/12',
    position: 'relative',
    borderRadius: '0.75rem',
    overflow: 'hidden',
  },
  stepImage: {
    objectFit: 'contain'as const,
    borderRadius: '0.75rem',
  },
  // Keeping the placeholder style for reference
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '16/9',
    borderRadius: '0.75rem',
    backgroundColor: '#115e5920',
    border: `1px dashed ${theme.palette.secondary.dark}60`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
};

export default processSectionStyle;