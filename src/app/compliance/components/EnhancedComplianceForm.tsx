import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import ComplianceForm, { ComplianceFormValues } from './ComplianceForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL } from '../../constants/formMessages';

interface EnhancedComplianceFormProps {
	title: string;
	subtitle: string;
	buttonText?: string;
	sheetName: string;
	formStyles: any;
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
	complianceOptions: string[];
	onSubmitCallback?: (values: ComplianceFormValues) => void;
	fullName?: string;
	email?: string;
}

const EnhancedComplianceForm = withFormik<EnhancedComplianceFormProps, ComplianceFormValues>({
	mapPropsToValues: (props) => ({
		fullName: props.fullName || '',
		email: props.email || '',
	}),
	validationSchema: Yup.object({
		fullName: Yup.string().required(FULL_NAME_REQUIRED),
		email: Yup.string().email(INVALID_EMAIL).required(EMAIL_REQUIRED),
	}),
	handleSubmit: (values, { props, setSubmitting, resetForm }) => {
		setSubmitting(false);
		if (props.onSubmitCallback) {
			props.onSubmitCallback(values);
		}
		console.log('Submitted Values:', values);
		resetForm();
	},
})((props) => {
	return <ComplianceForm {...props} />;
});

export default EnhancedComplianceForm;