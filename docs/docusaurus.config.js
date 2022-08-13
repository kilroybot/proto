// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kilroy Proto Docs",
  tagline: "Kilroy Proto Docs",
  url: "https://kilroybot.github.io",
  baseUrl: "/proto/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  organizationName: "kilroybot",
  projectName: "proto",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "docusaurus-protobuffet",
      {
        protobuffet: {
          fileDescriptorsPath: "../generated/docs/proto.json",
          protoDocsPath: "./docs",
          sidebarPath: "./__sidebars__.js",
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Kilroy Proto Docs",
        logo: {
          alt: "Docs Logo",
          src: "img/logo.svg",
        },
      },
      footer: {
        style: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
