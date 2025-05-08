'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import introductionStyle from '../styles/introductionStyle';
import integrationsData from '../constants/integrationsData';
import theme from '../../../theme';

const IntroductionSection: React.FC = () => {
    const { introduction } = integrationsData;
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const highlightPhrases = (text: string, phrases: string[]) => {
        let parts = [text];
        let keyCounter = 0;

        phrases.forEach(phrase => {
            parts = parts.flatMap(part => {
                if (typeof part === 'string') {
                    const splitParts = part.split(phrase);
                    if (splitParts.length > 1) {
                        return splitParts.flatMap((subPart, index) => {
                            if (index < splitParts.length - 1) {
                                keyCounter++;
                                return [
                                    subPart,
                                    <Box
                                        component="span"
                                        key={`highlight-${phrase}-${keyCounter}`}
                                        sx={introductionStyle.highlightText}
                                    >
                                        {phrase}
                                    </Box>
                                ];
                            }
                            return [subPart];
                        });
                    }
                }
                return [part];
            });
        });

        return parts;
    };

    const highlightedPhrases = [
        'security data',
        'see more, do more, and secure more',
        'enhanced',
        'not replace',
        'seamless integration'
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <Box component="section" sx={introductionStyle.section} ref={sectionRef}>
            <Container sx={introductionStyle.container}>
                <Box sx={introductionStyle.contentContainer}>
                    <Typography
                        variant="h2"
                        sx={{
                            ...introductionStyle.title,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    >
                        {introduction.title}
                    </Typography>

                    {introduction.description.map((paragraph, index) => (
                        <Typography
                            key={`intro-paragraph-${index}`}
                            sx={{
                                ...introductionStyle.description,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.8s ease-out ${0.2 + index * 0.2}s, transform 0.8s ease-out ${0.2 + index * 0.2}s`,
                            }}
                        >
                            {highlightPhrases(paragraph, highlightedPhrases)}
                        </Typography>
                    ))}

                    {/* Animated underline effect for the title */}
                    <Box
                        sx={{
                            width: isVisible ? '80px' : '0px',
                            height: '3px',
                            backgroundColor: theme.palette.secondary.main,
                            margin: '0 auto',
                            marginTop: '-0.5rem',
                            transition: 'width 1s ease-out 0.6s',
                        }}
                    />
                </Box>
            </Container>

            <style jsx global>{`
                @keyframes highlight-pulse {
                    0%, 100% {
                        opacity: 0.9;
                    }
                    50% {
                        opacity: 1;
                        text-shadow: 0 0 8px rgba(20, 184, 166, 0.5);
                    }
                }
            `}</style>
        </Box>
    );
};

export default IntroductionSection;