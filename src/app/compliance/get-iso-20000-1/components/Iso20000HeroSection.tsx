'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import { iso20000Data } from '../constants/iso20000Data';
import heroSectionStyle from '../styles/heroSectionStyle';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const Iso20000HeroSection: React.FC = () => {
    const heroContent = iso20000Data.sections.find(
        (section) => section.blockType === 'Hero'
    )?.content;

    if (!heroContent) return null;

    const [selectedOptions, setSelectedOptions] = useState<string[]>([
        'ISO 27001',
        'ISO 42001',
        'ISO 20000-1'
    ]);

    const handleOptionsChange = (newOptions: string[]) => {
        setSelectedOptions(newOptions);
    };

    const handleSubmitCallback = (values: ComplianceFormValues) => {
        console.log('Submitted with Values and Options:', { ...values, selectedOptions });
    };

    const complianceOptions = [
        'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
        'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
        'ISO 27701', 'DORA', 'CMMC', 'PDPA'
    ];

    return (
        <Box sx={heroSectionStyle.container}>
            <Container>
                <Box sx={heroSectionStyle.containerBox}>
                    <Box sx={heroSectionStyle.leftContentBox}>
                        <Box sx={heroSectionStyle.tag}>
                            <Typography sx={heroSectionStyle.tagText}>
                                {heroContent.heroTitle}
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={heroSectionStyle.mainTitle}>
                            {heroContent.heroSubtitle}
                        </Typography>
                        {heroContent.heroDescription?.map((desc: string, i: number) => (
                            <Typography key={i} sx={heroSectionStyle.description}>
                                {desc}
                            </Typography>
                        ))}
                        <Typography sx={heroSectionStyle.description}>
                            Protect your service delivery and enhance reliability by complying with ISO 20000-1. HexaFort helps automate tasks, track processes, and streamline your path to certification.
                        </Typography>
                        <Box sx={heroSectionStyle.featuresContainer}>
                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <VerifiedIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Proven Best Practices
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        ISO Certified
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <ShieldIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Holistic Approach
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        End-to-End Service
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={heroSectionStyle.featureItem}>
                                <Box sx={heroSectionStyle.iconWrapper}>
                                    <LockIcon sx={heroSectionStyle.featureIcon} />
                                </Box>
                                <Box sx={heroSectionStyle.featureTextWrapper}>
                                    <Typography sx={heroSectionStyle.featureTitle}>
                                        Secure Delivery
                                    </Typography>
                                    <Typography sx={heroSectionStyle.featureSubtitle}>
                                        Protection Built-in
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={heroSectionStyle.formBox}>
                        <EnhancedComplianceForm
                            title="Book Your ISO 20000-1 Demo Today!"
                            subtitle="Get answers to all your questions about ISO 20000-1 compliance."
                            buttonText="Book Your Demo"
                            sheetName={sheetNameTypes.iso20000Form}
                            formStyles={heroSectionStyle}
                            selectedOptions={selectedOptions}
                            onOptionsChange={handleOptionsChange}
                            complianceOptions={complianceOptions}
                            onSubmitCallback={handleSubmitCallback}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Iso20000HeroSection;