
const aboutItemStyles = {
	aboutItem: {
	  borderRadius: '0.5rem',
	  padding: '0.75rem 1rem',
	  display: 'flex',
	  alignItems: 'center',
	  height: '3rem',
	  '&:hover': {
	    backgroundColor: '#f5f7fa',
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
	  backgroundColor: '#f5f7fa',
	  borderRadius: '0.25rem',
	  '& svg': {
		color: '#3275B8',
		fontSize: '2rem',
	  },
	},
	itemText: {
	  fontSize: '0.95rem',
	  fontWeight: 500,
	  color: '#333',
	},
	knowMoreButton: {
	  marginTop: 'auto',
	  color: '#2176FF',
	  textTransform: 'none',
	  fontWeight: 500,
	  fontSize: '0.875rem',
	  padding: '0.5rem 0',
	  justifyContent: 'flex-start',
	  '&:hover': {
	    backgroundColor: 'transparent',
	    color: '#1a5cc4',
	  },
	}
      };

      export default aboutItemStyles;