import theme from '../../../../theme';

const hipaaBannerStyles = {
	box: {
		marginTop: '1rem',
		backgroundColor: theme.palette.background.default,
	},
	bannerContainer: {
		background: '#17171799',
		borderRadius: { xs: '0.75rem', sm: '12px' },
		width: '100%',
		maxWidth: '72rem',
		marginX: 'auto',
		padding: { xs: '1.5rem', sm: '3rem' },
		paddingLeft: { xs: '1rem', sm: '3rem' },
		paddingRight: { xs: '1rem', sm: '3rem' },
		boxShadow: theme.customShadows?.card,
		overflow: 'hidden',
		border: `1px solid ${theme.palette.divider}`,
	},
	contentGridItem: {
		pr: { md: 2 },
	},
	imageGridItem: {
		pl: { md: 0 },
		display: 'flex',
		justifyContent: 'flex-end',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: { xs: 'center', md: 'flex-start' },
		width: '100%',
		pr: { md: '1rem' },
	},
	heading: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	description: {
		color: '#6B7280',
		marginBottom: '1.5rem',
		fontSize: 'clamp(1rem, 1.3vw, 1rem)',
		lineHeight: '1.6',
		width: { xs: '90%', sm: '100%' },
	},
	button: {
		marginTop: { xs: '1rem', sm: '1.5rem' },
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
		fontSize: { xs: '0.85rem', sm: '0.9rem' },
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
	imageBox: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		pr: { xs: 0, md: 3 },
	},
	circularImageContainer: {
		position: 'relative',
		width: { xs: '220px', md: '280px' },
		height: { xs: '220px', md: '280px' },
		borderRadius: '50%',
		overflow: 'hidden',
		boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
		margin: { xs: '0 auto', md: '0 2rem 0 0' },
	},
	circularImage: {
		objectFit: 'cover',
		objectPosition: 'center',
		borderRadius: '50%',
	},
};

export default hipaaBannerStyles;
