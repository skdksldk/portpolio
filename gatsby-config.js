module.exports = {
    siteMetadata: {
        title: 'JunKim',
        description: "JunKim's portfolio website",
        keyword: 'portfolio, portfolio website, frontend developer, frontend, web developer, JunKim',
        siteUrl: '',
        image: '',
        author: 'JunKim',
        profiles: {
            phone: '+82 01058111485',
            email: 'tnwns1485@gmail.com',
            linkedin: '',
            instagram: '',
            github: 'https://github.com/skdksldk',
            velog: 'https://velog.io/@skdksldk2',
            medium: '',
            resume: '',
        },
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}