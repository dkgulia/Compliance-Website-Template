import theme from '../../../theme';

const trustedCompaniesSectionStyle = {
   section: {
   	display: 'flex',
   	flexDirection: 'column',
   	px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   	marginTop: { xs: '3.5rem', md: '1rem' },
   	gap: '2rem',
   	alignItems: 'center',
   	background: theme.palette.background.default,
   	position: 'relative',
   	overflow: 'hidden',
   },
   headerContainer: {
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'center',
   	justifyContent: 'center',
   	gap: '0.5rem',
   	marginBottom: '2rem',
   	textAlign: 'center',
   },
   tagline: {
   	fontFamily: 'monospace',
   	fontSize: '0.875rem',
   	color: '#0d9488',
   	letterSpacing: '0.05em',
   	textTransform: 'uppercase',
   },
   title: {
   	fontSize: { xs: '0.875rem', sm: '1rem' },
   	color: '#6b7280',
   	textAlign: 'center',
   },
   marqueeOuter: {
   	width: '100%',
   	overflow: 'hidden',
   	backgroundColor: '#111111',
   	paddingTop: '1rem',
   	paddingBottom: '1rem',
   	position: 'relative',
   	borderRadius: '0.5rem',
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