export const securityTrainingData = {
  pageTitle: 'Hexafort Security Training Module | Empower Your Human Firewall',
  pageSubTitle:
    'Deliver engaging security-awareness lessons, phishing simulations, and audit-ready reports—all in one place.',
  pageDescription: [
    "Hexafort's Security Training Module turns every employee into a proactive line of defense. Launch bite-sized lessons, run real-world phishing drills, and track compliance with zero manual effort.",
  ],
  keywords: [
    'security awareness training',
    'cyber security awareness training',
    'phishing simulation platform',
    'employee security training',
    'security training software',
    'continuous security education',
  ],
  imageIdeasForPage: [
    'Hero banner showing diverse employees completing quick security quizzes on laptops',
    'Dashboard screenshot with completion percentages and phishing-click heat-map',
    'Graphic of 4-step training cycle: Assign → Learn → Simulate → Report',
    'Certificate mock-up for employees who finish all lessons',
  ],
  sections: [
    {
      Sno: '1',
      blockType: 'Hero',
      interactiveElement: 'muiIcon',
      designGuidelines:
        'Bold headline, subheadline, single CTA, background illustration',
      content: {
        heroTitle: 'Security Awareness Training Automated',
        heroSubtitle: 'Engage. Test. Report. Repeat.',
        heroDescription: [
          'Deliver role-based lessons and phishing simulations that keep risks low and auditors happy—without drowning your team in administration.',
        ],
        ctaText: 'Start a Free Pilot',
      },
    },
    {
      Sno: '2',
      blockType: 'Simple Info',
      interactiveElement: 'image',
      designGuidelines: 'Image left, text right—ideal for a product screenshot',
      content: {
        title: 'Built for Busy Teams',
        imageIdea:
          'Screenshot of lesson catalog with filter tags (PCI, GDPR, SOC 2)',
        description: [
          'Choose from a growing library of bite-sized video lessons mapped to frameworks like SOC 2, ISO 27001, and GDPR.',
          'Lessons auto-assign by role—developers see secure coding, finance gets phishing & wire-fraud modules.',
        ],
        imagePrompt: 'Dashboard catalog grid with lesson thumbnails',
      },
    },
    {
      Sno: '3',
      blockType: 'Benefits',
      interactiveElement: 'muiIcon',
      designGuidelines: 'Four icon cards in two columns',
      content: {
        title: 'Why Hexafort Training?',
        subtitle: '',
        features: [
          {
            title: 'Phishing Simulations',
            muiIcon: 'Email',
            description:
              'Deploy realistic campaigns and auto-enroll clickers in refresher lessons.',
          },
          {
            title: 'Progress Dashboards',
            muiIcon: 'Insights',
            description:
              'See completion rates, quiz scores, and high-risk users at a glance.',
          },
          {
            title: 'Audit-Ready Proof',
            muiIcon: 'Rule',
            description:
              'Export signed certificates and training logs for any auditor in seconds.',
          },
          {
            title: 'Localization Built-In',
            muiIcon: 'Language',
            description:
              'Deliver content in 20+ languages so global teams stay engaged.',
          },
        ],
      },
    },
    {
      Sno: '4',
      blockType: 'Steps/Process',
      interactiveElement: 'none',
      designGuidelines: 'Numbered four-step outline',
      content: {
        title: 'How It Works',
        subtitle: '',
        steps: [
          {
            heading: ' Connect HR Directory',
            description:
              'Sync users and roles from Azure AD, Okta, or Google Workspace.',
            image: '',
            imagePrompt: 'Integration icons connecting to Hexafort logo',
          },
          {
            heading: ' Assign Lessons',
            description:
              'Auto-enroll roles into curated curricula or build your own tracks.',
            image: '',
            imagePrompt: 'Drag-and-drop lesson builder UI',
          },
          {
            heading: ' Simulate Attacks',
            description:
              'Run phishing or USB-bait campaigns, then auto-coach clickers.',
            image: '',
            imagePrompt: 'Email icon morphing into alert badge',
          },
          {
            heading: ' Prove Compliance',
            description:
              'Generate completion certificates and auditor-friendly CSV exports.',
            image: '',
            imagePrompt: 'Certificate PDF with download arrow',
          },
        ],
      },
    },
    {
      Sno: '5',
      blockType: 'Call to Action',
      interactiveElement: 'muiIcon',
      designGuidelines: 'Title left, bullet list, CTA button, screenshot right',
      content: {
        title: 'Launch in Under 30 Minutes',
        subtitle: 'Get your compliance training program up and running faster than ever',
        image: '',
        imagePrompt: 'GIF placeholder of quick setup wizard',
        description:
          'Book a live demo and see how easy continuous training can be.',
        ctaText: 'Book My Demo',
      },
    },
    {
      Sno: '6',
      blockType: 'FAQ',
      interactiveElement: 'none',
      designGuidelines: 'Collapsible Q&A',
      content: {
        title: 'Security Training FAQ',
        subtitle: '',
        questions: [
          {
            question: 'How often are lessons updated?',
            answer:
              'Our team is working hard to create new content every week.',
          },
          {
            question: 'Can I upload my own content?',
            answer: 'Yes—SCORM, video, and PDF uploads are fully supported.',
          },
          {
            question: 'Does Hexafort support phishing simulations?',
            answer:
              'Absolutely. Choose from a template library or craft custom campaigns.',
          },
          {
            question: 'How do I prove compliance to auditors?',
            answer: 'We have multiple export options.',
          },
          {
            question: 'What frameworks does training map to?',
            answer:
              'SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, and custom mappings.',
          },
        ],
      },
    },
  ],
};
