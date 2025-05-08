import theme from '../../../theme';

const platformFeaturesStyle = {

  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
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
  heading: {
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
    textAlign: 'center',
    marginBottom: '1rem',
    position: 'relative',
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },

  // Updated carousel container with better positioning
  carouselContainer: {
    position: 'relative',
    width: '100%',
    marginTop: '2rem',
    paddingX: { xs: '2rem', sm: '3rem', md: '4rem' }, // Add padding for button space
    display: 'flex',
    alignItems: 'center',
  },

  // Updated navigation button styles
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    backgroundColor: 'rgba(17, 94, 89, 0.2)',
    color: 'white',
    borderRadius: '50%',
    width: { xs: 40, sm: 48 },
    height: { xs: 40, sm: 48 },
    minWidth: { xs: 40, sm: 48 }, // Ensure consistent sizing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(17, 94, 89, 0.4)',
    },
    '&:disabled': {
      backgroundColor: 'rgba(17, 94, 89, 0.1)',
      color: 'rgba(255, 255, 255, 0.5)',
      cursor: 'not-allowed',
    },
    padding: 0, // Remove padding that might affect positioning
  },

  // Fixed positioning for prev/next buttons
  prevButton: {
    left: { xs: 0, sm: 0, md: 0 },
  },
  nextButton: {
    right: { xs: 0, sm: 0, md: 0 },
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
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '220px',
    transition: 'all 0.35s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0rem 0.75rem 1.5rem rgba(0, 0, 0, 0.15)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'left',
    fontSize: { xs: '1.1rem', sm: '1.2rem' },
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
  },
  cardDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    lineHeight: 1.7,
    fontSize: '1rem',
    flex: 1,
  },
  newBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#115e59',
    color: 'white',
    borderRadius: '12px',
    fontSize: '0.7rem',
    padding: '2px 8px',
    marginLeft: '0.75rem',
    fontWeight: 600,
  },
  learnMoreLink: {
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: 'auto',
    paddingTop: '1rem',
    display: 'inline-block',
    color: '#115e59',
  },
  indicatorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'rgba(17, 94, 89, 0.2)',
    marginX: 0.5,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeIndicator: {
    backgroundColor: '#115e59',
  },
};

export default platformFeaturesStyle;