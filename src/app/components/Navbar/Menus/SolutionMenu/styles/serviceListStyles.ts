const serviceListStyles = {
	middleSection: {
		flex: 1,
		padding: '0.5rem',
		backgroundColor: '#ffffff',
		overflowY: 'auto',
		minWidth: 0,
		height: '100%',
		'&::-webkit-scrollbar': {
			width: '0',
			display: 'none',
		},
		msOverflowStyle: 'none',
		scrollbarWidth: 'none',
	},
	mobileMiddleSection: {
		width: '100%',
		backgroundColor: '#ffffff',
		padding: '0',
	},
	servicesContainer: {
		width: '100%',
		maxWidth: '100%',
	},
	sectionHeading: {
		fontSize: '1rem',
		fontWeight: 600,
		color: '#333333',
		marginBottom: '1.25rem',
		paddingBottom: '0.5rem',
		borderBottom: '1px solid #E5E7EB',
	},
	servicesGrid: {
		display: 'grid',
		gridTemplateColumns: {
			xs: '1fr',
			sm: 'repeat(auto-fit, minmax(18rem, 1fr))',
			md: 'repeat(2, 1fr)',
		},
		gap: '1.5rem',
		marginBottom: '2rem',
	},
	mobileSectionContainer: {
		width: '100%',
	},
	mobileServicesGrid: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
};

export default serviceListStyles;
