import theme from '../../../../theme';

const iso27001BannerStyle = {
  box: {
    backgroundColor: theme.palette.background.default,
    paddingY: { xs: "1.5rem", sm: "2.5rem" },
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    maxWidth: "72rem",
    margin: "0 auto",
    borderRadius: "1rem",
    border: `1px solid ${theme.palette.divider}`,
    padding: { xs: "1.5rem", sm: "2rem" },
    gap: "1.5rem",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "flex-start" },
    textAlign: { xs: "center", sm: "left" },
    gap: "1rem",
  },
  heading: {
    fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
    color: 'white',
  },
  description: {
    color: '#6B7280',
    fontSize: { xs: "0.9rem", sm: "1rem" },
    lineHeight: "1.5",
    maxWidth: { xs: "100%", sm: "30rem" },
  },
  button: {
    marginTop: '1.5rem',
		color: '#f9fafb',
		fontWeight: 800,
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.7rem 1rem',
		},
		borderRadius: '0.5rem',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		textTransform: 'none',
		fontSize: '0.9rem',
		whiteSpace: 'nowrap',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			borderColor: '#4b5563',
		},
		'&.Mui-disabled': {
			color: '#f9fafb',
			opacity: 0.5,
			backgroundColor: '#1f2937',
			border: '1px solid #374151',
		},
  },
  imageWrapper: {
    position: "relative",
    width: { xs: "100%", sm: "250px",md:'300px' },
    height: { xs: "200px", sm: "250px",md:'200px' },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    objectFit: "contain",
  },
};

export default iso27001BannerStyle;