import theme from '../../../theme';

const heroSectionStyles = {
  container: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
    padding: { xs: '5rem 1rem', sm: '1rem 1rem' },
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}15, transparent 45%)`,
      pointerEvents: 'none',
    },
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
    position: 'relative',
    zIndex: 2,
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
  },
  formBox: {
    flex: 1,
    borderRadius: '1.5rem',
    maxWidth: '600px',
    padding: '2rem',
    marginTop: { xs: '0.5rem', sm: '0.5rem' },
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  formContainer: {
    padding: '2rem',
    borderRadius: '1.5rem',
    background: theme.palette.background.paper,

    width: '100%',
    maxWidth: '600px',
    marginTop: { xs: '2rem', sm: '1.5rem' },
    border: `1px solid ${theme.palette.divider}`,
  },
  formHeading: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  compliancesLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
  },
  tagline: {
    background: '#115e59',
    display: 'inline-block',
    padding: '0.5rem 1.2rem',
    borderRadius: '2rem',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      background: theme.customGradients?.buttonHover,
    },
    '&:active': {
      transform: 'translateY(-1px)',
    },
  },
  title: {
    fontSize: { xs: '2rem', md: '2.8rem' },
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  highlight: {
    background: theme.customGradients?.primary,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline',
  },
  description: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    maxWidth: '550px',
  },
  button: {
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
  highlightWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
  },
  logoWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
    position: 'relative',
    top: '3px',
    '& img': {
      filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))',
    },
  },
  checkboxLabel: {
    color: '#000000',
    '& .MuiFormControlLabel-label': {
      color: '#ffffff',
      fontSize: '0.9rem',
    },
  },
};

export default heroSectionStyles;
