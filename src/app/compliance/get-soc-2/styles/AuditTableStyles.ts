import theme from '../../../../theme';

const auditTableStyles = {
	box: {
		py: { xs: 4, sm: 8 },
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
	container: {
		maxWidth: '1100px',
		textAlign: 'center',
		padding: { xs: '0 1rem', sm: '0 2rem' },
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		marginBottom: '0.5rem',
	},
	subtitle: {
		color: theme.palette.text.secondary,
		fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
		marginBottom: '1.5rem',
	},
	divider: {
		backgroundColor: theme.palette.divider,
		margin: { xs: '16px 0', sm: '20px 0' },
	},
	infoBox: {
		display: 'flex',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		gap: '1rem',
		marginBottom: '2rem',
		flexDirection: { xs: 'row', md: 'row' },
		width: '100%',

	},
	icon: {
		fontSize: '2.5rem',
		marginBottom: '0.5rem',
		color:'#115e59'

	},
	iconTitle: {
		fontSize: { xs: '1rem', sm: '1.2rem' },
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.3rem',
	},
	iconDescription: {
		fontSize: { xs: '0.9rem', sm: '1rem' },
		color: '#6B7280',
	},
	iconBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		padding: '1.5rem',
		borderRadius: '10px',
		background: '#17171799',
		width: '50%',
		maxWidth: '280px',
		transition: 'transform 0.3s ease, background-color 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			backgroundColor: theme.palette.background.paper,
		},
	},
	tableContainer: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: '8px',
		padding: '1rem',
	},
	tableHead: {
		backgroundColor: theme.palette.background.darkPaper,
	},
	tableCellHead: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '1rem',
		color: theme.palette.text.primary,
		padding: '12px',
	},
	tableCellBody: {
		textAlign: 'center',
		fontSize: '0.8rem',
		color: theme.palette.text.primary,
		padding: '13px',
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',

	},
	card: {
		background: '#17171799',
		padding: '1rem',
		borderRadius: '8px',
		textAlign: 'left',
	},
	cardTitle: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
	},
	cardSubtitle: {
		color: theme.palette.text.secondary,
		fontSize: '1rem',
		marginTop: '5px',
	},
	cardDescription: {
		fontSize: '0.9rem',
		color: theme.palette.text.muted,
		marginTop: '5px',
	},
};

export default auditTableStyles;