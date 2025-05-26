import theme from '../../../../theme';

const screenshotsSectionStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '3rem' },
    paddingBottom: { xs: '2rem', sm: '3rem' },
    backgroundColor: theme.palette.background.default,
  },
  headerBox: {
    textAlign: 'center' as const,
    maxWidth: '50rem',
    margin: '0 auto',
    marginBottom: '2rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  carouselContainer: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as any,
    gap: '1.5rem',
  },
  navigationArrows: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  },
  navArrow: {
    color: theme.palette.text.primary,
    backgroundColor: '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: '#262626',
    },
  },
  slidePrevNext: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  slideCountText: {
    color: theme.palette.text.secondary,
  },
  slideContent: {
    width: '100%',
    position: 'relative' as any,
    minHeight: '400px',
  },
  slide: {
    display: 'flex',
    flexDirection: 'column' as any,
    gap: '1.5rem',
    alignItems: 'center',
  },
  slideVisible: {
    display: 'flex',
    flexDirection: 'column' as any,
    gap: '1.5rem',
    alignItems: 'center',
  },
  slideHidden: {
    display: 'none',
  },

  imageContainer: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },

  imageStyle: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain' as any,
    borderRadius: '8px',
  },
  captionBox: {
    width: '100%',
    textAlign: 'center' as const,
  },
  caption: {
    color: theme.palette.text.primary,
    fontWeight: '600',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: theme.palette.divider,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  // Active dot styling moved from inline
  dotActive: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(16, 185, 129, 0.7)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    transform: 'scale(1.2)',
  },
};

export default screenshotsSectionStyle;