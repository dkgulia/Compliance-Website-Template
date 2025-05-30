import theme from '../../../../theme';

const listBlockStyle = {
   box: {
   	paddingTop: { xs: '0.5rem', sm: '1rem' },
   	paddingBottom: { xs: '1rem', sm: '1rem', md: '2rem' },
   	marginX: { xs: '0.5rem', sm: '0rem' },
   },
   container: {
   	maxWidth: '75rem',
   	marginX: 'auto',
   	px: { xs: '1rem', sm: '2rem' },
   },
   heading: {
   	textAlign: 'center',
   	color: theme.palette.text.primary,
   	fontWeight: '600',
   	marginBottom: '0.5rem',
   	fontSize: { xs: '1.4rem', sm: '2rem', md: '2rem' },
   },
   subtitle: {
   	textAlign: 'center',
   	color: theme.palette.text.secondary,
   	marginBottom: { xs: '1rem', sm: '2rem' },
   	fontSize: { xs: '0.85rem', sm: '1.2rem' },
   },
   grid: {
   	marginTop: { xs: '1rem', sm: '2rem' },
   	gap: { xs: 2, sm: 3 },
   },
   outerItemBox: {
   	display: 'flex',
   	alignItems: 'flex-start',
   	marginBottom: { xs: '0.75rem', sm: '1.2rem' },
   	transition: 'transform 0.2s ease',
   	'&:hover': {
   		transform: 'translateX(5px)',
   	},
   },
   iconForList: {
   	fontSize: { xs: '1.2rem', sm: '1.8rem' },
   	color: '#115e59'
   },
   iconContainerForList: {
   	minWidth: { xs: '1.5rem', sm: '2rem' },
   	marginRight: { xs: '0.75rem', sm: '1rem' },
   	display: 'flex',
   	alignItems: 'center',
   	justifyContent: 'center',
   },
   textForList: {
   	color: '#6B7280',
   	lineHeight: 1.6,
   	fontSize: { xs: '0.85rem', sm: '1rem' },
   },
   rightGridItem: {
   	display: 'flex',
   	justifyContent: 'center',
   },
   imageContainer: {
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	height: '90%',
   },
   imageStyle: {
   	maxWidth: '80%',
   	height: 'auto',
   	borderRadius: { xs: '0.75rem', sm: '12px' },
   	objectFit: 'contain' as const,
   	transition: 'transform 0.3s ease',
   	'&:hover': {
   		transform: 'scale(1.02)',
   	},
   },
   '@media (max-width: 900px)': {
   	imageStyle: {
   		maxWidth: '80%',
   		margin: '20px auto',
   	},
   },
};

export default listBlockStyle;