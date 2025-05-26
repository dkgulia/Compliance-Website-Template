import theme from '../../../../theme';

const ctaSectionStyle = {
    box: {
        paddingTop: { sm: "1rem", xs: "0.5rem" },
        paddingBottom: { sm: "1rem", xs: "0.5rem" },
        background: theme.palette.background.default,
        textAlign: "center" as const
    },
    container: {
        maxWidth: "75rem",
        marginX: "auto",
        px: { xs: "1rem", sm: "2rem" }
    },
    title: {
        fontWeight: "bold" as const,
        fontSize: { xs: "1.6rem", sm: "2rem" },
        color: theme.palette.text.primary,
        marginBottom: "1rem"
    },
    subtitle: {
        color: theme.palette.text.primary,
        marginBottom: "1rem"
    },
    description: {
        color: theme.palette.text.secondary,
        marginBottom: "2rem",
        maxWidth: "40rem",
        marginX: "auto",
        lineHeight: "1.6"
    },
    button: {
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        color: theme.palette.primary.contrastText,
        fontWeight: "bold",
        borderRadius: "2.5rem",
        padding: "0.8rem 1.5rem",
        "&:hover": {
            background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            boxShadow: theme.customShadows?.button || '0 4px 10px rgba(0, 0, 0, 0.2)', 
            transform: "translateY(-0.125rem)"
        }
    }
};

export default ctaSectionStyle;