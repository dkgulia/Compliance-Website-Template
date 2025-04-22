const platformStyles = {
	menuBox: {
	  display: 'flex',
	  flexDirection: 'column',
	  width: '100%',
	  backgroundColor: 'white',
	  maxHeight: 'calc(100vh - 8rem)',
	  overflowY: 'auto',
	  '&::-webkit-scrollbar': {
	    display: 'none',
	  },
	  msOverflowStyle: 'none',
	  scrollbarWidth: 'none',
	},
	container: {
	  display: 'flex',
	  width: '100%',
	  height: '100%',
	},
	sidebar: {
	  width: '270px',
	  backgroundColor: '#F9FAFB',
	  borderRight: '1px solid #E5E7EB',
	  padding: '1rem 0',
	  flexShrink: 0,
	},
	mainContent: {
	  flex: 1,
	  padding: '1.5rem 2rem',
	  display: 'flex',
	  flexDirection: 'column',
	},
	sidebarHeader: {
	  padding: '0.75rem 1.5rem',
	  fontSize: '0.875rem',
	  fontWeight: 600,
	  color: '#6B7280',
	  textTransform: 'uppercase',
	  letterSpacing: '0.05em',
	},
	sizeOptionContainer: {
	  display: 'flex',
	  alignItems: 'center',
	  padding: '0.75rem 1.5rem',
	  cursor: 'pointer',
	  '&:hover': {
	    backgroundColor: '#F3F4F6',
	  },
	},
	sizeOptionIcon: {
	  width: '2rem',
	  height: '2rem',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginRight: '1rem',
	  '& svg': {
	    color: '#115e59',
	    fontSize: '1.5rem',
	  },
	},
	sizeOptionTitle: {
	  fontSize: '0.875rem',
	  fontWeight: 600,
	  color: '#111827',
	  marginBottom: '0.25rem',
	},
	sizeOptionDescription: {
	  fontSize: '0.75rem',
	  color: '#6B7280',
	  lineHeight: 1.4,
	},
	solutionItem: {
	  padding: '0.75rem 1.5rem',
	  cursor: 'pointer',
	  '&:hover': {
	    backgroundColor: '#F3F4F6',
	  },
	},
	solutionItemText: {
	  fontSize: '0.875rem',
	  color: '#111827',
	  fontWeight: 500,
	},
	featuresGrid: {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(2, 1fr)',
	  gap: '1.5rem',
	},
	featureItem: {
	  display: 'flex',
	  alignItems: 'flex-start',
	  cursor: 'pointer',
	  '&:hover': {
	    '& $featureTitle': {
	      color: '#3B82F6',
	    },
	  },
	},
	featureIcon: {
	  width: '2.5rem',
	  height: '2.5rem',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#f5f5f5',
	  borderRadius: '0.375rem',
	  marginRight: '1rem',
	  '& svg': {
	    color: '#115e59',
	    fontSize: '1.5rem',
	  },
	},
	featureContent: {
	  flex: 1,
	},
	featureTitle: {
	  fontSize: '0.875rem',
	  fontWeight: 600,
	  color: '#111827',
	  marginBottom: '0.25rem',
	  display: 'flex',
	  alignItems: 'center',
	},
	featureDescription: {
	  fontSize: '0.75rem',
	  color: '#6B7280',
	  lineHeight: 1.4,
	},
	newBadge: {
	  backgroundColor: '#FBBF24',
	  color: '#000000',
	  fontSize: '0.625rem',
	  fontWeight: 600,
	  padding: '0.125rem 0.375rem',
	  borderRadius: '0.25rem',
	  marginLeft: '0.5rem',
	},
	sectionTitle: {
	  fontSize: '0.875rem',
	  fontWeight: 600,
	  color: '#6B7280',
	  marginBottom: '1.5rem',
	  textTransform: 'uppercase',
	  letterSpacing: '0.05em',
	  paddingBottom: '0.5rem',
	  borderBottom: '1px solid #E5E7EB',
	},
	sidebarSection: {
	  marginBottom: '1.5rem',
	},
	// Mobile styles
	mobileContainer: {
	  width: '100%',
	  padding: '1rem',
	},
	mobileCategory: {
	  padding: '0.75rem 0',
	  borderBottom: '1px solid #E5E7EB',
	  fontWeight: 600,
	},
	mobileFeaturesList: {
	  marginTop: '1rem',
	},
	mobileCategoriesContainer: {
	  marginBottom: '1.5rem',
	},
      };

      export default platformStyles;