import theme from '../../../theme';

const benefitsSectionStyle = {
	box: {
		paddingBottom: { sm: '1rem', xs: '1.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginX: 'auto',
		maxWidth: '75rem',
		px: { xs: '2rem', sm: '2rem' },
	},
	containerBox: {
		textAlign: 'center',
		width: '100%',
		maxWidth: '60rem',
		marginX: 'auto',
		marginBottom: '3rem',
	},
	heading: {
		fontWeight: 600,
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		paddingBottom: { sm: '0.5rem', xs: '0.5rem' },
	},
	subHeading: {
		color: '#6B7280',
		fontSize: '1rem',
		marginBottom: '1rem',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#17171799',
		borderRadius: '1rem',
		height: { sm: 'auto', xs: 'auto' },
		minHeight: '190px',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		border: `1px solid ${theme.palette.divider}`,
		padding: '2rem',
	},
	iconContainer: {
		width: '3.5rem',
		height: '3.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#115e59',
		borderRadius: '0.5rem',
		marginBottom: '1rem',
		padding: '0.5rem',
		alignSelf: 'flex-start',
	},
	icon: {
		fontSize: '2rem',
		color: 'white',
	},
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		width: '100%',
	},
	typography: {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			textAlign: 'left',
			width: '100%',
		},
		title: {
			fontWeight: 'bold',
			color: theme.palette.text.primary,
			textAlign: 'left',
			fontSize: '18px',
			marginBottom: '0.5rem',
		},
		body: {
			color: '#6B7280',
			textAlign: 'left',
			lineHeight: 1.6,
			fontSize: '0.8rem',
		},
	},
	gridItem: {
		marginBottom: '1.5rem',
	},
};

export default benefitsSectionStyle;
