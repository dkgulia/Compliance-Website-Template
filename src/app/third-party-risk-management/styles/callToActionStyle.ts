import theme from '../../../theme';

const callToActionStyle = {
  section: {

    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',

  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    position: 'relative',
    zIndex: 1,
  },
  contentWrapper: {
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: { xs: '2rem', sm: '3rem' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '3rem',
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
    },
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.2rem',md:'2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    position: 'relative',
    paddingBottom: '0.75rem',

  },
  subtitle: {
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    color: '#115e59',
    marginBottom: '1.5rem',
    fontWeight: 500,
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    lineHeight: 1.7,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '350px',
    height: '200px',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.darkPaper || theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
    padding: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
    },
  },
  ctaButton: {
    backgroundColor: '#115e59',
		color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.25rem 0.5rem',
		},
		textTransform: 'none',
		fontSize: '1rem',
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
  },
};

export default callToActionStyle;
