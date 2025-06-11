export const sheetNameTypes = {
	ccpaForm: 'ccpaForm',
	cmmcForm: 'cmmcForm',
	gdprForm: 'gdprForm',
	hipaaForm: 'hipaaForm',
	iso27001Form: 'iso27001Form',
	soc2Form: 'soc2Form',
	pcidssForm: 'pcidssForm',
	nistForm: 'nistForm',
	dpdpForm:'dpdpForm',
	doraForm:'doraForm',
	iso20000Form:'iso20000Form',
	iso22301Form:'iso22301Form',
	iso42001Form:'iso42001Form',
	iso27018Form:'iso27018Form',
	iso27701Form:'iso27701Form',
	bookDemo:'bookDemo',
	getAProductDemo:'getAProductDemo',
	contactUs:'contactUs',
} as const;

export type SheetNameType = typeof sheetNameTypes[keyof typeof sheetNameTypes];
