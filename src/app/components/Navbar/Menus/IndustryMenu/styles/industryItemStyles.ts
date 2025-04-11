const industryItemStyles = {
	regularItem: {
	  borderRadius: '0.5rem',
	  padding: '0.1rem ',
	  display: 'flex',
	  alignItems: 'center',
	  height: '3rem',
	  width: '100%',
	  marginBottom: '0.75rem',
	  '&:hover': {
	    backgroundColor: '#f5f7fa',
	    cursor: 'pointer',
	  },
	},
	featuredItem: {
	  borderRadius: '0.5rem',
	  padding: '0.75rem 1rem',
	  display: 'flex',
	  alignItems: 'center',
	  height: '3rem',
	  width: '100%',
	  marginBottom: '0.75rem',
	  '&:hover': {
	    backgroundColor: '#f5f7fa',
	    cursor: 'pointer',
	  },
	},
	listItemIcon: {
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
	listItemText: {
	  fontSize: '0.9rem',
	  fontWeight: 500,
	  color: '#333',
	},
      };

export default industryItemStyles;