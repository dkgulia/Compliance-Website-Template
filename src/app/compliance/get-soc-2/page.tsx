import { Metadata } from "next";
import React from 'react';
import HowItWorks from './components/HowItWorks';
import AuditTable from './components/AuditTable';
import HeroSection from './components/HeroSection';
import FaqSOC2 from './components/Faq';
import GettingStarted from './components/GettingStarted';
import BookADemo from '../components/BookADemo';

export const metadata: Metadata = {
  title: "SOC 2 Compliance Guide & Automation Tool | ComplianceHub",
  description: "Achieve SOC 2 Type I & II compliance faster. Our platform automates evidence collection, control mapping, and audit readiness for security-conscious SaaS companies.",
  keywords: ["soc 2 compliance", "soc 2 type 2", "soc 2 automation", "soc 2 audit", "trust service principles"],
  openGraph: {
    title: "SOC 2 Compliance Guide & Automation Tool | ComplianceHub",
    description: "Achieve SOC 2 Type I & II compliance faster. Our platform automates evidence collection, control mapping, and audit readiness for security-conscious SaaS companies.",
    type: "website",
    url: "https://compliancehub.com/soc-2",
    siteName: "ComplianceHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ComplianceHub SOC 2 Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOC 2 Compliance Guide & Automation Tool | ComplianceHub",
    description: "Achieve SOC 2 Type I & II compliance faster. Our platform automates evidence collection, control mapping, and audit readiness for security-conscious SaaS companies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			<AuditTable />
			<GettingStarted />
			<BookADemo/>
			<FaqSOC2 />
		</>
	);
};

export default page;
