import theme from '../../../../theme';

const infoSectionStyle = {
  box: {
    paddingTop: { sm: "2rem", xs: "1rem" },
    paddingBottom: { sm: "2rem", xs: "1rem" },
    backgroundColor: theme.palette.background.default,	border:'2px solid red'

  },
  container: {
    maxWidth: "75rem",
    marginX: "auto",
    paddingLeft: { xs: "1rem", sm: "2rem" },
    paddingRight: { xs: "1rem", sm: "2rem" },
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: "2rem",
    alignItems: "center",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    maxWidth: "18.75rem",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholder: {
    width: "100%",
    minHeight: "12.5rem",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "0.625rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
    padding: "1rem",
    boxShadow: theme.customShadows?.card,
  },
  imagePlaceholderText: {
    color: theme.palette.text.secondary,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontWeight: "bold",
    color: 'white',
    fontSize: { xs: "1.5rem", sm: "1.8rem" },
    lineHeight: 1.4,
  },
  subtitle: {
    fontSize: { xs: "1rem", sm: "1.2rem" },
    color: theme.palette.text.primary,
    lineHeight: 1.5,
  },
  subheading: {
    color: theme.palette.text.secondary,
    fontSize: { xs: "0.9rem", sm: "1rem" },
    lineHeight: 1.6,
  },
};

export default infoSectionStyle;