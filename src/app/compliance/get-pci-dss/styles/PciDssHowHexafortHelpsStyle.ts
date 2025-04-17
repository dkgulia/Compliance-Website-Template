import theme from '../../../../theme';


const PciDssHowHexafortHelpsStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		maxWidth: '75rem',
		marginX: 'auto',
		textAlign: 'center' as const,
		px: { xs: 2, sm: 4 },
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		marginTop: '1rem',
		marginBottom: '1.5rem',
		letterSpacing: '-0.5px',
		color: theme.palette.text.primary,
	},
	subtitle: {
		color: theme.palette.text.secondary,
		fontSize: '1rem',
		marginBottom: '2rem',
		lineHeight: '1.6rem',
		maxWidth: '40rem',
		marginX: 'auto',
	},
	grid: {
		marginTop: '2rem',
	},
	card: {
		display: 'flex',
		alignItems: 'center',
		background: theme.palette.background.paper,
		borderRadius: '12px',
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: theme.customShadows?.card,
		transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
		marginBottom: '1rem',
		'&:hover': {
			transform: 'translateY(-0.25rem)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0, 0, 0, 0.5)',
		},
	},
	cardContent: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'left' as const,
		padding: '0rem',
	},
	cardText: {
		fontSize: '1rem',
		fontWeight: 500,
		lineHeight: '1.4rem',
		color: theme.palette.text.secondary,
	},
};

export default PciDssHowHexafortHelpsStyle;