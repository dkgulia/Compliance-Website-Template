const trustedCompaniesSectionStyle = {
	section: {
		width: '100%',
		marginTop: '2.5rem',
		marginBottom: '1.25rem',
	},
	titleText: {
		fontSize: { xs: '0.75rem', sm: '0.875rem' },
		color: '#9ca3af',
		textAlign: 'center',
		marginBottom: '1.25rem',
	},
	marqueeOuter: {
		width: '100%',
		overflow: 'hidden',
		backgroundColor: '#111111',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		position: 'relative',
		'&::before, &::after': {
			content: '""',
			position: 'absolute',
			top: 0,
			height: '100%',
			width: '100px',
			zIndex: 2,
			pointerEvents: 'none',
		},
		'&::before': {
			left: 0,
			background: 'linear-gradient(to right, #111111 0%, rgba(17, 17, 17, 0) 100%)',
		},
		'&::after': {
			right: 0,
			background: 'linear-gradient(to left, #111111 0%, rgba(17, 17, 17, 0) 100%)',
		},
	},
	marqueeContainer: {
		display: 'flex',
		whiteSpace: 'nowrap',
		animation: 'marqueeSlide 30s linear infinite',
		'@keyframes marqueeSlide': {
			'0%': {
				transform: 'translateX(0)',
			},
			'100%': {
				transform: 'translateX(-50%)',
			},
		},
	},
	logoBox: {
		display: 'inline-flex',
		marginLeft: '1.5rem',
		marginRight: '1.5rem',
		flexShrink: 0,
	},
	logoImageStyle: {
		maxHeight: '40px',
		maxWidth: '140px',
		height: 'auto',
		width: 'auto',
		filter: 'grayscale(1) brightness(10)',
		opacity: 0.8,
		objectFit: 'contain' as const,
	},
};

export default trustedCompaniesSectionStyle;
