import theme from '../../../../theme';

const imageRightTextLeftStyle = {
   outerContainer: {
       padding: { xs: '1rem 0.5rem', md: '4rem 1rem' },
       background: theme.palette.background.default,
       display: 'flex',
       justifyContent: 'center',
   },
   container: {
       overflow: 'hidden',
       display: 'flex',
       flexDirection: { xs: 'column', md: 'row' },
       maxWidth: '1160px',
       width: '100%',
       background: { xs: 'transparent', md: 'transparent' },
       borderRadius: { xs: '0.75rem', sm: '1rem' },
       border: { xs: `1px solid ${theme.palette.divider}`, md: `2px solid ${theme.palette.divider}` },
    },
   textContainer: {
       padding: { xs: '1rem', md: '2rem 2.5rem' },
       flex: 1,
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       order: { xs: 1, md: 1 },
   },
   imageContainer: {
       position: 'relative',
       width: { xs: '0%', md: '40%' },
       height: { xs: '0px', md: 'auto' },
       minHeight: { md: '400px' },
       order: { xs: 2, md: 2 },
       display: { xs: 'none', md: 'block' },
   },
   title: {
       fontWeight: 600,
       fontSize: { xs: '1.4rem', sm: '2rem', md: '2rem' },
       marginBottom: { xs: '1rem', sm: '1.5rem' },
       color: theme.palette.primary.main,
   },
   list: {
       padding: 0,
       marginBottom: { xs: '1rem', sm: '1.5rem' },
   },
   listItem: {
       color: theme.palette.text.primary,
       fontSize: { xs: '0.85rem', sm: '1.1rem' },
       padding: { xs: '0.3rem 0 0.3rem 1.5rem', sm: '0.5rem 0 0.5rem 1.75rem' },
       marginBottom: { xs: '0.3rem', sm: '0.5rem' },
       position: 'relative',
       display: 'flex',
       alignItems: 'center',
       opacity: 0.9,
       '&::before': {
           content: '""',
           position: 'absolute',
           left: { xs: '0.2rem', sm: '0.25rem' },
           width: { xs: '0.4rem', sm: '0.5rem' },
           height: { xs: '0.4rem', sm: '0.5rem' },
           borderRadius: '50%',
           backgroundColor: theme.palette.secondary.main,
       },
   },
   button: {
       backgroundColor: '#115e59',
       color: '#f9fafb',
       borderRadius: '0.5rem',
       padding: {
           xs: '0.25rem 0.5rem',
           sm: '0.375rem 0.75rem',
           md: '0.25rem 1rem',
       },
       textTransform: 'none' as const,
       fontSize: { xs: '0.85rem', sm: '1rem' },
       border: '1px solid #0d9488',
       transition: 'all 150ms ease',
       alignSelf: 'flex-start',
       '&:hover': {
           backgroundColor: '#0f766e',
       },
   },
};

export default imageRightTextLeftStyle;