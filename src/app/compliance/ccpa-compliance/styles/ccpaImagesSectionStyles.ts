import theme from '../../../../theme';

const iso22301ImagesSectionStyles = {
	container: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		backgroundColor: theme.palette.background.default,
	},
	headingContainer: {
		textAlign: 'center',
		marginBottom: '3rem',
	},
	sectionTitle: {
		fontWeight: 600,
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.6rem', sm: '2rem' },
	},
	sectionSubtitle: {
		fontSize: '1rem',
		color: '#6B7280',
		maxWidth: '800px',
		margin: '0 auto',
	},
	gridContainer: {
		marginBottom: '4rem',
	},
	card: {
		backgroundColor: '#17171799',
		borderRadius: '1rem',
		padding: '1.5rem',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		border: `1px solid ${theme.palette.divider}`,
		'&:hover': {
			transform: 'translateY(-5px)',
			boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
		},
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1.5rem',
		background: '#115e59',
		borderRadius: '8px',
		padding: '0.75rem',
		width: '64px',
		height: '64px',
		'& img': {
			filter: 'brightness(0) invert(1)',
			width: '32px',
			height: '32px',
			objectFit: 'contain'
		}
	},
	cardTitle: {
		fontWeight: 600,
		marginBottom: '0.75rem',
		color: theme.palette.text.primary,
	},
	cardDescription: {
		color: '#6B7280',
		lineHeight: 1.6,
	},
};

export default iso22301ImagesSectionStyles;