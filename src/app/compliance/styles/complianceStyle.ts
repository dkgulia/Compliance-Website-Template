import theme from '../../../theme';

const complianceStyles = {
   box: {
   	py: { xs: 1, sm: 2 },
   	background: theme.palette.background.default,
   	color: theme.palette.text.primary,
   	paddingTop: { xs: '0.5rem', sm: '2rem' },
   	paddingBottom: { xs: '0.5rem', sm: '2rem' },
   },
   container: {
   	position: 'relative',
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'center',
   	gap: { xs: 1.5, sm: 6 },
   },
   containerBox: {
   	width: { sm: '100%', md: '60%' },
   	textAlign: { xs: 'center', sm: 'left', md: 'center' },
   },
   heading: {
   	fontWeight: { xs: 600, sm: 'bold' },
   	color: theme.palette.text.primary,
   	fontSize: { xs: '1.4rem', sm: '2rem' },
   },
   card: {
   	display: 'flex',
   	flexDirection: 'column',
   	justifyContent: 'flex-start',
   	alignItems: 'flex-start',
   	padding: { xs: '0.75rem', sm: '1.5rem' },
   	height: '100%',
   	width: '100%',
   	minHeight: { xs: 180, sm: 280 },
   	backgroundColor: theme.palette.background.paper,
   	backdropFilter: 'blur(10px)',
   	borderRadius: { xs: '0.75rem', sm: '15px' },
   	transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   	'&:hover': {
   		transform: 'scale(1.02)',
   		boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   	},
   },
   cardStack: {
   	width: '100%',
   	height: '100%',
   },
   logoImageWrapper: {
   	position: 'relative',
   	width: { xs: '4rem', sm: '5rem' ,md:'5rem'},
   	height: { xs: '4rem', sm: '5rem',md:'5rem' },
   	marginBottom: { xs: '0.5rem', sm: '1rem' },
   	backgroundColor: '#115e59',
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	borderRadius: '8px',
   	padding: { xs: '0.3rem', sm: '0.75rem' },
   	flexShrink: 0,
   },
   logoImage: {
   	objectFit: 'contain'as const,
   	width: { xs: '2.5rem', sm: '4.5rem',md:'5rem'},
   	height: { xs: '2.5rem', sm: '4.5rem',md:'5rem'},
   },
   contentBox: {
   	flex: 1,
   	display: 'flex',
   	flexDirection: 'column',
   	width: '100%',
   },
   linkBox: {
   	marginTop: 'auto',
   	paddingTop: { xs: '0.5rem', sm: '1rem' },
   },
   typography: {
   	title: {
   		fontWeight: 'bold',
   		fontSize: { xs: '14px', sm: '1.2rem' },
   		color: theme.palette.text.primary,
   		marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   		textAlign: 'left',
   	},
   	body: {
   		color: theme.palette.text.secondary,
   		fontSize: { xs: '12px', sm: '0.95rem' },
   		marginBottom: { xs: '0.5rem', sm: '1rem' },
   		lineHeight: 1.5,
   		textAlign: 'left',
   	},
   },
   navLink: {
   	textDecoration: 'none',
   	fontSize: { xs: '12px', sm: '0.9rem' },
   	fontWeight: 600,
   	cursor: 'pointer',
   	color: '#14b8a6',
   	display: 'inline-flex',
   	alignItems: 'center',
   	padding: { xs: '0.25rem 0', sm: '0.5rem 0' },
   	transition: 'color 0.2s ease',
   	'&:hover': {
   		textDecoration: 'none',
   		color: '#0f766e',
   	},
   },
};

export default complianceStyles;