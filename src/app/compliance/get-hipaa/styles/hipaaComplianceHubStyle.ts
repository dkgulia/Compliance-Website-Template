import theme from '../../../../theme';

const hipaaComplianceHubStyles = {
   box: {
   	paddingTop: { xs: '0.5rem', sm: '1rem' },
   	paddingBottom: { xs: '0.5rem', sm: '1rem' },
	   background: theme.palette.background.default,
   },
   container: {
   	position: 'relative',
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'center',
   	gap: { xs: 1.5, sm: 6 },
   },
   containerBox: {
   	width: { xs: '100%', sm: '80%', md: '60%' },
   	textAlign: 'center',
   },
   heading: {
   	fontWeight: { xs: 600, sm: '600' },
   	fontSize: { xs: '1.4rem', sm: '2rem' },
   	color: theme.palette.text.primary,
   	marginTop: { xs: '0.5rem', sm: '1rem' },
   },
   subHeading: {
   	color: '#6B7280',
   	fontSize: { xs: '0.85rem', sm: '1.1rem' },
   	maxWidth: '700px',
   	marginX: 'auto',
   },
   stepContainer: {
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'flex-start',
   	gap: { xs: '0.75rem', sm: '1.5rem' },
   	padding: { xs: '0.75rem', sm: '1rem' },
   	background: '#17171799',
   	borderRadius: { xs: '0.75rem', sm: '1rem' },
   	boxShadow: '0rem 0.375rem 0.9375rem rgba(0, 0, 0, 0.4)',
   	minHeight: { xs: '10rem', sm: '18rem' },
	height:{xs:'10rem'},
   	textAlign: 'left',
   	border: `1px solid ${theme.palette.divider}`,
   	transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   	'&:hover': {
   		transform: 'scale(1.02)',
   		boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   	},
   },
   iconContainer: {
   	width: { xs: '35px', sm: '50px' },
   	height: { xs: '35px', sm: '50px' },
   	backgroundColor: '#115e59',
   	borderRadius: '0.5rem',
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	marginBottom: '0',
   	'& svg': {
   		fontSize: { xs: '20px', sm: '30px' },
   		color: 'white',
   	},
   },
   icon: {
   	fontSize: { xs: '1.5rem', sm: '2.5rem' },
   	color: 'white',
   },
   textContainer: {
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'flex-start',
   	width: '100%',
   },
   title: {
   	fontWeight: 'bold',
   	color: '#ffffff',
   	marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   	fontSize: { xs: '14px', sm: '1.25rem' },
   	width: '100%',
   	textAlign: 'left',
   },
   description: {
   	color: '#6B7280',
   	textAlign: 'left',
   	fontSize: { xs: '12px', sm: '1rem' },
   	lineHeight: 1.6,
   	width: '100%',
   },
};

export default hipaaComplianceHubStyles;