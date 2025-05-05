import theme from '../../../../theme';

const coreElementsStyle = {
	box: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginX: { xs: '1rem', sm: '0rem' },
	},
	container: {
		maxWidth: '1200px',
		marginX: 'auto',
		px: { xs: '1.5rem', sm: '2rem' },
	},
	heading: {
		fontWeight: '600',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
		textAlign: 'center',
		letterSpacing: '-0.02em',
	},
	subtitle: {
		color: '#6B7280',
		fontSize: '1.2rem',
		marginBottom: '2rem',
		textAlign: 'center',
		fontWeight: '400',
		maxWidth: '700px',
		marginX: 'auto',
	},
	grid: {
		marginTop: '1rem',
	},
	card: {
		padding: '1.75rem',
		backgroundColor: '#17171799',
		backdropFilter: 'blur(8px)',
		borderRadius: '1rem',
		boxShadow: theme.customShadows?.card,
		height: '100%',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		border: `1px solid ${theme.palette.divider}`,
		'&:hover': {
			transform: 'translateY(-4px)',
			boxShadow: '0 6px 15px rgba(0,0,0,0.6)',
		},
	},
	cardInner: {
		display: 'flex',
		alignItems: 'flex-start',
	},
	iconBox: {
		marginRight: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		fontSize: '2rem',
		color: '#115e59',
	},
	text: {
		color: '#6B7280',
		fontSize: '1rem',
		lineHeight: 1.6,
		fontWeight: '400',
	},
	cardTitle: {
		color: theme.palette.text.primary,
		fontSize: '1.125rem',
		fontWeight: '600',
		marginBottom: '0.75rem',
		lineHeight: 1.3,
	},
	cardContent: {
		flexGrow: 1,
	},
};

export default coreElementsStyle;