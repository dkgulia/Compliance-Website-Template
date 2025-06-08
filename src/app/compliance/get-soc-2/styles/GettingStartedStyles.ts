import theme from '../../../../theme';

const soc2StepsSectionStyle = {
	container: {
	    paddingTop: { sm: '3rem', xs: '1rem' },
	    paddingBottom: { sm: '3rem', xs: '1rem' },
	    backgroundColor: theme.palette.background.default,
	    color: theme.palette.text.primary,
	},
	innerBox: {
	    maxWidth: '1000px',
	    margin: '0 auto',
	    px: { xs: '1.5rem', sm: '1rem' },
	},
	title: {
	    fontWeight: 600,
	    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem' },
	    color: theme.palette.text.primary,
	    marginBottom: '0.5rem',
	    textAlign: 'center',
	},
	highlight: {
	    color: '#115e59',
	    fontWeight: 600,
	    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem' },
	},
	subtitle: {
	    fontSize: '1rem',
	    color: theme.palette.text.secondary,
	    marginBottom: '4rem',
	    textAlign: 'center',
	},
	imageContainer: {
	    maxWidth: '400px',
	    height: '350px',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	},
	textContainer: {
	    textAlign: 'left',
	    paddingLeft: { md: '1rem' },
	    paddingRight: { md: '1rem' },
	},
	stepNumber: {
	    color: '#115e59',
	    fontSize: '1.5rem',
	    fontWeight: 'bold',
	    marginBottom: '0.75rem',
	},
	stepHeading: {
	    fontWeight: '600',
	    fontSize: { xs: '1.4rem', md: '1.5rem' },
	    color: theme.palette.text.primary,
	    marginBottom: '1rem',
	    lineHeight: 1.2,
	},
	stepDescription: {
	    fontSize: '1.1rem',
	    color: theme.palette.text.primary,
	    lineHeight: 1.6,
	    maxWidth: '90%',
	}
};

export default soc2StepsSectionStyle;