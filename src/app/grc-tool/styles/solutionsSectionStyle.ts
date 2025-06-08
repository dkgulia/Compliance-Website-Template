import theme from '../../../theme';

const solutionsSectionStyle = {
	section: {
		display: 'flex',
		flexDirection: 'column',
		px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
		marginTop: { xs: '3.5rem', md: '6rem' },
		gap: '2rem',
		alignItems: 'center',
		background: theme.palette.background.default,
		position: 'relative',
		overflow: 'hidden',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0.5rem',
	},
	tagline: {
		fontFamily: 'monospace',
		fontSize: '0.875rem',
		color: '#0d9488',
		letterSpacing: '0.05em',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	title: {
		fontSize: { xs: '1.5rem', md: '1.875rem' },
		textAlign: 'center',
		color: 'white',
		fontWeight: '600',
	},
	subtitle: {
		color: '#6b7280',
		textAlign: 'center',
	},
	content: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		gap: { xs: '2rem', md: '4rem' },
		width: '100%',
	},
	dashboardContainer: {
		flex: { xs: '1 1 100%', md: '1 1 55%' },
		position: 'relative',
	},
	dashboardWrapper: {
		background: '#171717',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		overflow: 'hidden',
		border: '1px solid #374151',
		boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
	},
	dashboardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: { xs: '0.75rem 1rem', sm: '1rem 1.5rem' },
		borderBottom: '1px solid #374151',
	},
	dashboardTitle: {
		color: 'white',
		fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
		fontWeight: 'bold',
	},
	windowControls: {
		display: 'flex',
		gap: '0.5rem',
	},
	windowControl: {
		width: { xs: '0.5rem', sm: '0.75rem' },
		height: { xs: '0.5rem', sm: '0.75rem' },
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
		padding: { xs: '1rem', sm: '1.5rem' },
	},
	metricsRow: {
		display: 'flex',
		gap: { xs: '0.5rem', sm: '1rem' },
		marginBottom: { xs: '1rem', sm: '2rem' },
	},
	metricBox: {
		flex: 1,
		background: '#262626',
		borderRadius: { xs: '0.375rem', sm: '0.5rem' },
		padding: { xs: '0.5rem', sm: '1rem' },
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	metricLabel: {
		color: '#6b7280',
		fontSize: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' },
		marginBottom: { xs: '0.25rem', sm: '0.5rem' },
	},
	metricValue: {
		color: 'white',
		fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
		fontWeight: 'bold',
	},
	riskScore: {
		color: '#0d9488',
	},
	complianceScore: {
		color: '#0d9488',
	},
	taskCount: {
		color: '#0d9488',
	},
	chartSection: {
		marginTop: { xs: '1rem', sm: '1.5rem' },
	},
	chartTitle: {
		color: '#6b7280',
		fontSize: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' },
		marginBottom: { xs: '0.5rem', sm: '1rem' },
	},
	chart: {
		height: { xs: '100px', sm: '150px' },
		display: 'flex',
		alignItems: 'flex-end',
		gap: { xs: '0.25rem', sm: '0.5rem' },
	},
	chartBar: {
		flex: 1,
		backgroundColor: '#0d9488',
		borderRadius: '4px 4px 0 0',
		transition: 'height 0.3s ease',
	},
	featuresContainer: {
		flex: { xs: '1 1 100%', md: '1 1 45%' },
	},
	featuresList: {
		display: 'flex',
		flexDirection: 'column',
		gap: { xs: '1rem', sm: '2rem' },
	},
	featureItem: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: { xs: '0.75rem', sm: '1.5rem' },
	},
	featureIconContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.25rem',
		padding: '0.5rem',
		borderRadius: '0.5rem',
		backgroundColor: '#115e59',
		color: 'white',
		width: '45px',
		height: '45px',
	},
	featureIcon: {
		color: 'white',
		fontSize: { xs: '1rem', sm: '1.5rem' },
	},
	featureContent: {
		flex: 1,
	},
	featureTitle: {
		color: 'white',
		fontSize: '1.125rem',
		fontWeight: '600',
		marginBottom: { xs: '0.25rem', sm: '0.5rem' },
	},
	featureDescription: {
		color: '#6b7280',
		fontSize: '0.875rem',
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