import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import CcpaHeroSectionForm from './HeroSectionForm';

export interface FormValues {
  fullName: string;
  email: string;
}

interface FormProps {}

const EnhancedCcpaHeroSectionForm = withFormik<FormProps, FormValues>({
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
})(CcpaHeroSectionForm);

export default EnhancedCcpaHeroSectionForm;