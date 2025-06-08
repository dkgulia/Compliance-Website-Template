import theme from '../../../theme';

const painPointStyle = {
   container: {
   	paddingTop: { xs: '0.5rem', sm: '1rem' },
   	paddingBottom: { xs: '0.5rem', sm: '1rem' },
   	py: { xs: 1, sm: 2 },
   	px: { xs: 2, sm: 2 },
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	margin: '0',
   	background: theme.palette.background.default,
   },
   contentBox: {
   	maxWidth: '50rem',
   	color: theme.palette.text.primary,
   	textAlign: 'center',
   	margin: { xs: '0.5rem 0', sm: '1rem 0' },
   	padding: { xs: '0 0.5rem', sm: '0' },
   },
   headline: {
   	fontWeight: { xs: 600, sm: 'bold' },
   	color: theme.palette.text.primary,
   	fontSize: { xs: '1.4rem', sm: '2rem' },
   	marginBottom: { xs: '0.75rem', sm: '1.5rem' },
   },
   bulletList: {
   	paddingLeft: 0,
   	listStyle: 'none',
   	marginBottom: { xs: '1rem', sm: '2rem'},
},
bulletItem: {
	display: 'flex',
	flexDirection: { xs: 'column', sm: 'row' },
	alignItems: { xs: 'flex-start', sm: 'center' },
	backgroundColor: theme.palette.background.paper,
	padding: { xs: '0.5rem', sm: '1rem' },
	borderRadius: { xs: '0.5rem', sm: '0.5rem' },
	textAlign: 'left',
	gap: { xs: '0.5rem', sm: '0.8rem' },
	marginBottom: { xs: '0.5rem', sm: '1rem' },
},
checkIcon: {
	color: theme.palette.primary.light,
	fontSize: { xs: '1rem', sm: '1.5rem' },
},
solutionStatement: {
	fontWeight: 'bold',
	fontSize: { xs: '0.85rem', sm: '1.25rem' },
	color: theme.palette.text.primary,
	lineHeight: '1.5',
	margin: { xs: '0.5rem 0', sm: '1rem 0' },
},
};

export default painPointStyle;