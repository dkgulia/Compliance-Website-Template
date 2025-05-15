import theme from '../../../theme';

const supportedFrameworksStyle = {
  // Common section styling
  box: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  containerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.75rem' },
    position: 'relative',
  },

  // Frameworks Section styling
  frameworksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    maxWidth: '1100px',
  },
  frameworkItem: {
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.75rem',
  },
  checkIcon: {
    color: '#115e59',
    fontSize: '1.5rem',
  },
  frameworkName: {
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: '1rem',
  },
  note: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    marginTop: '1rem',
    fontStyle: 'italic',
  },

  // Professional Assistance Section styling
  assistanceContainer: {
    width: '100%',
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  },
  assistanceContent: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    padding: '2.5rem',
  },
  textSection: {
    flex: '1',
    paddingRight: { xs: '0', md: '2rem' },
    marginBottom: { xs: '2rem', md: '0' },
  },
  imageSection: {
    flex: '1',
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-end' },
    alignItems: 'center',
  },
  tag: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    background: '#115e59',
    marginBottom: '1rem',
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
  },
  assistanceTitle: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  assistanceSubtitle: {
    fontSize: { xs: '1.1rem', sm: '1.2rem' },
    color: theme.palette.secondary.main,
    marginBottom: '1rem',
    fontWeight: 500,
  },
  assistanceDescription: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  assistanceImageContainer: {
    width: '100%',
    maxWidth: '400px',
    aspectRatio: '16/9',
    backgroundColor: '#115e5915',
    borderRadius: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    border: `1px dashed ${theme.palette.secondary.dark}60`,
  },
  assistanceIcon: {
    fontSize: '3rem',
    color: '#115e59',
    marginBottom: '1rem',
  },
  imagePlaceholder: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
};

export default supportedFrameworksStyle;