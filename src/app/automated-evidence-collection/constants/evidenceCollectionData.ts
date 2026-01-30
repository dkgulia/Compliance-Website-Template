import {
	CloudSync as CloudSyncIcon,
	Autorenew as AutorenewIcon,
	Rule as RuleIcon,
	Download as DownloadIcon,
} from '@mui/icons-material';

export const evidenceCollectionData = {
	pageTitle: 'Automated Evidence Collection | ComplianceHub',
	pageDescription:
		'Automate compliance evidence collection for SOC 2, ISO 27001, GDPR and more with ComplianceHub. Continuous monitoring and real-time proof for all your audit needs.',
	pageMetaTitle: 'ComplianceHub Automated Evidence Collection | Compliance Proof on Autopilot',
	pageMetaSubTitle: 'Gather, map, and monitor audit evidence—without spreadsheets or manual uploads.',
	pageMetaDescription: [
		'Automated Evidence Collection – Compliance Made Effortless',
		"Collecting audit evidence shouldn't drain resources or slow projects. ComplianceHub's Automated Evidence Collection pulls the right artifacts from your tech stack in real time, maps them to every control, and keeps you perpetually audit-ready.",
	],
	keywords: [
		'automated evidence collection',
		'evidence collection software',
		'audit evidence automation',
		'continuous compliance monitoring',
		'SOC 2 evidence collection',
		'ISO 27001 audit evidence',
	],
	hero: {
		title: 'Automate Every Evidence Pull',
		subtitle: 'Real-time proof for SOC 2, ISO 27001, GDPR, and more.',
		description: [
			'ComplianceHub connects to your cloud, code, and identity providers to fetch audit artifacts continuously—so you never scramble before an audit again.',
		],
		ctaText: 'Book Your Demo',
	},
	benefits: {
		title: 'Why ComplianceHub Evidence Collection?',
		subtitle: '',
		features: [
			{
				title: 'One-Click Integrations',
				icon: CloudSyncIcon,
				description: 'Connect AWS, Azure, Google, GitHub, Okta, and more in minutes.',
			},
			{
				title: 'Always Up to Date',
				icon: AutorenewIcon,
				description: 'Artifacts refresh continuously—no stale screenshots or PDFs.',
			},
			{
				title: 'Mapped to Controls',
				icon: RuleIcon,
				description: 'Each artifact auto-links to SOC 2, ISO 27001, GDPR, and custom controls.',
			},
			{
				title: 'Audit-Ready Exports',
				icon: DownloadIcon,
				description: 'Generate zipped evidence packs for auditors with a single click.',
			},
		],
	},
	process: {
		title: 'How It Works',
		subtitle: '',
		steps: [
			{
				heading: 'Connect',
				description: 'Authorise read-only access to your cloud, code, and identity providers.',
				imageAlt: 'Integration card grid with popular services',
			},
			{
				heading: 'Collect',
				description: 'ComplianceHub fetches logs, configs, user lists, and security settings automatically.',
				imageAlt: 'API pipes streaming artifacts into dashboard',
			},
			{
				heading: 'Map',
				description: 'Artifacts are matched to relevant controls across every framework you track.',
				imageAlt: 'Control matrix lighting up with green badges',
			},
			{
				heading: 'Export',
				description: 'Generate a sealed evidence pack or share a live portal link with auditors.',
				imageAlt: "Modal with 'Download Evidence Pack' button",
			},
		],
	},
	infoSection: {
		title: 'Instant Gap Flags',
		description: [
			"If a required artifact can't be fetched or drifts out of compliance, ComplianceHub flags it instantly—turning blind spots into actionable tasks.",
		],
		imageAlt: 'Red badge on missing evidence row in table',
	},
	cta: {
		title: 'Ready to Ditch Manual Uploads?',
		subtitle: '',
		description: 'See how automated evidence collection keeps you audit-ready year-round.',
		ctaText: 'Schedule My Demo',
		imageAlt: 'Screenshot of evidence export summary',
	},
	faq: {
		title: 'Evidence Collection FAQ',
		subtitle: '',
		questions: [
			{
				question: 'Which integrations are supported?',
				answer: 'AWS, Azure, GCP, GitHub, GitLab, Okta, Google Workspace, Microsoft 365, and many more.',
			},
			{
				question: 'How often is evidence refreshed?',
				answer: 'Continuously—most integrations sync every few minutes, ensuring real-time accuracy.',
			},
			{
				question: 'Does ComplianceHub store my credentials?',
				answer: 'No. We use secure, short-lived tokens and encrypt all data in transit and at rest.',
			},
			{
				question: 'Can I map evidence to multiple frameworks at once?',
				answer:
					'Yes—one artifact can satisfy controls across SOC 2, ISO 27001, GDPR, HIPAA, and your custom frameworks.',
			},
			{
				question: 'How do auditors access the artifacts?',
				answer: 'Export a zipped evidence pack or grant time-boxed access to your live portal.',
			},
			{
				question: 'Is manual upload still possible?',
				answer: "Absolutely. Drag-and-drop any artifact ComplianceHub can't pull automatically.",
			},
		],
	},
};

export default evidenceCollectionData;
