'use client';
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import HeroSectionForm from './HeroSectionForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL } from '../../../constants/formMessages';

export interface FormValues {
    name: string;
    email: string;
}

interface FormProps {
    selectedOptions: string[];
    onOptionsChange: (options: string[]) => void;
    onSubmitCallback?: (values: FormValues) => void;
    name?: string;
    email?: string;
}

const EnhancedHeroSectionForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
        name: props.name || '',
        email: props.email || '',
    }),
    validationSchema: Yup.object({
        name: Yup.string().required(FULL_NAME_REQUIRED),
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
    return (
        <HeroSectionForm
            {...props}
        />
    );
});

export default EnhancedHeroSectionForm;