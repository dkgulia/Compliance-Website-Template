import theme from '../../../../theme';

const pciDssBookADemoStyle = {
	box: {
	    padding: { xs: '2rem 0', sm: '4rem 0' },
	    backgroundColor: theme.palette.background.default,
	},
	container: {
	    display: 'flex',
	    flexDirection: { xs: 'column', md: 'row' },
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    gap: { xs: '2rem', md: '4rem' },
	    maxWidth: '75rem',
	    marginX: 'auto',
	    px: { xs: '1rem', sm: '2rem' },
	},
	imageBox: {
	    flex: { xs: '1', md: '1 1 50%' },
	    width: { xs: '100%', md: '50%' },
	    maxWidth: { xs: '400px', md: '500px' },
	    height: 'auto',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderRadius: '1rem',
	    overflow: 'hidden',
	    position: 'relative',
	    margin: '0 auto',
	},
	image: {
	    objectFit: 'contain' as const,
	    width: '100%',
	    height: 'auto',
	    maxHeight: '400px',
	    display: 'block',
	},
	textBox: {
	    flex: { xs: '1', md: '1 1 50%' },
	    display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'center',
	    padding: { xs: '1rem', md: '2rem' },
	},
	tagline: {
	    display: 'inline-block',
	    background: theme.palette.primary.main,
	    color: theme.palette.text.primary,
	    fontWeight: 'bold',
	    padding: '0.5rem 1.5rem',
	    borderRadius: '2rem',
	    marginBottom: '1rem',
	    fontSize: '1rem',
	},
	title: {
	    color: theme.palette.primary.light,
	    fontWeight: 600,
	    marginBottom: '2rem',
	    fontSize: { xs: '1.6rem', sm: '2rem' },
	},
	points: {
	    display: 'flex',
	    flexDirection: 'column',
	    gap: '1rem',
	    marginBottom: '2rem',
	},
	point: {
	    display: 'flex',
	    alignItems: 'center',
	    gap: '0.75rem',
	    color: theme.palette.text.primary,
	},
	icon: {
	    color: theme.palette.success.main,
	    fontSize: '1.5rem',
	},
	buttonContainer: {
	    marginTop: '1rem',
	},
	button: {
	    background: theme.palette.primary.main,
	    color: theme.palette.text.primary,
	    fontWeight: 'bold',
	    padding: '0.75rem 2rem',
	    borderRadius: '0.5rem',
	    textTransform: 'none',
	    fontSize: '1rem',
	    '&:hover': {
		    background: theme.palette.primary.dark,
		    boxShadow: theme.customShadows?.button,
	    },
	},
};

export default pciDssBookADemoStyle;