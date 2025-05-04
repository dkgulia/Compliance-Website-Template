import theme from '../../../../theme';

const platformWalkthroughStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '3rem' },
    paddingBottom: { xs: '2rem', sm: '3rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '75rem',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  headerBox: {
    textAlign: 'center' as const,
    maxWidth: '50rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: 'white',
    marginBottom: '1rem',
  },
  subheading: {
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  carouselContainer: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column' as const,
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
    backgroundColor: theme.palette.background.darkTransparent,
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
    position: 'relative',
  },
  slide: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '20rem',
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
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
};

export default platformWalkthroughStyle;