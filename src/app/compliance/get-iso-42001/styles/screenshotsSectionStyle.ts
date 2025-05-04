import theme from '../../../../theme';

const screenshotsSectionStyle = {
  container: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    backgroundColor: theme.palette.background.default,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    padding: { xs: '1rem', sm: '2rem' },
  },
  titleContainer: {
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '1rem',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  carouselContainer: {
    width: '100%',
    position: 'relative',
    marginTop: '2rem',
  },
  slideContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: { xs: '1rem', sm: '2rem' },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '25rem',
    borderRadius: '0.5rem',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '25rem',
    height: '15rem',
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.background.darkTransparent,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,

    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',

      backgroundColor: theme.palette.background.paper,
    },
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  caption: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    gap: '0.5rem',
  },
  navDot: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    background: theme.palette.divider,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeNavDot: {
    background: theme.palette.primary.main,
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.8)',
    },
    zIndex: 2,
  },
  prevButton: {
    left: 0,
  },
  nextButton: {
    right: 0,
  },
};

export default screenshotsSectionStyle;
