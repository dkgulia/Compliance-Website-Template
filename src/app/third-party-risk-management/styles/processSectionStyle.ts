import theme from '../../../theme';

const processSectionStyle = {
	section: {
		paddingTop: { sm: '2rem', xs: '1rem' },
		paddingBottom: { sm: '4rem', xs: '2rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		padding: { xs: '0 1rem', sm: '0 2rem' },
	},
	header: {
		marginBottom: '3rem',
		textAlign: 'center',
	},
	title: {
		fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		marginBottom: '1rem',
		textAlign: 'center',
		marginTop:'1rem'
	},
	subtitle: {
		fontSize: { xs: '1rem', sm: '1.1rem' },
		color: theme.palette.text.secondary,
		marginBottom: '2rem',
		textAlign: 'center',
		maxWidth: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	stepsContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '4rem',
	},
	step: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		gap: '4rem',
		position: 'relative',
	},
	stepReversed: {
		flexDirection: { xs: 'column', md: 'row-reverse' },
	},
	stepContent: {
		flex: 1,
	},
	stepHeading: {
		fontSize: { xs: '1.3rem', sm: '1.5rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	stepDescription: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
		lineHeight: 1.7,
	},
	stepImageContainer: {
		flex: 1,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},

	stepImageWrapper: {
		width: '100%',
		maxWidth: '400px',
		height: '220px',
		position: 'relative',
		borderRadius: '1rem',
		overflow: 'hidden',
	},

	stepImage: {
		objectFit: 'contain' as const,
	},
	stepImagePlaceholder: {
		width: '100%',
		maxWidth: '400px',
		height: '220px',
		borderRadius: '1rem',
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.disabled,
		padding: '1rem',
		fontSize: '0.9rem',
		textAlign: 'center',
	},


};

export default processSectionStyle;
