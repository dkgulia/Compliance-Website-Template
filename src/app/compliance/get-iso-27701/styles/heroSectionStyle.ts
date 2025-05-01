import theme from '../../../../theme';

const heroSectionStyle = {
	container: {
		padding: '4rem 1rem',
		background: theme.palette.background.default,
	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: '2rem',
	},
	leftContentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
		padding: { xs: '1rem', md: '2rem' },
	},
	formBox: {
		marginTop: { xs: '1rem', md: '3' },
		flex: 1,
		background: '#17171799',
		borderRadius: '1.5rem',
		boxShadow: theme.customShadows?.card,
		maxWidth: '600px',
		width: '100%',
		padding: '2rem',
		border: `1px solid ${theme.palette.divider}`,
		color: theme.palette.text.primary,
	},
	tag: {
		display: 'inline-block',
		padding: '0.5rem 1rem',
		borderRadius: '1rem',
		background: '#115e59',
		marginBottom: '1rem',
	},
	tagText: {
		color: 'white',
		fontWeight: 'bold',
	},
	mainTitle: {
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
		marginBottom: '1rem',
		color: theme.palette.text.primary,
	},
	highlightText: {
		color: theme.palette.primary.light,
	},
	description: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.5',
		marginBottom: '1.5rem',
	},
	featuresContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: { xs: 'space-between', md: 'space-between' },
		alignItems: 'flex-start',
		gap: { xs: '1rem', md: '5.5rem' },
		marginTop: '0.5rem',
		width: '100%',
		flexWrap: 'nowrap',
	},
	featureItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		gap: '0.5rem',
		flex: '1 1 33%',
		maxWidth: '33%',
	},
	iconWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: '2.5rem',
	},
	featureIcon: {
		fontSize: { xs: '1.8rem', md: '2.5rem' },
		color: '#115e59',
	},
	featureTextWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '100%',
	},
	featureTitle: {
		fontSize: { xs: '0.9rem', md: '1.2rem' },
		fontWeight: 'bold',
		color: theme.palette.text.primary,
	},
	featureSubtitle: {
		fontSize: { xs: '0.8rem', md: '0.9rem' },
		color: '#6B7280',
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
	formLabel: {
		color: theme.palette.text.primary,
		marginBottom: '8px',
		display: 'block',
	},
	formInput: {
		backgroundColor: 'rgba(38, 38, 38, 0.5)',
		color: theme.palette.text.primary,
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.divider,
		},
	},
	checkbox: {
		color: theme.palette.secondary.main,
	},
	formHelperText: {
		marginTop: '4px',
		color: theme.palette.error.main,
	},
	secondaryText: {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
		marginTop: '8px',
	},
	gridItem: {
		marginBottom: '16px',
	},
};

export default heroSectionStyle;