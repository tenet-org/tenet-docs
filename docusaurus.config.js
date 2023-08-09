// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/tenet-org/tenet-docs/edit/master/',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('node'),
  defineSection('tLSD'),
  defineSection('diversified-pos'),
  defineSection('tenet-stablecoin-protocol'),
  defineSection('tokenomics'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tenet Docs',
  tagline: 'Official documentation for Tenet',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tenet-org.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tenet-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tenet-org', // Usually your GitHub org/user name.
  projectName: 'tenet-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
      ...SECTIONS
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Tenet Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/tenet.png',
        },
        items: [
          {
            position: 'left',
            label: 'Node',
            to: '/node',
          },
          {
            position: 'left',
            label: 'tLSD',
            to: '/tLSD',
          },
          {
            position: 'left',
            label: 'Diversified POS',
            to: '/diversified-pos',
          },
          {
            position: 'left',
            label: 'Stablecoin',
            to: '/tenet-stablecoin-protocol',
          },
          {
            position: 'left',
            label: 'Tokenomics',
            to: '/tokenomics',
          },
          {
            href: 'https://github.com/tenet-org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity', 'bash'],
      },
    }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
};

module.exports = config;
