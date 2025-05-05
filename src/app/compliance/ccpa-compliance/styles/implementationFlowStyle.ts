import theme from '../../../../theme';

const implementationFlowStyle = {
	outerBox: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '2rem',
		backgroundColor: theme.palette.background.default,
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		px: { xs: '1rem', sm: '2rem' },
	},
	heading: {
		fontSize: '2rem',
		fontWeight: 'bold',
		textAlign: 'center' as const,
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	subheading: {
		fontSize: '1rem',
		color: '#6B7280',
		marginBottom: '1rem',
		textAlign: 'center' as const,
		maxWidth: '700px',
		marginX: 'auto',
		lineHeight: '1.6',
	},
	tableContainer: {
		borderRadius: '0.5rem',
		overflow: 'hidden',
		boxShadow: theme.customShadows?.card,
	},
	table: {
		minWidth: 600,
		backgroundColor: '#17171799',
		borderRadius: '0.5rem',
	},
	tableHeadRow: {
		backgroundColor: '#17171799',
	},
	th: {
		color: theme.palette.text.primary,
		fontWeight: 'bold',
		borderBottom: '1px solid #3a3a3a',
	},
	tableBodyRow: {
		'&:hover': {
			backgroundColor: '#262626',
		},
	},
	td: {
		color: '#6B7280',
		borderBottom: '1px solid #3a3a3a',
		verticalAlign: 'top' as const,
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
};

export default implementationFlowStyle;