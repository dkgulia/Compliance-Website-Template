import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import ComplianceForm, { ComplianceFormValues } from './ComplianceForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL, COMPANY_NAME_REQUIRED, PHONE_REQUIRED, COUNTRY_REQUIRED } from '../../constants/formMessages';
import { SheetNameType } from '../../constants/sheetTypes';
import { SxProps, Theme } from '@mui/material';

interface EnhancedComplianceFormProps {
	title: string;
	subtitle: string;
	buttonText?: string;
	sheetName: SheetNameType;
	formStyles: Record<string, SxProps<Theme>>;
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
	complianceOptions: string[];
	onSubmitCallback?: (values: ComplianceFormValues) => void;
	fullName?: string;
	email?: string;
	companyName?: string;
	phoneNumber?: string;
	country?: string;
}

const EnhancedComplianceForm = withFormik<EnhancedComplianceFormProps, ComplianceFormValues>({
	mapPropsToValues: (props) => ({
		fullName: props.fullName || '',
		email: props.email || '',
		companyName: props.companyName || '',
		phoneNumber: props.phoneNumber || '',
		country: props.country || '',
	}),
	validationSchema: Yup.object({
		fullName: Yup.string().required(FULL_NAME_REQUIRED),
		email: Yup.string().email(INVALID_EMAIL).required(EMAIL_REQUIRED),
		companyName: Yup.string().required(COMPANY_NAME_REQUIRED),
		phoneNumber: Yup.string().required(PHONE_REQUIRED),
		country: Yup.string().required(COUNTRY_REQUIRED),
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