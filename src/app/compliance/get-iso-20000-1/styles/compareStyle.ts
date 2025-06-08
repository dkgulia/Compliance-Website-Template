import theme from '../../../../theme';

const compareStyle = {
   box: {
       padding: { xs: '0.5rem', sm: '0rem' },
       backgroundColor: theme.palette.background.default,
   },
   innerBox: {
       maxWidth: '70rem',
       margin: '0 auto',
       textAlign: 'center' as const,
       padding: { xs: '1rem', sm: '2rem' },
   },
   title: {
       fontWeight: 600,
       fontSize: { xs: '1.4rem', sm: '2rem', md: '2rem' },
       color: theme.palette.primary.main,
       marginBottom: { xs: '1rem', sm: '1.5rem' },
   },
   stepCard: {
       background: '#17171799',
       borderRadius: { xs: '0.75rem', sm: '1rem' },
       marginBottom: { xs: '0.75rem', sm: '1rem' },
       padding: { xs: '1rem', sm: '1.5rem' },
       border: `1px solid ${theme.palette.divider}`,
       display: 'flex',
       alignItems: 'flex-start',
       gap: { xs: '1rem', sm: '1.5rem' },
       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
       '&:hover': {
           transform: 'scale(1.02)',
           boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
       },
   },
   iconContainer: {
       width: { xs: '45px', sm: '60px' },
       height: { xs: '45px', sm: '60px' },
       backgroundColor: '#115e59',
       borderRadius: '0.5rem',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexShrink: 0,
   },
   icon: {
       color: 'white',
       fontSize: { xs: '24px', sm: '32px' },
   },
   textContainer: {
       flex: 1,
       textAlign: 'left' as const,
       display: 'flex',
       alignItems: 'center',
   },
   text: {
       color: theme.palette.text.secondary,
       fontSize: { xs: '0.85rem', sm: '1rem' },
       lineHeight: 1.6,
       textAlign: 'left' as const,
   },
};

export default compareStyle;