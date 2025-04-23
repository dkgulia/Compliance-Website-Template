/* <ai_context>
   JSON-based content for the GDPR compliance page
</ai_context> */

const gdprData = {
	heroTitle: 'GDPR Compliance Safeguard Personal Data & Build Trust',
	heroSubtitle: 'Your Path to Accountability and Sustainable Data Privacy',
	heroDescription: [
		'The General Data Protection Regulation (GDPR) transformed how organizations handle personal data. Beyond being a legal mandate, GDPR is a framework for protecting individuals’ privacy rights in a globalized, data-driven economy. Whether you’re operating in the European Economic Area (EEA) or offering services to EU residents from the US or elsewhere, GDPR shapes how you collect, store, process, and transfer personal data. Our comprehensive guide helps you navigate every step—awareness, readiness, and long-term accountability—so your organization can confidently comply with GDPR and build trust with your customers.',
	],
	keywords: [
		'GDPR compliance',
		'who does GDPR apply to',
		'does GDPR apply to US companies',
		'gdpr certification',
		'gdpr data retention requirements',
		'gdpr e-learning',
		'ccpa vs gdpr',
		'how to comply with GDPR',
		'personal data breach',
		'accountability principle',
	],
	ctaText: 'Begin Your GDPR Journey',
	imageIdeasForPage: [
		'Illustration showing data flowing securely between EU and non-EU companies',
		'Visual of multi-step compliance journey with icons for each phase',
		'Infographic comparing compliance frameworks like GDPR vs. CCPA',
	],
	imagePrompt:"Create a detailed illustration showing data protection and privacy concepts. Feature a digital shield or protective barrier surrounding stylized personal data elements such as documents, identity cards, and profile information. Include intricate details like biometric scanners, encryption symbols, and secure network connections. Incorporate subtle European Union symbols like stars arranged in a circle. Show data flowing through secure channels with multiple layers of protection. Add detailed visual metaphors for consent mechanisms, data subject rights, and accountability. The style should be sophisticated, technical, and detailed with depth and dimension. Include small details that reward closer inspection, such as tiny privacy icons, security patterns, and abstract representations of data governance frameworks.",
	sections: [
		{
			Sno: '1',
			title: 'What is GDPR?',
			subtitle: "The EU's landmark regulation that established comprehensive data protection standards, empowering individuals with control over their personal information while creating a unified framework for organizations worldwide",
			designGuidelines: 'Hero section with bold heading, supporting visuals on the right',
			contentType: 'Simple Info',
			interactiveElement: 'image',
			content: {
				heading: 'The World’s Strictest Data Protection Law',
				subheading: 'The EU’s GDPR is recognized as a global benchmark for safeguarding personal data.',
				imageIdea: 'Shield icon representing data security',
			},
			iamgePrompt:"Create a minimalist, professional icon representing data protection and GDPR compliance with a clean, modern aesthetic. The design should feature abstract elements of a shield or lock combined with data elements like binary code or data flows. Use a color palette of blue tones against a dark background to match the existing website design. The image should convey security, trust, and data protection in a sophisticated way without text. Make it suitable for a corporate tech website focused on compliance services"
		},
		{
			Sno: '2',
			title: 'Why GDPR Matters',
			subtitle: 'Ensuring Trust and Reducing Risk',
			designGuidelines: 'Icon cards with bold headings and short descriptions',
			contentType: 'Features Block',
			interactiveElement: 'muiIcon',
			features: [
				{
					title: 'Protect Individual Rights',
					muiIcon: 'Security',
					description: 'GDPR’s aim is to defend personal data and respect data subject freedoms.',
				},
				{
					title: 'Drive Accountability',
					muiIcon: 'Policy',
					description: 'Organizations are obligated to demonstrate and document compliance.',
				},
				{
					title: 'Enhance Reputation',
					muiIcon: 'Star',
					description: 'A strong GDPR stance elevates brand trust and fosters deeper customer relationships.',
				},
			],
		},
		{
			Sno: '3',
			title: 'Who Does GDPR Apply To?',
			subtitle: 'Understanding territorial scope and organizational obligations for EU and non-EU entities',
			designGuidelines: 'Alternate text box with Q&A style bullet points',
			contentType: 'Simple Info',
			interactiveElement: 'muiIcon',
			content: {
				heading: 'Expansive Reach',
				subheading: 'Any organization—even if outside the EU—that processes personal data of EU residents.',
				imageIdea: 'Map illustrating extraterritorial scope',
			},
			imagePrompt:"Create a minimalist digital illustration representing global data governance and GDPR scope. Design a stylized globe or world map with network connections or data flow lines, using primarily blue tones against a dark navy background. Include subtle elements suggesting EU and international connections. The illustration should convey the global reach of data protection regulations with a clean, professional aesthetic. Make the image suitable for a corporate tech website with a modern, sleek look. Use gradient blues similar to #4682B4 for the main elements. The image should be square with dimensions 400x400 pixels."
		},
		{
			Sno: '4',
			title: 'How to Comply with GDPR',
			subtitle: 'A Three-Phase Accountability Life Cycle',
			designGuidelines: 'Numbered list for steps with short text on the right',
			contentType: 'List Block',
			interactiveElement: 'colored mui icons',
			list: [
				'Phase 1: Prepare – Assign a GDPR team, identify data flows, and update privacy policies.',
				'Phase 2: Operate – Embed compliant procedures like data breach handling and data subject request workflows.',
				'Phase 3: Maintain – Continually verify compliance, monitor third parties, and run regular audits.',
			],
		},
		{
			Sno: '5',
			title: 'Legal Basis & Transparency',
			subtitle: 'Foundational Principles',
			designGuidelines: 'Icon cards with short paragraphs',
			contentType: 'Features Block',
			interactiveElement: 'muiIcon',
			features: [
				{
					title: 'Consent',
					muiIcon: 'VerifiedUser',
					description: 'Clear permission required for data processing with option for users to withdraw consent at any time.'
				    },
				    {
					title: 'Legitimate Interests',
					muiIcon: 'Gavel',
					description: 'Requires careful balancing of organizational needs against individual privacy rights and expectations.'
				    },
				    {
					title: 'Contract, Legal Obligation',
					muiIcon: 'LibraryBooks',
					description: 'Processing necessary to fulfill contractual terms or comply with legal requirements and obligations.'
				    }
			],
		},
		{
			Sno: '6',
			title: 'Data Retention & Minimization',
			subtitle: 'Storing Data Only As Needed',
			designGuidelines: 'Flat list design with a short explanation under each item',
			contentType: 'Features Block',
			interactiveElement: 'muiIcon',
			features: [
				{
					title: 'Minimize Data',
					muiIcon: 'CheckCircle',
					description: 'Collect only the personal data that’s absolutely required for specified objectives.',
				},
				{
					title: 'Retention Policies',
					muiIcon: 'Dashboard',
					description: 'Define how long personal data is kept, ensuring it’s not stored beyond necessity.',
				},
			],
		},
		{
			Sno: '7',
			title: 'GDPR & E-learning',
			subtitle: 'Continuous Staff & Processor Education',
			blockType: 'List',
			designGuidelines: 'Numbered list with icons on the left, short text on the right',
			interactiveElement: 'colored mui icons',
			list: [
				'Onboarding modules for new hires: mandatory GDPR e-learning',
				'Regular refresher courses for evolving guidelines',
				'Extended training for third-party processors on lawful data handling',
			],
		},
		{
			Sno: '8',
			title: 'Data Breach Handling',
			subtitle: 'Responding Rapidly & Effectively',
			interactiveElement: 'muiIcon',
			ctaText: 'Implement a Breach Response Plan',
			imageIdeas: ['Flowchart depicting incident detection, containment, notification, remediation'],
			blockType: 'Call to Action',
			designGuidelines: 'Book your demo section with Title on the left, bullet points in the middle, CTA at bottom',
		},
		{
			Sno: '9',
			title: 'GDPR Certification & Audits',
			subtitle: 'Prove Your Compliance Posture',
			designGuidelines: 'Eye-catching section highlighting the value of official certifications',
			contentType: 'text',
			interactiveElement: 'muiIcon',
			content: {
				heading: 'Third-Party Assurance',
				subheading: 'Certification demonstrates your GDPR readiness for clients and regulators alike.',
				imageIdea: "Badge or seal illustrating 'GDPR Certified'",
			},
		},
		{
			Sno: '10',
			title: 'Comparing GDPR vs. CCPA',
			subtitle: 'Key Differences & Overlaps',
			blockType: 'List',
			designGuidelines: 'Numbered list summarizing major points',
			interactiveElement: 'colored mui icons',
			list: [
				'Scope: GDPR covers EU residents; CCPA covers California consumers',
				'Rights: Both ensure consumer rights but with nuanced variations',
				'Penalties: Both frameworks enforce fines, with GDPR having global extraterritorial reach',
			],
		},
		{
			Sno: '11',
			title: 'Common Pitfalls & Best Practices',
			subtitle: 'How to Avoid Non-Compliance',
			designGuidelines: 'Single-column text with an icon or small illustration to the side',
			contentType: 'Simple Info',
			interactiveElement: 'muiIcon',
			content: {
				steps: [
					'Pitfall: Overlooking third-party processors. Mitigation: Conduct thorough vendor risk assessments & maintain updated contracts.',
					'Pitfall: Generic or outdated privacy notices. Mitigation: Ensure transparency & frequent reviews.',
					'Pitfall: Inconsistent data breach response. Mitigation: Create a formal incident reporting procedure with 72-hour notification.',
				],
			},
		},
		{
			Sno: '12',
			title: 'Frequently Asked Questions',
			subtitle: 'Your GDPR Queries Answered',
			blockType: 'FAQ',
			designGuidelines: 'Collapsible sections for each Q&A',
			interactiveElement: 'none',
			content: {
				questions: [
					{
						question: 'Why is GDPR important or beneficial?',
						answer:
							'GDPR enforces robust standards for data privacy, granting individuals stronger rights and compelling organizations to manage data responsibly. This fosters trust and mitigates legal and reputational risks.',
					},
					{
						question: 'Does this company provide GDPR solutions/services?',
						answer:
							'Yes. We offer end-to-end GDPR compliance guidance—from readiness assessments and e-learning modules, to data breach management workflows and certification support.',
					},
					{
						question: 'How do you implement/get started with GDPR?',
						answer:
							'Begin by appointing a Data Protection Officer (if required), identifying personal data flows, and updating privacy notices. Then embed standard operating procedures covering data retention, breach reporting, and third-party audits.',
					},
					{
						question: 'How much does it cost or what are the requirements?',
						answer:
							'Compliance costs vary based on factors like organizational size, data volume, and complexity. Contact us to discuss a tailored GDPR plan that meets your budget and risk profile.',
					},
				],
			},
		},
	],
};

export default gdprData;

export const colors = {
	primary: {
		main: '#003776',
		dark: '#040e25',
		darker: '#1a2634',
		blue: '#203e5f',
		deepBlue: '#1a365d',
		midBlue: '#2a4365',
	},
	accent: {
		yellow: {
			main: '#ffcc00',
			light: '#fee5b1',
		},
		teal: '#64ffda',
		blue: '#3f91eb',
	},
	text: {
		light: '#e6f1ff',
		secondary: '#a8b2d1',
		subtle: '#eaeaea',
		blue: '#b5c2e0',
		white: '#ffffff',
	},
	ui: {
		card: 'rgba(255, 255, 255, 0.05)',
		highlight: '#153e75',
		iconBg: 'rgba(63, 145, 235, 0.1)',
	},
};
