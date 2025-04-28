import theme from '../../../../theme';

const DoraHeroStyle = {
  container: {
    paddingTop: { sm: '4rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    background: theme.palette.background.default,
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '75rem',
    width: '100%',
    margin: '0 auto',
    gap: { xs: '1.5rem', sm: '2rem' },
    padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    borderRadius: '1.3rem',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    background: '#115e59',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    width: { xs: 'auto', sm: '45%' },
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
    color: theme.palette.text.primary,
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: 'white',
    lineHeight: 1.6,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  listItem: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  ctaButton: {
    marginTop: '1.5rem',
		color: '#f9fafb',
		fontWeight: 800,
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.7rem 1rem',
		},
		borderRadius: '0.5rem',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		textTransform: 'none',
		fontSize: '0.9rem',
		whiteSpace: 'nowrap',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			borderColor: '#4b5563',
		},
		'&.Mui-disabled': {
			color: '#f9fafb',
			opacity: 0.5,
			backgroundColor: '#1f2937',
			border: '1px solid #374151',
		},
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: { xs: '1rem', sm: '2rem' },
    marginTop: { xs: '2rem', sm: '2rem' },

    img: {
      width: { xs: '80%', sm: '100%' },
      maxWidth: '450px',
      height: 'auto',
    },
  },
  image: {
    width: '100%',
    maxWidth: '28rem',
    borderRadius: '1rem',

  },
};

export default DoraHeroStyle;
