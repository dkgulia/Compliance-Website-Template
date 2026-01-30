export interface Testimonial {
	id: number;
	name: string;
	position: string;
	company: string;
	quote: string;
	avatar: string;
}

export const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'CEO',
		position: 'CEO',
		company: 'Whizphys.ai',
		quote: 'They are experts at understanding the nuances of different data security and compliance requirements. As a result, they were extremely helpful in identifying areas for us to address in a timely manner. They are pleasant to work with and capable of meeting our company\'s data protection and certification requirements.',
		avatar: '/images/avatars/whizphys-ceo.jpg',
	},
	{
		id: 2,
		name: 'CFO',
		position: 'CFO',
		company: 'Dartle',
		quote: 'As the CFO of Dartle, a SaaS analytics platform revolutionizing sports academies, data security and compliance are critical to our operations. ComplianceHub has been a game-changer in ensuring our financial and athlete performance data remain secure and compliant with industry standards. Their robust security infrastructure and proactive threat management have given us the confidence to scale without compromising sensitive information.',
		avatar: '/images/avatars/dartle-cfo.jpg',
	},
	{
		id: 3,
		name: 'CTO',
		position: 'CTO',
		company: 'Economize.cloud',
		quote: 'Team was swift and helpful with the communication. Got the certifications done, and appreciate the effort ComplianceHub team has put. User friendly pricing and I recommend it.',
		avatar: '/images/avatars/economize-cto.jpg',
	},
	{
		id: 4,
		name: 'Clair Phelps',
		position: 'CISO',
		company: '',
		quote: 'As a virtual CISO and DPO I have relied on ComplianceHub to deliver support with ISO 27001 compliance. They completed a very detailed and useful internal audit prior to the external certification audit which ensured we had zero findings on the external certification audit report. The ComplianceHub team have a number of SMEs and nothing is too much trouble. I find ComplianceHub a pleasure to work with and am looking forward to working with them further on other projects.',
		avatar: '/images/avatars/clair-phelps.jpg',
	},
	{
		id: 5,
		name: 'Intain Representative',
		position: '',
		company: 'Intain',
		quote: 'In a short span of time, the ComplianceHub team really understood the requirements of our organization and provided excellent support and assistance. The team\'s proactive approach, responsiveness, and dedication to customer satisfaction make them a reliable partner. We truly appreciate their efforts and look forward to continuing our collaboration.',
		avatar: '/images/avatars/intain-rep.jpg',
	},
	{
		id: 6,
		name: 'Dartle Representative',
		position: '',
		company: 'Dartle',
		quote: 'ComplianceHub\'s expertise in cloud security and risk management has not only streamlined our compliance processes but also safeguarded our platform against potential cyber threats. Their team is responsive, knowledgeable, and committed to providing top-tier security solutions.',
		avatar: '/images/avatars/dartle-rep.jpg',
	},
];