import theme from '../../../../theme';
import { Theme } from '@mui/material/styles';

const hipaaFeaturesSectionStyles = {
   box: {
   	paddingTop: { xs: '0.5rem', sm: '1rem' },
   	paddingBottom: { xs: '0.5rem', sm: '1rem' },
   
	   background: theme.palette.background.default,
   },
   container: {
   	position: 'relative',
   	display: 'flex',
   	flexDirection: 'column',
   },
   containerBox: {
   	textAlign: 'center',
   	marginBottom: { xs: '1.5rem', sm: '3rem' },
   	width: { xs: '100%', md: '80%' },
   	margin: '0 auto',
   },
   heading: {
   	fontWeight: { xs: 600, sm: '600' },
   	fontSize: { xs: '1.4rem', sm: '2rem' },
   	color: theme.palette.text.primary,
   },
   subheading: {
   	fontSize: { xs: '0.85rem', sm: '1.2rem' },
   	color: '#6B7280',
   	marginBottom: { xs: '0.5rem', sm: '1rem' },
   	maxWidth: '800px',
   	marginLeft: 'auto',
   	marginRight: 'auto',
   },
   card: {
   	background: '#17171799',
   	borderRadius: { xs: '0.75rem', sm: '1rem' },
   	padding: { xs: '0.75rem', sm: '1rem' },
   	height: '100%',
   	minHeight: { xs: '8rem', sm: '14rem' },
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'flex-start',
   	transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   	border: `1px solid ${theme.palette.divider}`,
   	'&:hover': {
   		transform: 'scale(1.02)',
   		boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   	},
   },
   iconContainer: {
   	width: { xs: '35px', sm: '38px' },
   	height: { xs: '35px', sm: '38px' },
   	backgroundColor: '#115e59',
   	borderRadius: '0.5rem',
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	marginTop: { xs: '0.25rem', sm: '0.5rem' },
   	marginBottom: { xs: '0.75rem', sm: '1.5rem' },
   	'& svg': {
   		fontSize: { xs: '16px', sm: '20px' },
   		color: 'white',
   	},
   },
   textContainer: {
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'flex-start',
   	textAlign: 'left',
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

export default hipaaFeaturesSectionStyles;