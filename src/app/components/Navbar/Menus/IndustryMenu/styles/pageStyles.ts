const pageStyles = {
	menuBox: {
	  display: 'flex',
	  flexDirection: 'column',
	  width: '100%',
	  backgroundColor: 'white',
	  padding: '1rem',
	  maxHeight: 'calc(100vh - 8rem)',
	  overflowY: 'auto',
	},
	header: {
	  paddingBottom: '1rem',
	  borderBottom: '0.0625rem solid #E0E0E0',
	  marginBottom: '2rem',
	},
	title: {
	  fontSize: '1.3rem',
	  fontWeight: 600,
	  color: '#333',
	  marginBottom: '0.5rem',
	},
	description: {
	  fontSize: '0.875rem',
	  color: '#666',
	},
	categoryHeading: {
	  fontSize: '1.3rem',
	  fontWeight: 600,
	  color: '#333',
	  marginBottom: '1.5rem',
	  padding:'0.3rem'
	},
	bannerPlaceholder: {
	  width: '100%',
	  height: '8.75rem',
	  backgroundColor: '#F9FAFC',
	  borderRadius: '0.5rem',
	  marginBottom: '2rem',
	},
	industriesGrid: {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(5, 1fr)',
	  gap: '1rem',
	  '@media (max-width: 1400px)': {
	    gridTemplateColumns: 'repeat(4, 1fr)',
	  },
	  '@media (max-width: 1100px)': {
	    gridTemplateColumns: 'repeat(3, 1fr)',
	  },
	  '@media (max-width: 800px)': {
	    gridTemplateColumns: 'repeat(2, 1fr)',
	  },
	  '@media (max-width: 500px)': {
	    gridTemplateColumns: '1fr',
	  },
	},
	columnContainer: {
	  display: 'flex',
	  flexDirection: 'column',
	  gap: '0.5rem',
	}
      };

export default pageStyles;