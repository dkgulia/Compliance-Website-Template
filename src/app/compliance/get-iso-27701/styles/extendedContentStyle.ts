import theme from '../../../../theme'; // Update this path to match your project structure

const extendedContentStyle = {
   box: {
   	paddingTop: { sm: '1.5rem', xs: '0.5rem' },
   	paddingBottom: { sm: '2rem', xs: '1rem' },
   	marginTop: '0rem',
   	marginX: { xs: '1rem', sm: '0rem' },
   	background: theme.palette.background.default,
   },
   container: {
   	maxWidth: '75rem',
   	marginX: 'auto',
   },
   title: {
   	fontWeight: '700',
   	fontSize: { xs: '1.4rem', sm: '2rem' },
   	color: theme.palette.text.primary,
   	marginBottom: { xs: '0.25rem', sm: '0.5rem' },
   	textAlign: 'center' as const,
   },
   subtitle: {
   	fontWeight: '500',
   	fontSize: { xs: '0.85rem', sm: '1.1rem' },
   	color: '#6B7280',
   	marginBottom: { xs: '1rem', sm: '1.5rem' },
   	textAlign: 'center' as const,
   },
   gridContainer: {
   	marginTop: '0.5rem',
   },
   card: {
   	display: 'flex',
   	flexDirection: 'column' as const,
   	gap: { xs: '0.5rem', sm: '0.75rem' },
   	padding: { xs: '0.75rem', sm: '1.5rem' },
   	backgroundColor: '#17171799',
   	border: `1px solid ${theme.palette.divider}`,
   	borderRadius: { xs: '0.75rem', sm: '1rem' },
   	boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
   	height: '100%',
   },
   cardTitle: {
   	fontWeight: '600',
   	fontSize: { xs: '14px', sm: '1.1rem' },
   	color: theme.palette.primary.light,
   	textAlign: 'center',
   	marginBottom: { xs: '0.125rem', sm: '0.25rem' },
   },
   cardDesc: {
   	fontSize: { xs: '12px', sm: '0.9rem' },
   	color: theme.palette.text.secondary,
   	lineHeight: 1.5,
   	textAlign: 'center',
   },
   iconContainer: {
   	width: { xs: '2.5rem', sm: '3rem' },
   	height: { xs: '2.5rem', sm: '3rem' },
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   	marginX: 'auto',
   	backgroundColor: theme.palette.primary.main,
   	borderRadius: '0.5rem',
   },
};

export default extendedContentStyle;