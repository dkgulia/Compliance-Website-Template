import theme from '../../../theme';

const conclusionStyle = {
 section: {
   display: 'flex',
   flexDirection: 'column',
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   marginTop: { xs: '0rem', md: '0rem' },
   gap: '2rem',
   alignItems: 'center',
   background: '#115e59',
   position: 'relative',
   overflow: 'hidden',
   paddingTop: { xs: '3rem', sm: '4rem' },
   paddingBottom: { xs: '3rem', sm: '4rem' },
 },
 headerContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '0.5rem',
   textAlign: 'center',
   maxWidth: '900px',
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textAlign: 'center',
   textTransform: 'uppercase',
   marginBottom: '0.5rem',
 },
 title: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   marginBottom: '1.5rem',
   color: theme.palette.text.primary,
   textAlign: 'center',
   position: 'relative',
   paddingBottom: '1rem',
   '&::after': {
     content: '""',
     position: 'absolute',
     bottom: 0,
     left: '50%',
     transform: 'translateX(-50%)',
     width: '80px',
     height: '3px',
     backgroundColor: '#0d9488',
   },
 },
 description: {
   fontSize: { xs: '1rem', sm: '1.1rem' },
   color: theme.palette.text.primary,
   marginBottom: '1.5rem',
   lineHeight: 1.6,
   textAlign: 'center',
   '&:last-of-type': {
     marginBottom: '2rem',
   },
 },
 highlightText: {
   fontWeight: 700,
   color: '#0d9488',
 },
 button: {
  color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '1rem 1.5rem',
		},
		textTransform: 'none',
		fontSize: '0.8rem',
		whiteSpace: 'nowrap',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			borderColor: '#4b5563',
		},
 },
};

export default conclusionStyle;