import theme from '../../../theme';

const platformWalkthroughStyle = {
  container: {
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: { xs: 'center', sm: 'center' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  carouselContainer: {
    width: '100%',
    marginTop: '2rem',
    position: 'relative',
  },
  carouselItem: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
  },
  carouselItemReverse: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row-reverse' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: { xs: '100%', md: '50%' },
  },
  // New style for image wrapper
  imageWrapper: {
    width: '100%',
    maxWidth: '28rem',
    minHeight: '16rem',
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
   
  },
  screenshotImage: {
    objectFit: 'contain'as const,
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '28rem',
    minHeight: '16rem',
    borderRadius: '1rem',
    backgroundColor: '#17171799',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    textAlign: { xs: 'center', md: 'left' },
    maxWidth: { xs: '100%', md: '50%' },
  },
  caption: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  navigationDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#4b5563',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeDot: {
    backgroundColor: '#115e59',
    transform: 'scale(1.2)',
  },
};

export default platformWalkthroughStyle;

