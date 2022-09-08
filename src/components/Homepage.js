import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>¡Bienvenidos!</p>;

const FirstRightText = () => (
  <p>
    Durante esta sesión ahondaremos en los componentes del Cloud Pak for Integration, cómo diseñar una arquitectura y estimar el licenciamiento.
  </p>
);

const SecondLeftText = () => <p>Gracias por participar</p>;

const SecondRightText = () => (
  <p>
    Esta sesión está en constante evolución; por lo que valoramos todo el feedback. 
    Tu honesta opinión y visión nos permite mejorar continuamente. Lo que quieras compartir respecto de la misma, podés enviarlo a 
    <a
      className={calloutLink}
      href="mailto:belcecilia@ar.ibm.com">
      belcecilia@ar.ibm.com →
    </a>
  </p>
);

const BannerText = () => <h1>IBM Automation - BP University</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
