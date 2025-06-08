import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import ProductDemoForm, { ProductDemoFormValues } from './ProductDemoForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL, COMPANY_NAME_REQUIRED, COUNTRY_REQUIRED } from '../../constants/formMessages';
import { SheetNameType } from '../../constants/sheetTypes';
import { SxProps, Theme } from '@mui/material';

interface EnhancedProductDemoFormProps {
   title: string;
   subtitle: string;
   buttonText?: string;
   sheetName: SheetNameType;
   formStyles: Record<string, SxProps<Theme>>;
   selectedProducts: string[];
   onProductsChange: (products: string[]) => void;
   productOptions: string[];
   onSubmitCallback?: (values: ProductDemoFormValues) => void;
   workEmail?: string;
   firstName?: string;
   lastName?: string;
   companyName?: string;
   country?: string;
   howDidYouHear?: string;
}

const EnhancedProductDemoForm = withFormik<EnhancedProductDemoFormProps, ProductDemoFormValues>({
   mapPropsToValues: (props) => ({
   	workEmail: props.workEmail || '',
   	firstName: props.firstName || '',
   	lastName: props.lastName || '',
   	companyName: props.companyName || '',
   	country: props.country || '',
   	howDidYouHear: props.howDidYouHear || '',
   }),
   validationSchema: Yup.object({
   	workEmail: Yup.string().email(INVALID_EMAIL).required(EMAIL_REQUIRED),
   	firstName: Yup.string().required('First name is required'),
   	lastName: Yup.string().required('Last name is required'),
   	companyName: Yup.string().required(COMPANY_NAME_REQUIRED),
   	country: Yup.string().required(COUNTRY_REQUIRED),
   	howDidYouHear: Yup.string().required('Please tell us how you heard about us'),
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
   return <ProductDemoForm {...props} />;
});

export default EnhancedProductDemoForm;