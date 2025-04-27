
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const costBreakdownStyle: Record<string, SxProps<Theme>> = {
	container: {
		position: 'relative',
		padding: { xs: '4rem 1rem', md: '2rem 2rem' },
		background: (theme) => theme.palette.background.default,
		overflow: 'hidden',

	},
	contentContainer: {
		width: '100%',
		maxWidth: '1200px',
		mx: 'auto',
		px: { xs: 2, sm: 4, md: 6 },
	},
	header: {
		textAlign: 'center',
		mb: { xs: 5, md: 6 },
	},
	title: {
		fontSize: { xs: '2rem', md: '2.5rem' },
		fontWeight: 700,
		mb: 2,
		color: (theme) => theme.palette.text.primary,
	},
	subtitle: {
		fontSize: { xs: '1rem', md: '1.125rem' },
		maxWidth: '800px',
		mx: 'auto',
		color: (theme) => theme.palette.text.secondary,
		mb: 6,
	},
	mainContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		gap: { xs: 4, md: 6 },
		alignItems: { xs: 'center', md: 'flex-start' },
	},
	chartContainer: {
		width: { xs: '100%', md: '50%' },
		maxWidth: { xs: '400px', md: '500px' },
		aspectRatio: '1',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	donutChart: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
	donutSegment: {
		transition: 'transform 0.3s ease',
		transformOrigin: 'center',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	centerText: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
	},
	totalPrice: {
		fontSize: { xs: '2rem', md: '2.5rem' },
		fontWeight: 700,
		color: (theme) => theme.palette.text.primary,
	},
	totalLabel: {
		fontSize: '1rem',
		color: (theme) => theme.palette.text.secondary,
	},
	breakdownContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: 3,
	},
	description: {
		fontSize: '1rem',
		color: (theme) => theme.palette.text.secondary,
		lineHeight: 1.6,
		mb: 4,
	},
	frameworksList: {
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
	},
	frameworkItem: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 2,
		borderRadius: '8px',
		border: (theme) => `1px solid ${theme.palette.divider}`,
		background: (theme) => theme.customGradients?.cardGradient || 'rgba(20, 20, 20, 0.4)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'translateY(-2px)',
			boxShadow: (theme) => theme.customShadows?.card,
		},
	},
	frameworkDetails: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
	},
	colorIndicator: {
		width: 16,
		height: 16,
		borderRadius: '50%',
	},
	frameworkName: {
		fontSize: '1rem',
		fontWeight: 600,
		color: (theme) => theme.palette.text.primary,
	},
	frameworkPrice: {
		fontSize: '1.25rem',
		fontWeight: 700,
		color: (theme) => theme.palette.secondary.main,
	},
	ctaContainer: {
		textAlign: 'center',
		mt: { xs: 5, md: 7 },
	},
	ctaText: {
		fontSize: '1.125rem',
		fontWeight: 500,
		mb: 2,
		color: (theme) => theme.palette.text.primary,
	},
	ctaButton: {
		marginTop: '1rem',
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

export default costBreakdownStyle;
