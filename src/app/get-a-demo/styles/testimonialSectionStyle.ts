
import theme from '../../../theme';

const testimonialSectionStyle = {
  box: {
    padding: { xs: '2rem 0', md: '1rem 0' },
    background: theme.palette.background.default,
    position: 'relative',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    display: 'flex',
    flexDirection: 'column',
  },
  testimonialContainer: {
    padding: { xs: '0', sm: '0' },
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
  },
  testimonialContent: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: '2rem', md: '4rem' },
    alignItems: 'center',
  },
  imageColumn: {
    flex: { md: '0 0 30%', lg: '0 0 25%' },
    position: 'relative',
  },
  contentColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    width: { xs: '220px', md: '220px' },
    height: { xs: '220px', md: '220px' },
    border: '5px solid  #115e59',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  quoteText: {
    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
    lineHeight: 1.6,
    color: 'white',
    position: 'relative',
    fontWeight: 400,
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem',
  },
  authorName: {
    fontWeight: 600,
    fontSize: '1.1rem',
    color:  '#115e59',
  },
  authorPosition: {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: '0.2rem',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '30px',
    padding: '0.3rem 0.5rem',
  },
  navButton: {
    color: 'white',
    padding: '0.3rem',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginX: '0.5rem',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: '0 4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeDot: {
    backgroundColor:  '#115e59',
    transform: 'scale(1.2)',
  },
};

export default testimonialSectionStyle;