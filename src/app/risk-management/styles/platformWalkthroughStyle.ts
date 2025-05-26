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
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,

  },
  carouselContainer: {
    width: '100%',
    marginTop: '0rem',
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
  imageWrapper: {
    width: '80%',
    maxWidth: '80%',
    minHeight: { xs: '250px', sm: '350px', md: '400px' },
    aspectRatio: '16 / 9',
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
  },

  screenshotImage: {
    objectFit: 'contain' as const,
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '28rem',
    minHeight: { xs: '200px', sm: '300px', md: '350px' },
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
