import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/carbon-design-system/gatsby-theme-carbon',
  },
  {
    title: 'Carbon',
    href: 'https://www.carbondesignsystem.com',
  },
  {
    title: 'Cloud Pak Deployment Guides',
    href: 'https://production-gitops.dev/',
  },
];


// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
