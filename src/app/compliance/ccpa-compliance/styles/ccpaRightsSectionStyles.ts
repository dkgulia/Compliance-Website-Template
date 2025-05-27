import theme from '../../../../theme';

const ccpaRightsSectionStyles = {
	container: {
		paddingTop: { sm: '3rem', xs: '1rem', md: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1rem' },
		backgroundColor: theme.palette.background.default,
	},
	headingContainer: {
		textAlign: 'center',
		marginBottom: { xs: '1.5rem', sm: '2.5rem' },
	},
	sectionTitle: {
		fontWeight: 600,
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.4rem', sm: '2rem' },
	},
	sectionSubtitle: {
		fontSize: { xs: '0.85rem', sm: '1.1rem' },
		color: '#6B7280',
		maxWidth: '650px',
		margin: '0 auto',
	},
	card: {
		backgroundColor: '#17171799',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		overflow: 'hidden',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		padding: { xs: '0 0 1rem 0', sm: '0 0 1.5rem 0' },
		border: `1px solid ${theme.palette.divider}`,
		'&:hover': {
			transform: 'translateY(-8px)',
			boxShadow: '0 12px 20px rgba(0,0,0,0.4)',
		},
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: { xs: '1rem 0', sm: '1.5rem 0' },
		width: '100%',
		backgroundColor: '#115e59',
	},
	cardImage: {
		objectFit: 'contain' as const,
	},
	cardTitle: {
		marginTop: { xs: '0.75rem', sm: '1rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		textAlign: 'center',
		fontSize: { xs: '1.1rem', sm: '1.25rem' },
	},
	cardDescription: {
		color: '#6B7280',
		textAlign: 'center',
		padding: { xs: '0 1rem', sm: '0 1.25rem' },
		fontSize: { xs: '0.8rem', sm: '0.95rem' },
		lineHeight: 1.5,
	},
	requestProcessContainer: {
		marginTop: { xs: '2.5rem', sm: '4rem' },
	},
	requestNumberCircle: {
		width: { xs: '50px', sm: '60px' },
		height: { xs: '50px', sm: '60px' },
		borderRadius: '50%',
		backgroundColor: '#115e59',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: { xs: '1rem auto', sm: '1.5rem auto' }
	},
	requestNumber: {
		fontSize: { xs: '1.5rem', sm: '1.75rem' },
		fontWeight: 600,
		color: 'white'
	}
};

export default ccpaRightsSectionStyles;
