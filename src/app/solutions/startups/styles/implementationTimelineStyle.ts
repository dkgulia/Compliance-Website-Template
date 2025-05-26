
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const implementationTimelineStyle: Record<string, SxProps<Theme>> = {
	container: {
		position: 'relative',
		padding: { xs: '0rem 1rem', md: '1rem 2rem' },
		background: (theme) => theme.palette.background.default,
		overflow: 'hidden',

	},
	contentContainer: {
		width: '100%',
		maxWidth: '1440px',
		mx: 'auto',
		px: { xs: 2, sm: 4, md: 6 },
	},
	sectionHeader: {
		textAlign: 'center',
		mb: { xs: 5, md: 6 },
	},
	title: {
		fontSize: { xs: '1.8rem', md: '2.5rem' },
		fontWeight: 700,
		mb: 2,
		color: (theme) => theme.palette.text.primary,
	},
	subtitle: {
		fontSize: { xs: '1rem', md: '1.125rem' },
		maxWidth: '800px',
		mx: 'auto',
		color: '#6b7280',
		mb: 6,
	},
	highlightedText: {
		color: (theme) => theme.palette.secondary.main,
	},
	phaseTitle: {
		fontSize: { xs: '1.5rem', md: '1.75rem' },
		fontWeight: 700,
		mb: 3,
		color: (theme) => theme.palette.text.primary,
	},
	timelineContainer: {
		position: 'relative',
		mb: 8,
	},
	timelineLine: {
		position: 'absolute',
		left: { xs: '20px', md: '24px' },
		top: 0,
		bottom: 0,
		width: '2px',
		background: (theme) => theme.palette.divider,
		zIndex: 1,
	},
	stepsContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 4,
		position: 'relative',
		zIndex: 2,
	},
	stepItem: {
		display: 'flex',
		gap: 3,
	},
	stepNumber: {
		width: { xs: '40px', md: '48px' },
		height: { xs: '40px', md: '48px' },
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: (theme) => theme.palette.background.default,
		border: (theme) => `2px solid ${theme.palette.secondary.main}`,
		color: (theme) => theme.palette.secondary.main,
		fontWeight: 700,
		fontSize: { xs: '1rem', md: '1.25rem' },
		flexShrink: 0,
	},
	stepContent: {
		pt: 0.75,
	},
	stepPeriod: {
		fontSize: { xs: '1.1rem', md: '1.25rem' },
		fontWeight: 600,
		mb: 1,
		color: (theme) => theme.palette.text.primary,
	},
	stepDescription: {
		fontSize: '1rem',
		color: '#6b7280',
		lineHeight: 1.6,
	},
	phase2Container: {
		display: 'grid',
		gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
		gap: 4,
		mb: 6,
	},
	phaseCard: {
		borderRadius: '12px',
		p: 3,
		height: '100%',
		border: (theme) => `1px solid ${theme.palette.divider}`,
    background: '#17171799',
		transition: 'transform 0.3s ease',
		'&:hover': {
			transform: 'translateY(-5px)',
		},
	},
	phaseCardIcon: {
		fontSize: '2rem',
		color: 'white',
		mb: 2,
	},
	phaseCardTitle: {
		fontSize: '1.25rem',
		fontWeight: 600,
		mb: 1.5,
		color: (theme) => theme.palette.text.primary,
	},
	phaseCardDescription: {
		fontSize: '0.9rem',
		color: '#6b7280',
		lineHeight: 1.6,
	},
	ctaContainer: {
		textAlign: 'center',
		mt: { xs: 4, md: 6 },
	},
	ctaButton: {
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
};

export default implementationTimelineStyle;
