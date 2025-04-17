const complianceStyles = {
	menuBox: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		backgroundColor: 'white',
		padding: '1rem',
		maxHeight: 'calc(100vh - 8rem)',
		overflowY: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
	},
	sectionTitle: {
		fontSize: '1.3rem',
		fontWeight: 600,
		color: 'black',
		marginBottom: '1rem',
	},
	sectionDescription: {
		fontSize: '0.875rem',
		color: 'black',
		lineHeight: 1.5,
		maxWidth: '800px',
	},
	itemsGrid: {
		marginTop: '1rem',
	},
	complianceItem: {
		display: 'flex',
		alignItems: 'center',
		padding: '0.5rem',
		borderRadius: '0.5rem',
		cursor: 'pointer',
		height: '100%',
		transition: 'all 0.2s ease',
		'&:hover': {
			color:'white'
		},
	},
	iconContainer: {
		width: '4rem',
		height: '4rem',
		display: 'flex',
		backgroundColor: '#f5f5f5',
		borderRadius: '0.25rem',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '0.75rem',
		'& img': {
			maxWidth: '100%',
			height: 'auto',
			objectFit: 'contain',
		},
	},
	itemTitle: {
		fontSize: '1rem',
		fontWeight: 500,
		color: 'black',
	},
};

export default complianceStyles;
