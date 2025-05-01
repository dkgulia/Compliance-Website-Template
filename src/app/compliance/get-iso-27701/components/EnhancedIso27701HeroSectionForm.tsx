import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Iso27701HeroSectionForm from './Iso27701HeroSectionForm';

export interface FormValues {
	fullName: string;
	email: string;
}

interface FormProps {}

const EnhancedIso27701HeroSectionForm = withFormik<FormProps, FormValues>({
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
})(Iso27701HeroSectionForm);

export default EnhancedIso27701HeroSectionForm;