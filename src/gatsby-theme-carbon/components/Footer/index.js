import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      La sesión<code>Arquitectura CP4i</code> y este sitio son de uso exclusivo durante la <code>IBM BP University</code> y con propósitos de entrenamiento únicamente.
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/cloud/cloud-pak-for-integration', linkText: 'Cloud Pak for Integration' },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/docs/en/cloud-paks/cp-integration/', linkText: 'Documentación oficial' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
