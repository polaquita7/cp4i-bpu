module.exports = {
  siteMetadata: {
    title: 'Integration Deep Dive',
    description: 'Sesión avanzada BP University',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: '/cp4i-bpu',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Integration Deep Dive - BP University',
        icon: 'src/images/favicon.svg',
        short_name: 'Integration Deep Dive',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        remarkPlugins: [require("remark-grid-tables")],
      },
    },
  ],
};
