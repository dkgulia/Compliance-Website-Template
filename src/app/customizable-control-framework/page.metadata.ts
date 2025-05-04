import controlFrameworkData from './constants/controlFrameworkData';

export const metadata = {
    title: controlFrameworkData.pageTitle,
    description: controlFrameworkData.pageDescription.join(' '),
    keywords: controlFrameworkData.keywords.join(', '),
};

export default metadata;