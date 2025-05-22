
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const heroSectionStyle: Record<string, SxProps<Theme>> = {
	container: {
		position: 'relative',
		padding: { xs: '4rem 1rem', md: '3rem 5rem' },
		background: (theme) => theme.palette.background.default,
		overflow: 'hidden',
		minHeight: { xs: 'auto', md: '80vh' },
		display: 'flex',
		alignItems: 'center',
		pt: { xs: 3, md: 10},
		marginTop: '3rem',

	},
	contentContainer: {
		width: '100%',
		maxWidth: '1440px',
		mx: 'auto',
		px: { xs: 2, sm: 4, md: 6 },
		display: 'flex',
		flexDirection: { xs: 'column', lg: 'row' },
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		gap: { xs: 6, md: 4 },
	},
	textContent: {
		maxWidth: { xs: '100%', lg: '50%' },
		textAlign: { xs: 'left', lg: 'left' },
	},
	tagWrapper: {
		display: 'flex',
		justifyContent: 'flex-start',
		mb: 3,
	},
	tag: {
		display: 'inline-flex',
		alignItems: 'center',
		px: 2.5,
		py: 1,
		borderRadius: '32px',
		background: '#115e59',
	},
	tagText: {
		fontSize: '0.9rem',
		fontWeight: 600,
		color: '#fffff',
		letterSpacing: '0.5px',
	},
	titleWrapper: {
		mb: { xs: 3, md: 4 },
	},
	titleLine: {
		fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
		fontWeight: 600,
		lineHeight: 1.1,
		letterSpacing: '-0.02em',
		color: (theme) => theme.palette.text.primary,
		mb: 0.5,
	},
	description: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		lineHeight: 1.6,
		color: '#6b7280',
		maxWidth: { xs: '100%', lg: '90%' },
		mb: { xs: 4, md: 5 },
		opacity: 0.9,
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
	metricsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: { xs: 4, md: 5 },
		justifyContent: 'flex-start',
		mt: { xs: 5, md: 6 },
	},
	metricItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	metricValue: {
		fontSize: { xs: '2.5rem', md: '2.75rem' },
		fontWeight: 700,
		color: (theme) => theme.palette.secondary.main,
		lineHeight: 1,
		mb: 1,
	},
	metricLabel: {
		fontSize: { xs: '1rem', md: '1.125rem' },
		color: (theme) => theme.palette.text.secondary,
		fontWeight: 500,
	},
	visualContainer: {
		position: 'relative',
		width: '100%',
		maxWidth: { xs: '400px', md: '500px' },
		aspectRatio: '1',
	},
	coreVisual: {
		position: 'relative',
		width: '100%',
		height: '100%',
		borderRadius: '16px',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
	},
	gridPattern: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage:
			'linear-gradient(rgba(94, 234, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.05) 1px, transparent 1px)',
		backgroundSize: '40px 40px',
		zIndex: 1,
	},
	certIcons: {
		position: 'absolute',
		display: 'flex',
		gap: 2,
		opacity: 0.7,
	},
	certIcon1: {
		top: '20%',
		left: '15%',
	},
	certIcon2: {
		bottom: '25%',
		right: '15%',
	},
	certIcon3: {
		top: '15%',
		right: '20%',
	},
	placeholderText: {
		textAlign: 'center',
		color: (theme) => theme.palette.text.secondary,
		px: 4,
	},
};

export default heroSectionStyle;
