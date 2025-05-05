'use client';
import React, { useState } from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, InputAdornment, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import heroSectionStyle from '../styles/heroSectionStyle';

const Iso20000EnhancedForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        consentMarketing: false
    });

    const [errors, setErrors] = useState({
        name: false,
        companyName: false,
        email: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'consentMarketing' ? checked : value
        });
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: false
            });
        }
    };

    const validate = () => {
        const newErrors = {
            name: !formData.name,
            companyName: !formData.companyName,
            email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form submitted:', formData);
            // Add form submission logic here
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
                Request ISO 20000-1 Consultation
            </Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }} sx={heroSectionStyle.gridItem}>
                    <Typography sx={heroSectionStyle.formLabel}>Full Name*</Typography>
                    <TextField
                        fullWidth
                        name="name"
                        placeholder="Your name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        helperText={errors.name ? "Name is required" : ""}
                        sx={heroSectionStyle.formInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon sx={{ color: '#115e59' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid size={{ xs: 12 }} sx={heroSectionStyle.gridItem}>
                    <Typography sx={heroSectionStyle.formLabel}>Phone Number</Typography>
                    <TextField
                        fullWidth
                        name="phone"
                        placeholder="(optional)"
                        variant="outlined"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={heroSectionStyle.formInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon sx={{ color: '#115e59' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid size={{ xs: 12 }} sx={heroSectionStyle.gridItem}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="consentMarketing"
                                checked={formData.consentMarketing}
                                onChange={handleChange}
                                sx={heroSectionStyle.checkbox}
                            />
                        }
                        label="I agree to receive marketing communications"
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={heroSectionStyle.button}
                    >
                        Get Started
                    </Button>

                    <Typography sx={heroSectionStyle.secondaryText}>
                        We respect your privacy and will never share your information.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Iso20000EnhancedForm;