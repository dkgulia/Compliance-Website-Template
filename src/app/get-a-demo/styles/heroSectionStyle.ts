import theme from '../../../theme';

const heroSectionStyles = {
 heroContainer: {
   display: 'flex',
   flexDirection: { xs: 'column', md: 'row' },
   alignItems: 'center',
   gap: { xs: '2rem', md: '4rem' },
   px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
   paddingTop: { xs: '8rem', sm: '8rem', md: '5rem' },
   paddingBottom: { xs: '2.5rem', sm: '2rem', md: '6rem' },
   background: theme.palette.background.default,
   position: 'relative',
   overflow: 'hidden',
   '&::before': {
     content: '""',
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}15, transparent 45%)`,
     pointerEvents: 'none',
   },
 },
 contentBox: {
   flex: 1,
   textAlign: { xs: 'center', md: 'left' },
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   order: { xs: 1, md: 1 },
 },
 tagline: {
   fontFamily: 'monospace',
   fontSize: '0.875rem',
   color: '#0d9488',
   letterSpacing: '0.05em',
   textTransform: 'uppercase',
   marginBottom: '0rem',
   display: 'inline-block',
   padding: '0.5rem 1.2rem',
   borderRadius: '2rem',
   fontWeight: 'bold',
   transition: 'transform 0.2s ease, box-shadow 0.2s ease',

 },
 title: {
   fontSize: { xs: '1.5rem', md: '2.2rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   lineHeight: 1.3,
   marginBottom: '1rem',
 },
 highlightWrapper: {
   display: 'inline-flex',
   alignItems: 'center',
   position: 'relative',
 },
 highlight: {
   background: theme.customGradients?.primary,
   WebkitBackgroundClip: 'text',
   WebkitTextFillColor: 'transparent',
   display: 'inline',
 },
 logoWrapper: {
   display: 'inline-flex',
   alignItems: 'center',
   marginBottom: '0.5rem',
   position: 'relative',
   top: '3px',
   '& img': {
     filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))',
   },
 },
 description: {
   color: '#6b7280',
   fontSize: '1rem',
   lineHeight: 1.6,
   marginBottom: '1.5rem',
   maxWidth: '550px',
 },
 formBox: {
   flex: 1,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   order: { xs: 2, md: 2 },
   width: '100%',
 },
 formContainer: {
   padding: '2rem',
   borderRadius: '1rem',
   background: '#171717',
   border: '1px solid #374151',
   width: '100%',
   maxWidth: '600px',
 },
 formHeading: {
   fontSize: { xs: '1.5rem', md: '1.875rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: '0.5rem',
 },
 subtitle: {
   marginBottom: '1.5rem',
   color: '#6b7280',
   fontSize: '1rem',
 },
 compliancesLabel: {
   fontWeight: 600,
   marginBottom: '0.5rem',
   color: theme.palette.text.primary,
   fontSize: '0.875rem',
 },
 input: {
   color: 'white',
   '& .MuiOutlinedInput-root': {
     '& fieldset': {
       borderColor: '#374151',
     },
     '&:hover fieldset': {
       borderColor: '#0d9488',
     },
     '&.Mui-focused fieldset': {
       borderColor: '#0d9488',
     },
   },
 },
 checkboxLabel: {
   '& .MuiFormControlLabel-label': {
     color: '#ffffff',
     fontSize: '0.875rem',
   },
   '& .MuiCheckbox-root': {
     color: '#6b7280',
     '&.Mui-checked': {
       color: '#0d9488',
     },
   },
 },
 button: {
   display: 'inline-flex',
   px: '1rem',
   py: '0.6rem',
   backgroundColor: '#115e59',
   '&:hover': {
     backgroundColor: '#0f766e',
     transform: 'translateY(-2px)',
   },
   color: 'white',
   fontSize: '0.9rem',
   borderRadius: '0.5rem',
   transition: 'all 0.3s ease',
   border: '1px solid #0d9488',
   textTransform: 'none',
   fontWeight: 600,
   width: '100%',
   '&:disabled': {
     backgroundColor: '#374151',
     color: '#6b7280',
     border: '1px solid #374151',
   },
 },
};

export default heroSectionStyles;