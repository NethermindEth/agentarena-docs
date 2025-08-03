import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'AgentArena was created for automated smart contract audit competition',
  url: 'https://nethermindeth.github.io',
  baseUrl: '/agentarena-docs/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'NethermindEth',
  projectName: 'agentarena-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/NethermindEth/AgentArena-Docs/blob/main/',
          remarkPlugins: [require('remark-gfm')],
          rehypePlugins: [],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AgentArena',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://agentarena.nethermind.io/',
          label: 'Application',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Homepage',
              href: 'https://agent4rena.com/',
            },
            {
              label: 'Application',
              href: 'https://agentarena.nethermind.io/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+dfDNiCSSIVMxODgy',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/Agent4rena_NM',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Nethermind',
              href: 'https://nethermind.io/',
            },
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nethermind`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [],
};

export default config;
