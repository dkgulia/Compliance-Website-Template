const aboutItemStyles = {
	aboutItem: {
		borderRadius: '0.5rem',
		padding: '0.75rem 1rem',
		display: 'flex',
		alignItems: 'center',
		height: '3rem',
		'&:hover': {
			backgroundColor: '#1f1f1f',
			cursor: 'pointer',
		},
	},
	itemIcon: {
		minWidth: '2rem',
		width: '3rem',
		height: '3rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '0.75rem',
		backgroundColor: '#f5f5f5',
		borderRadius: '0.25rem',
		'& svg': {
			color: '#14b8a6',
			fontSize: '2rem',
		},
	},
	itemText: {
		fontSize: '0.95rem',
		fontWeight: 500,
		color: 'black',
	},
	knowMoreButton: {
		marginTop: 'auto',
		color: '#14b8a6',
		textTransform: 'none',
		fontWeight: 500,
		fontSize: '0.875rem',
		padding: '0.5rem 0',
		justifyContent: 'flex-start',
		
	},
};

export default aboutItemStyles;
