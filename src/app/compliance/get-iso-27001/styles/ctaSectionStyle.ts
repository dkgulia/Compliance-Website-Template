import themeColors from '../constants/iso27001Data';


const ctaSectionStyle = {
    box: {
        paddingTop: { sm: "1rem", xs: "0.5rem" },
        paddingBottom: { sm: "1rem", xs: "0.5rem" },
        background: themeColors.background,
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
        color: themeColors.secondary,
        marginBottom: "1rem"
    },
    subtitle: {
        color: themeColors.textPrimary,
        marginBottom: "1rem"
    },
    description: {
        color: "#E0E0E0",
        marginBottom: "2rem",
        maxWidth: "40rem",
        marginX: "auto",
        lineHeight: "1.6"
    },
    button: {
        background: "linear-gradient(90deg, #ED005C, #FF6BAD)",
        color: themeColors.secondary,
        fontWeight: "bold",
        borderRadius: "2.5rem",
        padding: "0.8rem 1.5rem",
        "&:hover": {
            background: "linear-gradient(90deg, #FF6BAD, #ED005C)",
            boxShadow: "0 4px 10px rgba(255, 107, 173, 0.4)", 
            transform: "translateY(-0.125rem)"
        }
    }
};

export default ctaSectionStyle;