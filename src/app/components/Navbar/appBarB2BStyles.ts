const appBarB2BStyles = {
	appBar: {
		backgroundColor: '#0F172A',
		position: 'fixed',
		zIndex: 10,
		boxShadow: 'none',
		borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
	},
	toolbar: {
		padding: { xs: '0 1rem', md: '0 2rem' },
		minHeight: '4rem',
		display: 'flex',
		justifyContent: 'space-between', // This ensures space between logo, nav, and action buttons
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		color: '#ffffff',
		fontWeight: 700,
		fontSize: { xs: '1rem', md: '1rem' },
		display: 'flex',
		alignItems: 'center',
	},
	logoImage: {
		maxWidth: '90px',
		height: '45px',
		marginRight: '1.5rem',
	},
	logoPlus: {
		color: '#3275B8',
		fontSize: { xs: '1.25rem', md: '1.5rem' },
		fontWeight: 'bold',
		marginLeft: '0.25rem',
	},
	navItems: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center', // Center the nav items
		flexGrow: 0, // Don't allow the nav to grow and push the action buttons
		marginLeft: '2rem',
		position: 'absolute', // Use absolute positioning
		left: '50%', // Position at 50% from the left
		transform: 'translateX(-50%)', // Pull back by 50% of its own width to center
	},
	navButton: {
		color: '#ffffff',
		fontSize: { xs: '0.875rem', md: '1rem' },
		textTransform: 'none',
		borderBottom: '0.25rem solid transparent',
		borderRadius: 0,
		padding: { xs: '0.75rem 1rem', md: '1rem 1.5rem' },
		marginX: '0.25rem',
		'&:hover': {
			backgroundColor: 'transparent',
			borderBottom: '0.25rem solid rgba(255, 255, 255, 0.5)',
		},
	},
	activeNavButton: {
		color: '#ffffff',
		fontSize: { xs: '0.875rem', md: '1rem' },
		textTransform: 'none',
		borderBottom: '0.25rem solid #3275B8',
		borderRadius: 0,
		padding: { xs: '0.75rem 1rem', md: '1rem 1.5rem' },
		marginX: '0.25rem',
		'&:hover': {
			backgroundColor: 'transparent',
			borderBottom: '0.25rem solid #3275B8',
		},
	},
	actionButtons: {
		display: 'flex',
		alignItems: 'center',
		gap: { xs: '0.5rem', md: '0.75rem' },
	},
	talkButton: {
		color: '#ffffff',
		borderRadius: '0.5rem',
		padding: { xs: '0.375rem 0.75rem', md: '0.5rem 1rem' },
		textTransform: 'none',
		fontSize: { xs: '0.75rem', md: '0.875rem' },
		whiteSpace: 'nowrap',
		'&:hover': {
			borderColor: '#ffffff',
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		},
	},
	shopButton: {
		backgroundColor: '#3275B8',
		color: '#ffffff',
		borderRadius: '0.7rem',
		padding: { xs: '0.375rem 0.75rem', md: '0.4rem 1rem' },
		textTransform: 'none',
		fontSize: { xs: '0.75rem', md: '0.875rem' },
		whiteSpace: 'nowrap',
		'&:hover': {
			backgroundColor: '#2c67a5',
		},
	},
	logoGridItem: {
		xs: 6,
		md: 'auto',
	},
	navGridItem: {
		xs: 12,
		md: 'auto',
		display: { xs: 'none', md: 'block' },
	},
	actionGridItem: {
		xs: 12,
		md: 'auto',
		display: { xs: 'none', md: 'flex' },
	},
	mobileMenuGridItem: {
		xs: 6,
		md: 'auto',
		display: { xs: 'flex', md: 'none' },
		justifyContent: 'flex-end',
	},
	menuIcon: {
		color: '#ffffff',
		padding: '0.5rem',
	},
	drawer: {
		'& .MuiDrawer-paper': {
			width: '100%',
			height: '100%',
			overflowY: 'auto',
			'&::-webkit-scrollbar': {
				display: 'none',
			},
			msOverflowStyle: 'none',
			scrollbarWidth: 'none',
		},
	},
	drawerContent: {
		display: 'flex',
		flexDirection: 'column',
		height: 'auto',
		minHeight: '100%',
		backgroundColor: '#FFFFFF',
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
	},
	mobileMenuHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0.75rem 1rem',
		borderBottom: '1px solid #E5E7EB',
		backgroundColor: '#1d1f21',
	},
	mobileLogoContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	mobileLogo: {
		color: '#FFFFFF',
		fontWeight: 700,
		fontSize: '1rem',
		display: 'flex',
		alignItems: 'center',
	},
	mobileLogoImage: {
		maxWidth: '70px',
		height: '40px',
		marginRight: '0.5rem',
	},
	mobileHeaderActions: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.75rem',
	},
	mobileShopButton: {
		backgroundColor: '#3275B8',
		color: '#ffffff',
		borderRadius: '0.7rem',
		padding: { xs: '0.375rem 0.75rem', md: '0.4rem 1rem' },
		textTransform: 'none',
		fontSize: { xs: '0.75rem', md: '0.875rem' },
		whiteSpace: 'nowrap',
		'&:hover': {
			backgroundColor: '#2c67a5',
		},
	},
	closeButton: {
		color: '#FFFFFF',
		padding: '0.375rem',
	},
	mobileMenuList: {
		padding: 1,
		backgroundColor: '#FFFFFF',
	},
	mobileMenuItem: {
		padding: '1.5rem',
		borderBottom: '1px solid #E5E7EB',
		'& .MuiListItemText-primary': {
			fontWeight: 700,
			fontSize: '1.2rem',
			color: '#000000',
		},
		cursor: 'pointer',
	},
	arrowContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		borderRadius: '6px',
		width: '40px',
		height: '40px',
	},
	mobileMenuArrow: {
		color: 'black',
		fontSize: '1.5rem',

	},
	mobileTalkButtonContainer: {
		padding: '1rem',
	},
	mobileTalkButton: {
		borderColor: '#000000',
		color: '#000000',
		width: '100%',
		padding: '0.625rem 1rem',
		textTransform: 'none',
		fontSize: '0.875rem',
		borderRadius: '0.25rem',
	},
	mobileDivider: {
		height: '1px',
		backgroundColor: '#E5E7EB',
		width: '100%',
		margin: '0.5rem 0',
	},
	mobileFeatureCardContainer: {
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	mobileImageContainer: {
		width: '100%',
		height: 'auto',
		marginBottom: '1rem',
		borderRadius: '8px',
		overflow: 'hidden',
		backgroundColor: '#F1F5F9',
	},
	mobilePlaceholder: {
		display: 'none',
	},
	mobileFeatureText: {
		fontSize: '1rem',
		fontWeight: 500,
		color: '#000000',
		marginBottom: '0.25rem',
	},
	mobileFeatureSubtext: {
		fontSize: '0.875rem',
		color: '#6B7280',
		marginBottom: '1rem',
	},
	knowMoreButton: {
		color: '#3275B8',
		textTransform: 'none',
		padding: 0,
		fontSize: '0.9375rem',
		fontWeight: 500,
		justifyContent: 'flex-start',
		'&:hover': {
			backgroundColor: 'transparent',
			textDecoration: 'underline',
		},
		'& .MuiButton-endIcon': {
			marginLeft: '0.25rem',
		},
	},
	mobileMenuTitle: {
		fontWeight: 500,
		fontSize: '1rem',
		color: '#FFFFFF',
	},
	backButton: {
		color: '#FFFFFF',
		padding: '0.375rem',
	},
	mobileSubmenuItem: {
		padding: '1rem',
		borderBottom: '1px solid #E5E7EB',
		cursor: 'pointer',
	},
	mobileSubmenuText: {
		fontWeight: 500,
		fontSize: '0.9375rem',
		color: '#000000',
	},
	serviceItemContainer: {
		display: 'flex',
		padding: '1rem',
		borderRadius: '0',
		backgroundColor: 'transparent',
		marginBottom: '1rem',
		cursor: 'pointer',
		boxShadow: 'none',
		border: 'none',
	},
	serviceIconWrapper: {
		color: '#3275B8',
		width: '2.5rem',
		height: '2.5rem',
		marginRight: '1rem',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		flexShrink: 0,
		'& svg': {
			fontSize: '2.5rem',
		},
	},
	serviceContent: {
		flex: 1,
	},
	serviceTitle: {
		fontSize: '0.875rem',
		fontWeight: 500,
		color: '#111827',
		marginBottom: '0.25rem',
	},
	serviceDescription: {
		fontSize: '0.875rem',
		color: '#6B7280',
		lineHeight: 1.5,
	},
	mobileServiceList: {
		padding: '1rem',
		overflow: 'auto',
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	mobileFeatureCard: {
		padding: '1.5rem',
		backgroundColor: '#0F172A',
		margin: '1rem',
		borderRadius: '0.25rem',
	},
	featureCardHeading: {
		fontSize: '1.125rem',
		fontWeight: 500,
		color: '#FFFFFF',
		marginBottom: '0.5rem',
	},
	featureCardText: {
		fontSize: '0.875rem',
		color: '#E5E7EB',
		marginBottom: '1.5rem',
	},

	dropdownContainer: {
		position: 'fixed',
		top: '4rem',
		left: 0,
		right: 0,
		backgroundColor: '#FFFFFF',
		zIndex: 5,
		boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
		maxHeight: 'calc(100vh - 8rem)',
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
		padding: 0,
		margin: 0,
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
	},
	sidebarContainer: {
		width: { xs: '100%', md: '280px' },
		backgroundColor: '#0F172A',
		minHeight: { xs: 'auto', md: '400px' },
		flexShrink: 0,
	},
	contentContainer: {
		width: '100%',
		maxWidth: { xs: '100%', md: '800px' },
		padding: { xs: '1rem 1.5rem', md: '1.5rem 2rem' },
		flexShrink: 0,
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
	},
	rightSideContainer: {
		width: { xs: '100%', md: '280px' },
		backgroundColor: '#FFFFFF',
		padding: { xs: '0 1.5rem 1.5rem', md: '0 1.5rem 1.5rem' },
		flexGrow: 1,
	},
	headerSpacer: {
		flexGrow: 1,
	},
	// New style for the parent container that holds logo, nav, and action buttons
	toolbarInner: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative', // Important for absolute positioning of navItems
	}
};

export default appBarB2BStyles;