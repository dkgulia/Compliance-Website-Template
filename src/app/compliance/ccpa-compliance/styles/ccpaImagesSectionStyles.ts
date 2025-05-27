import theme from '../../../../theme';

const iso22301ImagesSectionStyles = {
	container: {
		paddingTop: { sm: '1.5rem', xs: '0.5rem' },
		paddingBottom: { xs: '1rem', sm: '1.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	headingContainer: {
		textAlign: 'center',
		marginBottom: { xs: '1.5rem', sm: '3rem' },
	},
	sectionTitle: {
		fontWeight: 600,
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.4rem', sm: '2rem' },
	},
	sectionSubtitle: {
		fontSize: { xs: '0.85rem', sm: '1rem' },
		color: '#6B7280',
		maxWidth: '800px',
		margin: '0 auto',
	},
	gridContainer: {
		marginBottom: { xs: '2rem', sm: '4rem' },
	},
	card: {
		backgroundColor: '#17171799',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		padding: { xs: '1rem', sm: '1.5rem' },
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
		marginBottom: { xs: '1rem', sm: '1.5rem' },
		background: '#115e59',
		borderRadius: '8px',
		padding: '0.75rem',
		width: { xs: '56px', sm: '64px' },
		height: { xs: '56px', sm: '64px' },
		'& img': {
			filter: 'brightness(0) invert(1)',
			width: { xs: '28px', sm: '32px' },
			height: { xs: '28px', sm: '32px' },
			objectFit: 'contain'
		}
	},
	cardTitle: {
		fontWeight: 600,
		marginBottom: { xs: '0.5rem', sm: '0.75rem' },
		color: theme.palette.text.primary,
		fontSize: { xs: '1rem', sm: '1.1rem' },
	},
	cardDescription: {
		color: '#6B7280',
		lineHeight: 1.6,
		fontSize: { xs: '0.8rem', sm: '0.875rem' },
	},
};

export default iso22301ImagesSectionStyles;