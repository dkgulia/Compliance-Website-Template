import theme from '../../../../theme';

const pitfallsSectionStyle = {
   box: {
   	paddingTop: { sm: '2rem', xs: '0.5rem' },
   	paddingBottom: { sm: '2.5rem', xs: '1rem' },
   	marginX: { xs: '1rem', sm: '2rem' },
   	background: theme.palette.background.default,
   },
   container: {
   	maxWidth: '75rem',
   	marginX: 'auto',
   },
   heading: {
   	fontWeight: '600',
   	fontSize: { xs: '1.4rem', sm: '2.2rem' },
   	color: theme.palette.text.primary,
   	textAlign: 'center',
   	marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   },
   subheading: {
   	fontWeight: '500',
   	fontSize: { xs: '0.85rem', sm: '1.2rem' },
   	color: '#6B7280',
   	textAlign: 'center',
   	marginBottom: { xs: '1.5rem', sm: '2rem' },
   },
   gridContainer: {
   	marginTop: { xs: '0.5rem', sm: '1rem' },
   },
   card: {
   	borderRadius: { xs: '0.75rem', sm: '1rem' },
   	border: `1px solid ${theme.palette.divider}`,
   	padding: { xs: '0.75rem', sm: '1.5rem' },
   	backgroundColor: '#17171799',
   	display: 'flex',
   	flexDirection: 'column',
   	boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
   	height: '100%',
   },
   cardContent: {
   	display: 'flex',
   	flexDirection: 'row',
   	alignItems: 'flex-start',
   	gap: { xs: '0.75rem', sm: '1.5rem' },
   	padding: '0 !important',
   },
   textContainer: {
   	display: 'flex',
   	flexDirection: 'column',
   	alignItems: 'flex-start',
   	flex: 1,
   },
   cardTitle: {
   	fontWeight: '600',
   	fontSize: { xs: '14px', sm: '1.2rem' },
   	color: theme.palette.primary.light,
   	marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   	textAlign: 'left',
   },
   cardDesc: {
   	fontSize: { xs: '12px', sm: '0.95rem' },
   	color: theme.palette.text.secondary,
   	lineHeight: 1.6,
   	textAlign: 'left',
   },
   iconContainer: {
   	width: { xs: '2.5rem', sm: '3.5rem' },
   	height: { xs: '2.5rem', sm: '3.5rem' },
   	display: 'flex',
   	justifyContent: 'center',
   	alignItems: 'center',
   	borderRadius: '0.5rem',
   	backgroundColor: theme.palette.secondary.main,
   	flexShrink: 0,
   },
};

export default pitfallsSectionStyle;