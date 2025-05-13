'use client';
import React, { useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import HeroSectionForm, { FormValues } from './HeroSectionForm';
import { FULL_NAME_REQUIRED, EMAIL_REQUIRED, INVALID_EMAIL } from '../../../constants/formMessages';
import { complianceOptionsArray } from '../../../constants/complianceData';

interface FormProps {
    onSubmitCallback?: (values: FormValues) => void;
    fullName?: string;
    email?: string;
    selectedOptions: string[];
    onOptionsChange: (options: string[]) => void;
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
})((props) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
        complianceOptionsArray.slice(0, 3)
    );

    const handleOptionsChange = (options: string[]) => setSelectedOptions(options);

    return (
        <HeroSectionForm
            {...props}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
        />
    );
});

export default EnhancedHeroSectionForm;