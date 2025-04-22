import theme from '../../../../theme';

const talkToExpertDoraStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		padding: '2rem',
		background: theme.palette.background.default,
	},
	innerBox: {
		maxWidth: '75rem',
		marginX: 'auto',
		textAlign: { xs: 'center', sm: 'left' },
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: { xs: '1rem', sm: '2rem' },
		background: '#17171799',
		borderRadius: { xs: '0rem', md: '2rem' },
	},
	title: {
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
		marginBottom: '1rem',
		textAlign: 'center',
	},
	subtitle: {
		color: theme.palette.text.secondary,
		fontSize: { xs: '0.95rem', sm: '1rem' },
		lineHeight: 1.6,
		marginBottom: '1.5rem',
	},
	gridContainer: {
		marginTop: '0.5rem',
	},
	card: {
		background: '#17171799',
		borderRadius: '1rem',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		height: '100%',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'translateY(-0.25rem)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
		},
	},
	cardTitle: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: '1.2rem',
		marginBottom: '0.5rem',
	},
	divider: {
		opacity: 0.2,
		borderColor: theme.palette.divider,
		marginY: '0.75rem',
	},
	cardDescription: {
		color: theme.palette.text.muted,
		fontSize: '0.95rem',
		lineHeight: 1.6,
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
		backgroundColor: '#374151',
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

	buttonOutlined: {
		marginTop: '1.5rem',
		color: 'white',
		fontWeight: 800,
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.7rem 1rem',
		},
		borderRadius: '0.5rem',
		backgroundColor: 'transparent',
		border: '1px solid #374151',
		textTransform: 'none',
		fontSize: '0.9rem',
		whiteSpace: 'nowrap',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: 'rgba(94, 234, 212, 0.15)',
			borderColor: '#5eead4',
		},
		'&.Mui-disabled': {
			color: 'white',
			opacity: 0.5,
			backgroundColor: 'transparent',
			border: '1px solid #374151',
		},
	},
};

export default talkToExpertDoraStyle;
