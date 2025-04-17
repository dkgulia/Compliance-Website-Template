const pageStyles = {
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
	title: {
		fontSize: '1.3rem',
		fontWeight: 600,
		color: 'black',
		marginBottom: '0.5rem',
	},
	description: {
		fontSize: '0.875rem',
		color: 'black',
		marginBottom: '1.5rem',
		lineHeight: 1.5,
	},
	bannerPlaceholder: {
		width: '100%',
		height: '8.75rem',
		backgroundColor: '#1f1f1f',
		borderRadius: '0.5rem',
		marginBottom: '1.5rem',
	},
	linksContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '1rem',
		paddingLeft: 0,
		'@media (max-width: 960px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		'@media (max-width: 600px)': {
			gridTemplateColumns: '1fr',
		},
	},
	featuredBox: {
		borderRadius: '0.5rem',
		padding: '1.5rem',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',

	},
	featuredTitle: {
		fontSize: '1.125rem',
		fontWeight: 600,
		color: 'black',
		marginBottom: '0.5rem',
		marginTop: '0.5rem',
	},
	featuredDescription: {
		fontSize: '0.875rem',
		color: 'black',
		marginBottom: '1rem',
		lineHeight: 1.5,
	},
	imageContainer: {
		width: '100%',
		marginBottom: '0.5rem',
		borderRadius: '0.5rem',
		overflow: 'hidden',
	},
};

export default pageStyles;
