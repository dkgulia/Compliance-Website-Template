import theme from '../../../theme';

const bookADemoStyles = {
  box: {
    py: { xs: 2, sm: 2 },
    overflow: 'hidden',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    opacity: 0.95,
  },
  textBox: {
    maxWidth: { md: '50%' },
    textAlign: 'left',
    padding: { xs: 2, sm: 4 },
  },
  title: {
    fontWeight: 'bold' as const,
    color: theme.palette.text.primary,
    fontSize: { xs: '1.5rem', sm: '2rem' },
    marginTop: '0.5rem',
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    marginBottom: 4,
    marginTop: '1rem',

    '& div': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: '0.8rem',
      borderRadius: '2rem',
      fontSize: '1rem',
      fontWeight: 500,
    },
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
		fontSize: '1.2rem',
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '16px',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '1rem',
    fontSize: '0.9rem',
    background: '#115e59',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    boxShadow: '0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
    width: 'fit-content',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'white',
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  },
};

export default bookADemoStyles;
