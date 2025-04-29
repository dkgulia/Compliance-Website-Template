import theme from '../../../theme';

const solutionsSectionStyle = {
	section: {
		padding: { xs: '4rem 1rem', md: '6rem 2rem' },
		background: theme.palette.background.default,
		position: 'relative',
		overflow: 'hidden',
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		position: 'relative',
		zIndex: 5,
	},
	title: {
		color: 'white',
		fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.8rem' },
		fontWeight: '600',
		marginBottom: '3rem',
		textAlign: 'center',
	},
	content: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		gap: { xs: '3rem', md: '4rem' },
	},
	dashboardContainer: {
		flex: { xs: '1 1 100%', md: '1 1 55%' },
		position: 'relative',
	},
	dashboardWrapper: {
		background: '#1a1a1a',
		borderRadius: '1rem',
		overflow: 'hidden',
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
	},
	dashboardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1rem 1.5rem',
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	dashboardTitle: {
		color: 'white',
		fontSize: '1.2rem',
		fontWeight: 'bold',
	},
	windowControls: {
		display: 'flex',
		gap: '0.5rem',
	},
	windowControl: {
		width: '0.75rem',
		height: '0.75rem',
		borderRadius: '50%',
	},
	windowControlRed: {
		backgroundColor: '#ff5f56',
	},
	windowControlYellow: {
		backgroundColor: '#ffbd2e',
	},
	windowControlGreen: {
		backgroundColor: '#27c93f',
	},
	dashboardContent: {
		padding: '1.5rem',
	},
	metricsRow: {
		display: 'flex',
		gap: '1rem',
		marginBottom: '2rem',
	},
	metricBox: {
		flex: 1,
		background: '#262626',
		borderRadius: '0.5rem',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	metricLabel: {
		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
		marginBottom: '0.5rem',
	},
	metricValue: {
		color: 'white',
		fontSize: '1.5rem',
		fontWeight: 'bold',
	},
	riskScore: {
		color: '#5eead4',
	},
	complianceScore: {
		color: '#5eead4',
	},
	taskCount: {
		color: '#5eead4',
	},
	chartSection: {
		marginTop: '1.5rem',
	},
	chartTitle: {
		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
		marginBottom: '1rem',
	},
	chart: {
		height: '150px',
		display: 'flex',
		alignItems: 'flex-end',
		gap: '0.5rem',
	},
	chartBar: {
		flex: 1,
		backgroundColor: '#115e59',
		borderRadius: '4px 4px 0 0',
		transition: 'height 0.3s ease',
	},
	featuresContainer: {
		flex: { xs: '1 1 100%', md: '1 1 45%' },
	},
	featuresList: {
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem',
	},
	featureItem: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: '1.5rem',
	},
	featureIconContainer: {
		width: '3rem',
		height: '3rem',
		borderRadius: '50%',
		background: '#115e59',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
	},
	featureIcon: {
		color: 'white',
		fontSize: '1.5rem',
	},
	featureContent: {
		flex: 1,
	},
	featureTitle: {
		color: 'white',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		marginBottom: '0.5rem',
	},
	featureDescription: {
		color: '#6B7280',
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
	backgroundGradient: {
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%',
		background: 'radial-gradient(circle at 90% 50%, rgba(17, 94, 89, 0.1) 0%, rgba(0, 0, 0, 0) 60%)',
		zIndex: 1,
	},
};

export default solutionsSectionStyle;