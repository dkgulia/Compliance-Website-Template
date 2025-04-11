const categorySidebarStyles = {
	menuBoxOne: {
		width: {
			xs: '100%',
			sm: '17.5rem',
		},
		backgroundColor: '#0F172A',
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		height: '100%',
	},
	category: {
		padding: '1rem 0.5rem 1rem 1.5rem',
		cursor: 'pointer',
		borderLeft: '0.25rem solid transparent',
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
		},
	},
	activeCategory: {
		padding: '1rem 0.5rem 1rem 1.5rem',
		cursor: 'pointer',
		backgroundColor: '#FFFFFF',
		borderLeft: '0.5rem solid #3275B8',
		position: 'relative',
	},
	categoryText: {
		fontSize: '1rem',
		fontWeight: 500,
		color: '#FFFFFF',
		transition: 'color 0.2s ease',
		lineHeight: 1.4,
	},
	activeCategoryText: {
		fontSize: '1rem',
		fontWeight: 500,
		color: '#333333',
		transition: 'color 0.2s ease',
		lineHeight: 1.4,
	},
	mobileMenuBox: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		backgroundColor: '#FFFFFF',
		overflowY: 'auto',
		maxHeight: '100%',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
	},
	mobileCategoryHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1.25rem 1.5rem',
		borderBottom: '1px solid #E5E7EB',
		cursor: 'pointer',
		color: 'black !important',
	},
	mobileCategoryText: {
		fontSize: '1.2rem',
		fontWeight: 600,
	},
	mobileServicesContainer: {
		width: '100%',

	},
};

export default categorySidebarStyles;
