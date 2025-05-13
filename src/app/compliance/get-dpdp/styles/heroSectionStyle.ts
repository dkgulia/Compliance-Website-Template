import theme from '../../../../theme';

const heroSectionStyle = {
	container: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		background: theme.palette.background.default,
		padding: { xs: '5rem 1rem', sm: '1rem 1rem' },
		position: 'relative',
		overflow: 'hidden',

	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: '2rem',
		position: 'relative',
		zIndex: 2,
	},
	leftContentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
	},
	formBox: {
		flex: 1,
		borderRadius: '1.5rem',
		maxWidth: '600px',
		padding: '2rem',
		marginTop: { xs: '0.5rem', sm: '0.5rem' },
		transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
	},
	formContainer: {
		padding: '2rem',
		borderRadius: '1.5rem',
		background: theme.palette.background.paper,
		width: '100%',
		maxWidth: '600px',
		marginTop: { xs: '2rem', sm: '1.5rem' },
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
	},
	formHeading: {
		fontSize: '1.8rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	formLabel: {
		fontWeight: 'bold',
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
	},
	compliancesLabel: {
		fontWeight: 'bold',
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
	},
	tag: {
		display: 'inline-block',
		padding: '0.5rem 1rem',
		borderRadius: '2rem',
		background: '#115e59',
		marginBottom: '1rem',
	},
	tagText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '0.9rem',
	},
	mainTitle: {
		fontSize: { xs: '2rem', md: '2.2rem' },
		fontWeight: '600',
		marginBottom: '1rem',
		color: theme.palette.text.primary,
		lineHeight: 1.2,
	},
	highlightText: {
		background: theme.customGradients?.primary || 'linear-gradient(90deg, #10b981 0%, #0ea5e9 100%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		display: 'inline',
	},
	description: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.7',
		marginBottom: '1.5rem',
		maxWidth: '550px',
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
		color: theme.palette.text.secondary,
	},
	button: {
		backgroundColor: '#115e59',
		color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.5rem 1rem',
		},
		textTransform: 'none',
		fontSize: '1rem',
		fontWeight: 'medium',
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
		},
		'&:active': {
			backgroundColor: '#0d9488',
			transform: 'translateY(1px)',
		},
		'&.Mui-disabled': {
			color: '#f9fafb',
			opacity: 0.5,
			backgroundColor: '#115e59',
			border: '1px solid #0d9488',
		},
	},
	formInput: {
		backgroundColor: 'rgba(38, 38, 38, 0.1)',
		color: theme.palette.text.primary,
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.divider,
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#0d9488',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#115e59',
		},
	},
	checkbox: {
		color: '#115e59',
		'&.Mui-checked': {
			color: '#115e59',
		},
	},
	checkboxLabel: {
		'& .MuiFormControlLabel-label': {
			color: theme.palette.text.primary,
			fontSize: '0.9rem',
		},
		'& .MuiCheckbox-root': {
			color: '#115e59',
		},
	},
	formHelperText: {
		marginTop: '4px',
		color: theme.palette.error.main,
	},
	secondaryText: {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
		marginTop: '8px',
		marginBottom: '16px',
		'& a': {
			color: '#115e59',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	gridItem: {
		marginBottom: '16px',
	},
	chip: {
		display: 'inline-block',
		padding: '0.5rem 1rem',
		borderRadius: '2rem',
		background: '#115e59',
		marginBottom: '1rem',
	},
	chipTypography: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '0.9rem',
	},
	statsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: '1.5rem',
		width: '100%',
		marginBottom: '2rem',
	},
	statItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '30%',
		minWidth: '80px',
	},
	statValue: {
		fontWeight: 'bold',
		fontSize: '1rem',
		color: theme.palette.text.primary,
		marginTop: '0.5rem',
	},
	statLabel: {
		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
		marginTop: '0.25rem',
		textAlign: 'center',
		maxWidth: '90px',
	}
};

export default heroSectionStyle;