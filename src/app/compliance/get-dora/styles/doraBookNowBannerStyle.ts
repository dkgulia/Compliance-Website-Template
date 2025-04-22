import theme from '../../../../theme';

const doraBookNowBannerStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		background: theme.palette.background.default,
	},
	bannerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: '#17171799',
		borderRadius: { xs: '0rem', md: '2rem' },
		width: '100%',
		maxWidth: '75rem',
		marginX: 'auto',
		paddingX: { xs: '1rem', sm: '2rem' },
		paddingY: '2rem',
		position: 'relative',
		flexDirection: { xs: 'column', sm: 'row' },
		textAlign: { xs: 'center', sm: 'center' },
		gap: '1rem',
		border: `1px solid ${theme.palette.divider}`,
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: { xs: 'center', sm: 'center' },
		width: '100%',
	},
	heading: {
		color: theme.palette.text.primary,
		marginBottom: '1rem',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
	},
	description: {
		color: theme.palette.text.secondary,
		marginBottom: '1.5rem',
		fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
		lineHeight: '1.6',
		width: { xs: '100%', sm: '90%' },
	},
	button: {
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
};

export default doraBookNowBannerStyle;
