'use client';
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import HeroSectionForm from './HeroSectionForm';

export interface FormValues {
  name: string;
  email: string;
}

interface FormProps {}

const EnhancedHeroSectionForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({
    name: '',
    email: '',
  }),
  validationSchema: Yup.object({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Work Email is required'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log('Submitted Values:', values);
    setSubmitting(false);
  },
})(HeroSectionForm);

export default EnhancedHeroSectionForm;