import theme from '../../../theme';

const teamInfoSectionStyle = {
  box: {
    paddingBottom: { sm: '4rem', xs: '2rem' },
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
  contentBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'center', md: 'flex-start' },
    justifyContent: 'space-between',
    gap: '3rem',
    width: '100%',
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '2.5rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    width: '100%',
    maxWidth: '500px',
    aspectRatio: '16/9',
    backgroundColor: '#115e5920',
    borderRadius: '0.75rem',
    border: `1px dashed ${theme.palette.secondary.dark}60`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#115e5930',
      border: `1px dashed ${theme.palette.secondary.dark}90`,
    },
  },
  teamIcon: {
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
  // Additional utility styles for consistency
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
};

export default teamInfoSectionStyle;