import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import PciDssHeroSectionForm from '../components/PciDssHeroSectionForm';

export interface FormValues {
	fullName: string;
	email: string;
}

interface FormProps {}

const EnhancedHeroSectionForm = withFormik<FormProps, FormValues>({
	mapPropsToValues: () => ({
		fullName: '',
		email: '',
	}),
	validationSchema: Yup.object({
		fullName: Yup.string().required('Full Name is required'),
		email: Yup.string().email('Invalid email format').required('Work Email is required'),
	}),
	handleSubmit: (values, { setSubmitting }) => {
		console.log('Submitted Values:', values);
		setSubmitting(false);
	},
})(PciDssHeroSectionForm);

export default EnhancedHeroSectionForm;