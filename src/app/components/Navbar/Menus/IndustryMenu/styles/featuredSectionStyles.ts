const featuredSectionStyles = {
	featuredSection: {
		backgroundColor: '#F5F7FA',
		padding: '20px',
		borderRadius: '8px',
		marginBottom: '24px',
		marginTop: '50px',
		width: '100%',
	},
	industryCategory: {
		fontSize: '1rem',
		fontWeight: 600,
		color: '#333',
		textTransform: 'uppercase',
		marginBottom: '16px',
		paddingLeft: '16px',
	},
	featuredItem: {
		display: 'flex',
		alignItems: 'center',
		padding: '12px',
		borderRadius: '8px',
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: '#E8EDF2',
			cursor: 'pointer',
		},
	},
	featuredIcon: {
		marginRight: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& svg': {
			color: '#2176FF',
			fontSize: '1.5rem',
		},
	},
	featuredText: {
		fontSize: '0.9rem',
		fontWeight: 500,
		color: '#333',
	},
};

export default featuredSectionStyles;
