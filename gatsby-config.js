module.exports = {
  siteMetadata: {
    siteTitle: `VoiceSmith Documentation`,
    defaultTitle: `VoiceSmith Documentation`,
    siteTitleShort: `VoiceSmith Documentation`,
    siteDescription: `Documentation of VoiceSmith - A Text To Speech Toolkit`,
    siteUrl: `https://rocketdocs.netlify.app`,
    siteAuthor: `@dunky11`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#2f54eb`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/dunky11/voicesmith-docs`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VoiceSmith Documentation`,
        short_name: `VoiceSmith Documentation`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
