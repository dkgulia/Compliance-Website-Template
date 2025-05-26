import theme from '../../../../theme';

const ccpaHeroSectionStyles = {
	container: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		background: theme.palette.background.default,
		padding: { xs: '2rem 0.5rem', sm: '1rem 1rem' },
		position: 'relative',
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}15, transparent 45%)`,
			pointerEvents: 'none',
		},
	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: { xs: '1.5rem', md: '2rem' },
		position: 'relative',
		zIndex: 2,
	},
	leftContentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
	},
	formBox: {
		flex: 1,
		borderRadius: { xs: '0.3rem', md: '1.5rem' },
		maxWidth: { xs: '100%', md: '600px' },
		padding: { xs: '0.3rem', md: '2rem' },
		marginTop: { xs: '0', sm: '0.5rem' },
		transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
		width: { xs: '100%', md: 'auto' },
	},
	formContainer: {
		padding: { xs: '1.5rem', md: '2rem' },
		borderRadius: { xs: '1rem', md: '1.5rem' },
		background: theme.palette.background.paper,
		width: '100%',
		maxWidth: { xs: '100%', md: '600px' },
		marginTop: { xs: '1rem', sm: '1.5rem' },
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
	},
	formHeading: {
		fontSize: { xs: '20px', md: '1.8rem' },
		fontWeight: '600',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
		textAlign: { xs: 'left', md: 'left' },
	},
	formLabel: {
		fontWeight: 'bold',
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '0.9rem', md: '1rem' },
	},
	compliancesLabel: {
		fontWeight: 'bold',
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
		fontSize: { xs: '0.9rem', md: '1rem' },
	},
	tag: {
		display: 'inline-block',
		padding: { xs: '0.4rem 0.8rem', md: '0.5rem 1rem' },
		borderRadius: '2rem',
		background: '#115e59',
		marginBottom: { xs: '0.8rem', md: '1rem' },
		marginTop:{xs:'4rem'}
	},
	tagText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: { xs: '0.8rem', md: '0.9rem' },
	},
	mainTitle: {
		fontSize: { xs: '1.6rem', md: '2.2rem' },
		fontWeight: '600',
		marginBottom: { xs: '0.8rem', md: '1rem' },
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
		fontSize: { xs: '0.9rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.6',
		marginBottom: { xs: '1rem', md: '1.5rem' },
		maxWidth: '550px',
	},
	featuresContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: { xs: 'space-between', md: 'space-between' },
		alignItems: 'flex-start',
		gap: { xs: '0.5rem', md: '5.5rem' },
		marginTop: '0.5rem',
		width: '100%',
		flexWrap: 'nowrap',
	},
	featureItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		gap: { xs: '0.3rem', md: '0.5rem' },
		flex: '1 1 33%',
		maxWidth: '33%',
	},
	iconWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: { xs: '2rem', md: '2.5rem' },
	},
	featureIcon: {
		fontSize: { xs: '1.4rem', md: '2.5rem' },
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
		fontSize: { xs: '0.75rem', md: '1.2rem' },
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		lineHeight: 1.1,
	},
	featureSubtitle: {
		fontSize: { xs: '0.65rem', md: '0.9rem' },
		color: theme.palette.text.secondary,
		lineHeight: 1.2,
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
		'& .MuiOutlinedInput-root': {
			fontSize: { xs: '0.9rem', md: '1rem' },
		},
		'& .MuiInputLabel-root': {
			fontSize: { xs: '0.9rem', md: '1rem' },
		},
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
		padding: { xs: '6px', md: '9px' },
		'&.Mui-checked': {
			color: '#115e59',
		},
	},
	checkboxLabel: {
		'& .MuiFormControlLabel-label': {
			color: theme.palette.text.primary,
			fontSize: { xs: '0.8rem', md: '0.9rem' },
		},
		'& .MuiCheckbox-root': {
			color: '#115e59',
		},
		margin: { xs: '2px 0', md: '4px 0' },
	},
	formHelperText: {
		marginTop: '4px',
		color: theme.palette.error.main,
		fontSize: { xs: '0.75rem', md: '0.875rem' },
	},
	secondaryText: {
		color: theme.palette.text.secondary,
		fontSize: { xs: '0.75rem', md: '0.875rem' },
		marginTop: '8px',
		marginBottom: '16px',
		textAlign: { xs: 'center', md: 'left' },
		'& a': {
			color: '#115e59',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	gridItem: {
		marginBottom: { xs: '12px', md: '16px' },
	},
};

export default ccpaHeroSectionStyles;