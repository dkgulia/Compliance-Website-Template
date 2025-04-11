import {
	DirectionsCar as DirectionsCarIcon,
	Science as ScienceIcon,
	AccountBalanceWallet as AccountBalanceWalletIcon,
	BrunchDining as BrunchDiningIcon,
	CorporateFareOutlined as CorporateFareOutlinedIcon,
	AccountBalance as AccountBalanceIcon,
	AutoStoriesOutlined as AutoStoriesOutlinedIcon,
	CategoryOutlined as CategoryOutlinedIcon,
	HealthAndSafety as HealthAndSafetyIcon,
	HeadsetMic as HeadsetMicIcon,
	CurrencyExchange as CurrencyExchangeIcon,
	EvStation as EvStationIcon,
	Lightbulb as LightbulbIcon,
	MapsHomeWork as MapsHomeWorkIcon,
	Gesture as GestureIcon,
	Laptop as LaptopIcon,
	Factory as FactoryIcon,
	Store as StoreIcon,
	OilBarrel as OilBarrelIcon,
	Vaccines as VaccinesIcon,
	Cached as CachedIcon,
	ConnectingAirports as ConnectingAirportsIcon,
} from '@mui/icons-material';

export interface IndustryItem {
	href: string;
	icon: React.ReactNode;
	title: string;
}
import { WORKSTATION, HOME } from '../../../constants/routes';

export const industryItems: IndustryItem[] = [
	{
		href: WORKSTATION,
		icon: <DirectionsCarIcon />,
		title: 'Automobiles',
	},
	{
		href: HOME,
		icon: <ScienceIcon />,
		title: 'Chemicals',
	},
	{
		href: HOME,
		icon: <AccountBalanceWalletIcon />,
		title: 'Financial Services',
	},
	{
		href: WORKSTATION,
		icon: <BrunchDiningIcon />,
		title: 'Food Processing',
	},
	{
		href: HOME,
		icon: <CorporateFareOutlinedIcon />,
		title: 'Steel',
	},
	{
		href: WORKSTATION,
		icon: <AccountBalanceIcon />,
		title: 'Banking',
	},
	{
		href: WORKSTATION,
		icon: <AutoStoriesOutlinedIcon />,
		title: 'Education and Training',
	},
	{
		href: HOME,
		icon: <CategoryOutlinedIcon />,
		title: 'FMCG',
	},
	{
		href: HOME,
		icon: <HealthAndSafetyIcon />,
		title: 'Health Care',
	},
	{
		href: WORKSTATION,
		icon: <HeadsetMicIcon />,
		title: 'Telecommunications',
	},
	{
		href: HOME,
		icon: <CurrencyExchangeIcon />,
		title: 'Commerce',
	},
	{
		href: WORKSTATION,
		icon: <EvStationIcon />,
		title: 'Electric Vehicle',
	},
	{
		href: HOME,
		icon: <LightbulbIcon />,
		title: 'Power',
	},
	{
		href: WORKSTATION,
		icon: <MapsHomeWorkIcon />,
		title: 'Infrastructure',
	},
	{
		href: WORKSTATION,
		icon: <GestureIcon />,
		title: 'Textiles',
	},
	{
		icon: <LaptopIcon />,
		title: 'IT and BPM',
		href: WORKSTATION,
	},
	{
		icon: <FactoryIcon />,
		title: 'Manufacturing',
		href: WORKSTATION,
	},
	{
		icon: <StoreIcon />,
		title: 'MSME',
		href: WORKSTATION,
	},
	{
		icon: <OilBarrelIcon />,
		title: 'Oil and Gas',
		href: WORKSTATION,
	},
	{
		icon: <VaccinesIcon />,
		title: 'Pharmaceuticals',
		href: WORKSTATION,
	},
	{
		icon: <CachedIcon />,
		title: 'Renewable Energy',
		href: WORKSTATION,
	},
	{
		icon: <ConnectingAirportsIcon />,
		title: 'Tourism',
		href: WORKSTATION,
	},
];

