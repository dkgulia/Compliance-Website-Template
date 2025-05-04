'use client';
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import HeroSectionForm, { FormValues } from './HeroSectionForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL } from '../../../constants/formMessages';

interface FormProps {
    onSubmitCallback?: (values: FormValues) => void;
    fullName?: string;
    email?: string;
}

const EnhancedHeroSectionForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
        fullName: props.fullName || '',
        email: props.email || '',
    }),
    validationSchema: Yup.object({
        fullName: Yup.string().required(FULL_NAME_REQUIRED),
        email: Yup.string().email(INVALID_EMAIL).required(EMAIL_REQUIRED),
    }),
    handleSubmit: (values, { props, setSubmitting, resetForm }) => {
        // Submit form logic here - could integrate with API calls
        console.log('Form submitted with values:', values);
        
        // If callback exists, call it
        if (props.onSubmitCallback) {
            props.onSubmitCallback(values);
        }
        
        // Reset form after submission
        setTimeout(() => {
            resetForm();
            setSubmitting(false);
        }, 1000);
    },
})(HeroSectionForm);

export default EnhancedHeroSectionForm;