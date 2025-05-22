/* <ai_context>
   Styles for the DORA Five Pillars section, with updated colors
</ai_context> */

import colors from '../constants/doraData';

const DoraFivePillarsStyle = {
	container: {
	    paddingTop: { sm: '1rem', xs: '0.5rem' },
	    paddingBottom: { sm: '1rem', xs: '0.5rem' },
	    marginTop: '0rem',
	    backgroundColor: colors.primary.dark,
	},
	innerBox: {
	    maxWidth: '75rem',
	    marginX: 'auto',
	    textAlign: 'center',
	    padding: { xs: '1rem', sm: '2rem' },
	    background: colors.secondary.gradient,
	    borderRadius: { xs: '0rem', md: '2rem' },
	},
	heading: {
	    fontWeight: '700',
	    fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
	    marginBottom: '1.5rem',
	    color: colors.secondary.contrastText,
	},
	gridContainer: {
	    marginTop: '1rem',
	},
	gridItem: {
	    display: 'flex',
	    justifyContent: 'center',
	},
	pillarCard: {
	    display: 'flex',
	    alignItems: 'center',
	    width: '100%',
	    backgroundColor: colors.secondary.medium,
	    borderRadius: '1rem',
	    padding: '1rem',
	    border: `2px solid ${colors.primary.darkest}`,
	    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
	    '&:hover': {
		transform: 'scale(1.05)',
		boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.6)',
	    },
	},
	pillarImage: {
	    width: '50px',
	    height: '50px',
	    marginRight: '1rem',
	},
	pillarContent: {
	    flex: 1,
	},
	cardTitle: {
	    fontWeight: 'bold',
	    color: colors.primary.dark,
	    marginBottom: '0.5rem',
	    fontSize: '1.1rem',
	    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
	},
	cardDescription: {
	    color: colors.secondary.contrastText,
	    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
	    fontSize: '0.95rem',
	    lineHeight: 1.6,
	    textAlign: 'left',
	},
    };

    export default DoraFivePillarsStyle;