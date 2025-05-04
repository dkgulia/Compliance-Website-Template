import { Theme } from '@mui/material';

const createScreenshotsSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '3rem' },
    paddingBottom: { sm: '4rem', xs: '3rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  carouselContainer: {
    position: 'relative',
    marginTop: '2rem',
  },
  carouselItem: {
    padding: '0 1rem',
  },
  carouselContent: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1rem',
    padding: '2rem',
    overflow: 'hidden',
    boxShadow: theme.shadows[3],
    border: `1px solid ${theme.palette.divider}`,
    height: '100%',
  },
  imageContainer: {
    flex: { xs: '1', md: '0.5' },
    width: '100%',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    position: 'relative',
    height: { xs: '250px', md: '300px' },
    backgroundColor: theme.palette.background.default, // Removed opacity 80
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.divider}`,
  },
  imagePlaceholder: {
    color: theme.palette.text.disabled,
    textAlign: 'center',
    padding: '1rem',
    fontSize: '1rem',
    zIndex: 1,
  },
  textContainer: {
    flex: { xs: '1', md: '0.5' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  caption: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
  },
  carouselNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  navButton: {
    minWidth: '40px',
    height: '40px',
    borderRadius: '50%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows[2],
    },
  },
  navDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: theme.palette.divider,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      transform: 'scale(1.3)',
    },
  },
});

export default createScreenshotsSectionStyle;