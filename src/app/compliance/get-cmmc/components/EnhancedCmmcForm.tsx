'use client';
import React, { useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import CmmcCompliantForm from './CmmcCompliantForm';

export interface FormValues {
    fullName: string;
    email: string;
}

interface FormProps {
    selectedOptions: string[];
    onOptionsChange: (options: string[]) => void;
    onSubmitCallback?: (values: FormValues) => void;
    fullName?: string;
    email?: string;
}

// CMMC options
const cmmcOptionsArray = ['Level 1 (Foundational)', 'Level 2 (Advanced)', 'Level 3 (Expert)'];

const EnhancedCmmcForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
        fullName: props.fullName || '',
        email: props.email || '',
    }),
    validationSchema: Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email format').required('Work Email is required'),
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        setSubmitting(false);
        if (props.onSubmitCallback) {
            props.onSubmitCallback(values);
        }
        console.log('Submitted Values:', values);
    },
})((props) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
        props.selectedOptions || [cmmcOptionsArray[0]]
    );

    const handleOptionsChange = (options: string[]) => {
        setSelectedOptions(options);
        if (props.onOptionsChange) {
            props.onOptionsChange(options);
        }
    };

    return (
        <CmmcCompliantForm
            {...props}
            selectedOptions={selectedOptions}
            onOptionsChange={handleOptionsChange}
        />
    );
});

export default EnhancedCmmcForm;