import theme from '../../../theme';

const bookDemoStyle = {
  box: {
    // paddingTop: { sm: '4rem', xs: '2rem' },

    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '2.5rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  textBox: {
    flex: 1,
    maxWidth: { md: '50%' },
    textAlign: 'left',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1.5rem',
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    marginTop: '1.5rem',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.7,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    background: '#115e59',
    marginBottom: '1rem',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: 'fit-content',
  },
  icon: {
    color: '#115e59',
    marginRight: '0.75rem',
    fontSize: '1.2rem',
  },
};

export default bookDemoStyle;