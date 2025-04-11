import React from 'react';
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

import { WORKSTATION, HOME } from '../../../constants/routes';

export const industryData = {
	left: [
		{
			icon: <DirectionsCarIcon />,
			text: 'Automobiles',
			href: WORKSTATION,
		},
		{
			icon: <ScienceIcon />,
			text: 'Chemicals',
			href: WORKSTATION,
		},
		{
			icon: <AccountBalanceWalletIcon />,
			text: 'Financial Services',
			href: WORKSTATION,
		},
		{
			icon: <BrunchDiningIcon />,
			text: 'Food Processing',
			href: HOME,
		},
		{
			icon: <CorporateFareOutlinedIcon />,
			text: 'Steel',
			href: WORKSTATION,
		},
		{
			icon: <AccountBalanceIcon />,
			text: 'Banking',
			href: HOME,
		},
		{
			icon: <AutoStoriesOutlinedIcon />,
			text: 'Education and Training',
			href: WORKSTATION,
		},
		{
			icon: <CategoryOutlinedIcon />,
			text: 'FMCG',
			href: WORKSTATION,
		},
		{
			icon: <HealthAndSafetyIcon />,
			text: 'Health Care',
			href: HOME,
		},
		{
			icon: <HeadsetMicIcon />,
			text: 'Telecommunications',
			href: WORKSTATION,
		},
		{
			icon: <CurrencyExchangeIcon />,
			text: 'Commerce',
			href: WORKSTATION,
		},
		{
			icon: <EvStationIcon />,
			text: 'Electric Vehicle',
			href: WORKSTATION,
		},
		{
			icon: <LightbulbIcon />,
			text: 'Power',
			href: WORKSTATION,
		},
		{
			icon: <MapsHomeWorkIcon />,
			text: 'Infrastructure',
			href: WORKSTATION,
		},
		{
			icon: <GestureIcon />,
			text: 'Textiles',
			href: WORKSTATION,
		},
	],
	right: [
		{
			icon: <LaptopIcon />,
			text: 'IT and BPM',
			href: WORKSTATION,
		},
		{
			icon: <FactoryIcon />,
			text: 'Manufacturing',
			href: WORKSTATION,
		},
		{
			icon: <StoreIcon />,
			text: 'MSME',
			href: WORKSTATION,
		},
		{
			icon: <OilBarrelIcon />,
			text: 'Oil and Gas',
			href: WORKSTATION,
		},
		{
			icon: <VaccinesIcon />,
			text: 'Pharmaceuticals',
			href: WORKSTATION,
		},
		{
			icon: <CachedIcon />,
			text: 'Renewable Energy',
			href: WORKSTATION,
		},
		{
			icon: <ConnectingAirportsIcon />,
			text: 'Tourism',
			href: WORKSTATION,
		},
	],
};

