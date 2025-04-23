/* <ai_context>
   GDPR main page referencing all the new sections + new Book Now section
</ai_context> */

import React from 'react';
import { Metadata } from 'next';
import gdprData from './constants/gdprData';
import GdprHeroSection from './components/GdprHeroSection';
import GdprWhatIsSection from './components/GdprWhatIsSection';
import GdprWhyMattersSection from './components/GdprWhyMattersSection';
import GdprScopeSection from './components/GdprScopeSection';
import GdprHowToComplySection from './components/GdprHowToComplySection';
import GdprLegalBasisSection from './components/GdprLegalBasisSection';
import GdprDataRetentionSection from './components/GdprDataRetentionSection';
import GdprELearningSection from './components/GdprELearningSection';
import GdprDataBreachSection from './components/GdprDataBreachSection';
import GdprCertificationSection from './components/GdprCertificationSection';
import GdprComparingSection from './components/GdprComparingSection';
import GdprPitfallsSection from './components/GdprPitfallsSection';
import GdprBookNowSection from './components/GdprBookNowSection';
import GdprFaqSection from './components/GdprFaqSection';

export const metadata: Metadata = {
    title: gdprData.heroTitle,
    description: gdprData.heroSubtitle,
    keywords: gdprData.keywords,
};

export default function Page() {
    return (
        <>
            <GdprHeroSection />
            <GdprWhatIsSection />
            <GdprWhyMattersSection />
            <GdprScopeSection />
            <GdprHowToComplySection />
            <GdprLegalBasisSection />
            <GdprDataRetentionSection />
            <GdprELearningSection />
            <GdprComparingSection />
            <GdprPitfallsSection />
            <GdprBookNowSection />
            <GdprFaqSection />
        </>
    );
}