import theme from '../../../theme';

const platformFeaturesStyle = {
  section: {
    py: { xs: 6, sm: 8 },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
  },
  heading: {
    textAlign: 'center',
    mb: 6,
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.5rem' },
    fontWeight: 700,
    color: theme.palette.text.primary,
    textAlign: 'center',
    mb: 2,
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.2rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    maxWidth: '800px',
    mx: 'auto',
    mb: 4,
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    mt: 4,
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: { xs: 40, sm: 48 },
    height: { xs: 40, sm: 48 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
      cursor: 'not-allowed',
    },
  },
  prevButton: {
    left: { xs: -5, sm: -15, md: -20 },
  },
  nextButton: {
    right: { xs: -5, sm: -15, md: -20 },
  },
  carouselWrapper: {
    display: 'flex',
    overflowX: 'hidden',
    width: '100%',
    position: 'relative',
  },
  carouselTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  card: {
    flex: '0 0 auto',
    width: {
      xs: '100%',
      sm: 'calc(50% - 16px)',
      md: 'calc(33.333% - 16px)',
      lg: 'calc(25% - 20px)',
    },
    mx: { xs: 1, sm: 1.5 },
    bgcolor: theme.palette.background.paper,
    borderRadius: 2,

    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    p: 3,
    height: '100%',
    minHeight: '220px',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  icon: {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    mr: 1,
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: { xs: '1.1rem', sm: '1.2rem' },
    mb: 1.5,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  cardDescription: {
    color: theme.palette.text.secondary,
    mb: 2,
    flex: 1,
  },
  newBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    borderRadius: '12px',
    fontSize: '0.7rem',
    padding: '2px 8px',
    ml: 1,
    fontWeight: 600,
  },
  learnMoreButton: {
    textTransform: 'none',
    alignSelf: 'flex-start',
    mt: 'auto',
    pt: 1,
  },
  learnMoreLink: {
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    mt: 'auto',
    pt: 1,
    display: 'inline-block',
  },
  indicatorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 4,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.action.disabled,
    mx: 0.5,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
};

export default platformFeaturesStyle;
