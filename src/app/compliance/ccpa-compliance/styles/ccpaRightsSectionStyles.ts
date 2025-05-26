import theme from '../../../../theme';

const ccpaRightsSectionStyles = {
	container: {
		paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	headingContainer: {
		textAlign: 'center',
		marginBottom: '2.5rem',
	},
	sectionTitle: {
		fontWeight: 600,
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.6rem', sm: '2rem' },
	},
	sectionSubtitle: {
		fontSize: '1.1rem',
		color: '#6B7280',
		maxWidth: '650px',
		margin: '0 auto',
	},
	card: {
		backgroundColor: '#17171799',
		borderRadius: '1rem',
		overflow: 'hidden',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		padding: '0 0 1.5rem 0',
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
		padding: '1.5rem 0',
		width: '100%',
		backgroundColor: '#115e59',
	},
	cardImage: {
		objectFit: 'contain' as const,
	},
	cardTitle: {
		marginTop:'1rem',
		fontWeight: 600,
		color: theme.palette.text.primary,
		textAlign: 'center',
	},
	cardDescription: {
		color: '#6B7280',
		textAlign: 'center',
		padding: '0 1.25rem',
		fontSize: '0.95rem',
		lineHeight: 1.5,
	},
	requestProcessContainer: {
		marginTop: '4rem',
	},
	requestNumberCircle: {
		width: '60px',
		height: '60px',
		borderRadius: '50%',
		backgroundColor: '#115e59',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '1.5rem auto'
	},
	requestNumber: {
		fontSize: '1.75rem',
		fontWeight: 'bold',
		color: 'white'
	}
};

export default ccpaRightsSectionStyles;