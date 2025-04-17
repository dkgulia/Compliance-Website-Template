import theme from '../../../../theme';


const complianceHubStyle = {
	box: {
		paddingTop: { sm: '3rem', xs: '2rem',md:'1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' ,md:'2rem' },
		marginTop: '0rem',
		backgroundColor: theme.palette.background.default,

	},
	container: {
		position: 'relative' as const,
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		maxWidth: '75rem',
		marginX: 'auto',
		px: { xs: '1rem', sm: '2rem' },

	},
	containerBox: {
		width: '100%',
		textAlign: 'center' as const,
		marginX: 'auto',
		marginBottom: '1rem',

	},
	heading: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	subHeading: {
		color: theme.palette.text.secondary,
		fontSize: '1rem',
		marginBottom: '1rem',
	},
	stepContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: '0.75rem',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '1rem',
		boxShadow: theme.customShadows?.card,
		minHeight: '14rem',
		textAlign: 'center' as const,
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		border: `1px solid ${theme.palette.divider}`,
		padding: '1.5rem 1rem',
		'&:hover': {
			transform: 'scale(1.03)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0, 0, 0, 0.6)',
		}
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '0.5rem',

	},
	icon: {
		fontSize: '3rem',
		color: "#14b8a6",
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		gap: '0.5rem',

	},
	title: {
		fontWeight: 'bold' as const,
		color: theme.palette.primary.light,
		fontSize: '1.1rem',
	},
	description: {

		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
		lineHeight: 1.5,
	},
};

export default complianceHubStyle;