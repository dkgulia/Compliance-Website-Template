import theme from '../../../../theme';
import { Theme } from '@mui/material/styles';

const hipaaFeaturesSectionStyles = {
	box: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		marginBottom: '4.5rem',
	},
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
	},
	containerBox: {
		textAlign: 'center',
		marginBottom: '3rem',
		width: { xs: '100%', md: '80%' },
		margin: '0 auto',
	},
	heading: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
	},
	subheading: {
		fontSize: '1.2rem',
		color: '#6B7280',
		marginBottom: '1rem',
		maxWidth: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	card: {
		background: '#17171799',
		borderRadius: '1rem',
		padding: '1rem',
		height: '100%',
		minHeight: '14rem',
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
		width: '38px',
		height: '38px',
		backgroundColor: '#115e59',
		borderRadius: '0.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '0.5rem',
		marginBottom: '1.5rem',
		'& svg': {
			fontSize: '20px',
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
		marginBottom: '0.75rem',
		fontSize: '1.25rem',
		width: '100%',
		textAlign: 'left',
	},
	description: {
		color: '#6B7280',
		textAlign: 'left',
		fontSize: '1rem',
		lineHeight: 1.6,
		width: '100%',
	},
};

export default hipaaFeaturesSectionStyles;
