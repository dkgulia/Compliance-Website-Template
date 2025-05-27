import theme from '../../../../theme';

const soc2CtaBannerStyles = {
	bannerOuterContainer: {
		padding: '2rem 0',
		width: '100%',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: theme.palette.background.default,
	},
	bannerContainer: {
		padding: '4rem 1rem',
		background: '#17171799',
		textAlign: 'center',
		width: '75%',
		borderRadius: '20px',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		border: `1px solid ${theme.palette.divider}`,
	},
	bannerContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: '1.5rem',
		'@media (min-width: 768px)': {
			flexDirection: 'row',
			textAlign: 'left',
		},
	},
	textContainer: {
		'@media (max-width: 768px)': {
			textAlign: 'center',
		},
	},
	bannerTitle: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
		'@media (max-width: 768px)': {
			fontSize: '1.3rem',
		},
	},
	bannerSubtitle: {
		fontSize: '1rem',
		color: '#6B7280',
	},
	bannerButton: {
		marginTop: '1rem',
		color: '#f9fafb',
		fontWeight: 800,
		padding: {
			xs: '0.5rem 2rem',
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

export default soc2CtaBannerStyles;