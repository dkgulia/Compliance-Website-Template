import { Theme } from '@mui/material';

const createScreenshotsSectionStyle = (theme: Theme) => ({
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
    marginBottom: '0.5rem',
  },
  subheading: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.5,
  },
  carouselContainer: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
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
    position: 'relative' as const,
    minHeight: '400px',
  },
  slide: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: '350px',
    backgroundColor: '#17171799',
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
    color: theme.palette.text.secondary,
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
});

export default createScreenshotsSectionStyle;