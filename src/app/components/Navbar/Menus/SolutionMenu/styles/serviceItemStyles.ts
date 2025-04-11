const serviceItemStyles = {
	serviceItem: {
		display: 'flex',
		alignItems: 'flex-start',
		color: 'inherit',
		textDecoration: 'none',
		backgroundColor: 'transparent',
		transition: 'color 0.2s ease',
		height: '100%',
		'&:hover': {
			backgroundColor: 'transparent',
			'& svg': {
				color: '#1e64b4',
			},
		},
	},
	iconBox: {
		backgroundColor: '#f5f7fa',
		padding:'0.5rem',
		borderRadius:'0.4rem',
		color: '#3275B8',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '3rem',
		height: '3rem',
		marginRight: '1.5rem',
		marginTop: '0.125rem',
		transition: 'color 0.2s ease',
		flexShrink: 0,
		'& svg': {
			fontSize: '2rem',
		},
	},
	serviceContent: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	},
	serviceTitle: {
		fontSize: '0.9156rem',
		fontWeight: 600,
		color: '#333333',
		marginBottom: '0.1rem',
	},
	serviceDescription: {
		fontSize: '0.8125rem',
		color: '#666666',
		lineHeight: 1.5,
	},
	mobileServiceItem: {
		display: 'flex',
		alignItems: 'flex-start',
		padding: '1.25rem 1.5rem',
		color: 'inherit',
		textDecoration: 'none',
		borderBottom: '1px solid #E5E7EB',
		'&:hover': {
			backgroundColor: '#F5F7FA',
		},
	},
	mobileIconBox: {
		color: '#3275B8',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '3rem',
		height: '3rem',
		marginRight: '1rem',
		flexShrink: 0,
		'& svg': {
			fontSize: '2.5rem',
		},
	},
	mobileServiceTitle: {
		fontSize: '14px',
		fontWeight: 500,
		color: '#333333',
		marginBottom: '0.25rem',
	},
	mobileServiceDescription: {
		fontSize: '14px',
		color: '#666666',
		lineHeight: 1.4,
	},
};

export default serviceItemStyles;
